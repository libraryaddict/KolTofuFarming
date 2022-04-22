import {
  bufferToFile,
  chatPrivate,
  fileToBuffer,
  getPlayerId,
  getPlayerName,
  getProperty,
  getShopLog,
  Item,
  myName,
  nowToInt,
  print,
  setProperty,
  toInt,
  toItem,
  toJson,
  urlEncode,
  visitUrl,
} from "kolmafia";

class StorePurchase {
  date: number;
  user: string;
  amount: number;
  meat: number;
  item: Item;
}

enum WarningType {
  NONE,
  KMAIL,
  FINAL_KMAIL,
  IGNORED,
}

class TofuWarning {
  lastWarned: number = Date.now();
  tofu: number;
  user: string;
  status: WarningType = WarningType.NONE;

  constructor(jsonObject?) {
    if (jsonObject == null) {
      return;
    }

    this.tofu = jsonObject.tofu;
    this.lastWarned = jsonObject.lastWarned;
    this.user = jsonObject.user;
    this.status = jsonObject.status;
  }
}

class ContactList {
  ignored: [number, string][];
  contacts: [number, string][];

  load() {
    let page = this.getPage();

    this.ignored = this.getIgnored(page);
    this.contacts = this.getContacts(page);
  }

  ignoreUser(userId: number) {
    if (this.isIgnored(userId)) {
      print("Already ignored " + userId);
      return;
    }

    // chatPrivate(myName(), "/baleet " + userId);
    print("Ignored => " + userId);
    this.ignored.push([userId, ""]);
  }

  isIgnored(userId: number): boolean {
    return this.ignored.find((v) => v[0] == userId) != null;
  }

  getPage() {
    return visitUrl("account_contactlist.php");
  }

  getIgnored(page: string = this.getPage()): [number, string][] {
    page = page.substring(page.indexOf("<b>Ignore List</b>"));

    return this.getPlayers(page);
  }

  getContacts(page: string = this.getPage()): [number, string][] {
    page = page.substring(0, page.lastIndexOf("<b>Ignore List</b>"));
    bufferToFile(page.toString(), "test.html");

    return this.getPlayers(page);
  }

  private getPlayers(page: string): [number, string][] {
    let spl = page.split("type=checkbox name=pids");

    let users: [number, string][] = [];

    for (let s of spl) {
      let match = s.match(
        /href=(?:'|")showplayer.php\?who=(\d+)(?:'|") class=nounder><b>([a-zA-Z0-9 ]+)</
      );

      if (match == null) {
        continue;
      }

      users.push([+match[1], match[1]]);
    }

    return users;
  }
}

class TofuPurchase {
  userId: number;
  user: string;
  purchased: number;
  ascensions: number;
  lastPurchase: number;
}

class TofuAbusers {
  warnings: TofuWarning[] = [];
  contacts: ContactList = new ContactList();
  maxTofuPerDay: number = 1.5; // Ascensions count as another day. This should realistically be 1, but we know people love buying stuff
  timeBetweenWarnings: number = 3; // Days
  tofuIgnore: string = "tofuWhitelistAbuse";

  constructor() {
    this.contacts.load();
    this.loadWarnings();
  }

  getIgnored(): string[] {
    if (getProperty(this.tofuIgnore) == "") {
      return [];
    }

    return getProperty(this.tofuIgnore).split(",");
  }

  setIgnored(playerId: string) {
    let ignored = this.getIgnored();

    if (this.getIgnored().includes(playerId)) {
      return;
    }

    ignored.push(playerId);

    setProperty(this.tofuIgnore, ignored.join(","));
  }

  isIgnored(playerId: string) {
    return this.getIgnored().includes(playerId);
  }

  loadWarnings() {
    let string = fileToBuffer("tofu_warnings.json");

    if (string == null || string.length == 0) {
      return;
    }

    let obj = JSON.parse(string);

    for (let array of obj) {
      this.warnings.push(new TofuWarning(array));
    }
  }

  saveWarnings() {
    bufferToFile(JSON.stringify(this.warnings), "tofu_warnings.json");
  }

  handleWarning(purchase: TofuPurchase) {
    let user = purchase.user;

    let warning = this.warnings.find(
      (w) => w.user.toLowerCase() == user.toLowerCase()
    );

    let day = 24 * 60 * 60 * 1000;

    if (warning == null) {
      warning = new TofuWarning();
      warning.user = user;
      warning.tofu = purchase.purchased;

      this.warnings.push(warning);
    } else {
      if (warning.status >= WarningType.IGNORED) {
        let ignored = this.contacts.isIgnored(purchase.userId);

        print(
          `${purchase.user} should be ignored as per logs! How are they doing this! Skipping.. Are they actually ignored though: ${ignored}`,
          "red"
        );
        return;
      }

      let daysPassed = (Date.now() - warning.lastWarned) / day;

      if (daysPassed > 14) {
        // Reset the tofu purchased if its been more than 2 weeks since last warning
        warning.lastWarned = Date.now();
        warning.tofu = purchase.purchased;
        warning.status = WarningType.NONE;

        print(
          "Huh. I've warned " +
            purchase.user +
            " about this " +
            Math.round(daysPassed) +
            " days ago.."
        );
      } else {
        warning.lastWarned = Date.now();
      }
    }

    warning.tofu = Math.max(warning.tofu, purchase.purchased);

    let newStatus = WarningType[WarningType[warning.status + 1]];

    warning.status = newStatus;

    switch (warning.status) {
      case WarningType.KMAIL:
        print(`${purchase.user} is a first time offender, sent a kmail.`);
        this.sendKmail(purchase.userId, this.getKmail(user));
        break;
      case WarningType.FINAL_KMAIL:
        print(
          `${purchase.user} is a second time offender. Sent a another kmail.`
        );
        this.sendKmail(purchase.userId, this.getFinalKmail(user));
        break;
      case WarningType.IGNORED:
        print(`${purchase.user} ignored both kmails, now baleeting.`);
        this.contacts.ignoreUser(purchase.userId);
        break;
      default: {
        print(
          "Unable to handle warning " + warning.status + " on " + warning.user
        );
      }
    }

    this.saveWarnings();
  }

  getPurchases(): StorePurchase[] {
    let purchases: StorePurchase[] = [];

    for (let line of getShopLog()) {
      let getParsedResult = function (regex: RegExp) {
        return line.match(regex)[1];
      };

      let meat = getParsedResult(/ for (\d+) Meat/);
      let amount = getParsedResult(/ bought (\d+) \(/);
      let i = getParsedResult(/ bought \d+ \((.*)\) for \d+ Meat./);
      let name = getParsedResult(/:\d+ (.*) bought \d+ /);
      let dateString = getParsedResult(/(\d+\/\d+\/\d+ \d+:\d+:\d+) /).split(
        " "
      );

      let date1 = dateString[0].split("/");
      date1[2] = "20" + date1[2];

      let date = Date.parse(date1.join("/") + " " + dateString[1]);

      let purchase = new StorePurchase();
      purchase.amount = +amount;
      purchase.date = date;
      purchase.item = toItem(i);
      purchase.user = name;
      purchase.meat = +meat;

      purchases.push(purchase);
    }

    return purchases;
  }

  getPlayerId(name: string): number {
    let buffer: string[] = fileToBuffer("player_names.txt").split("\n");

    for (let line of buffer) {
      let spl = line.split("\t");

      if (spl[0].toLowerCase() != name.toLowerCase()) {
        continue;
      }

      return +spl[1];
    }

    let id = getPlayerId(name);

    if (!id.match(/[0-9]+/)) {
      throw "Can't find the player '" + name + "'";
    }

    buffer.push(name + "\t" + id);

    bufferToFile(buffer.join("\n").toString(), "player_names.txt");

    return +id;
  }

  getAscensions(id: number): number[] {
    let ascensions: number[] = [];

    let buffer = visitUrl("ascensionhistory.php?who=" + id);

    for (let s of buffer.split("</tr>")) {
      let match = s.match(/valign=center>(\d+\/\d+\/\d+)&nbsp;/);

      if (match == null) {
        continue;
      }

      let dateString = match[1].split("/");
      dateString[2] = "20" + dateString[2];
      let string = dateString.join("/");

      ascensions.push(Date.parse(string));
    }

    return ascensions;
  }

  /**
   * Returns [playerId, playerName, surplusTofu]
   */
  getBaddies(): TofuPurchase[] {
    let day = 24 * 60 * 60 * 1000;
    let daysAbuse = 3;
    let cutoffAscensionDate = Date.now() - day * 15;
    let cutOffStillAbusingDate = Date.now() - day * daysAbuse;
    let processedUsers: string[] = [];
    let toHandle: TofuPurchase[] = [];
    const tofuCouldveConsumed = 14 * this.maxTofuPerDay;

    let allPurchases = this.getPurchases().filter(
      (p) => p.item == Item.get("Essential Tofu")
    );

    //let purchases = allPurchases.filter((p) => p.amount == 3);

    let moreProcessing: TofuPurchase[] = [];

    for (let purchase of allPurchases) {
      if (processedUsers.includes(purchase.user)) {
        continue;
      }

      processedUsers.push(purchase.user);

      let recentCount = allPurchases
        .filter(
          (p) => p.user == purchase.user && p.date >= cutOffStillAbusingDate
        )
        .reduce((v, p) => v + p.amount, 0);

      // If they're not doing abusive limits in the last few days, they're probably good.
      if (recentCount < this.maxTofuPerDay * daysAbuse) {
        //continue;
      }

      let count = allPurchases
        .filter((p) => p.user == purchase.user)
        .reduce((v, p) => v + p.amount, 0);

      if (count < tofuCouldveConsumed) {
        continue;
      }

      let playerId = this.getPlayerId(purchase.user);

      if (this.isIgnored(playerId.toString())) {
        continue;
      }

      let player = new TofuPurchase();
      player.user = purchase.user;
      player.userId = playerId;
      player.lastPurchase = purchase.date;
      player.purchased = count;

      if (!this.isWorthWarning(player)) {
        continue;
      }

      moreProcessing.push(player);
    }

    print(moreProcessing.length + " customers need further processing..");

    let lastPrinted = Date.now();
    let timeBetween = 3000;
    let processed = 0;

    for (let player of moreProcessing) {
      processed++;

      if (lastPrinted + timeBetween < Date.now()) {
        lastPrinted = Date.now();
        print(`Processing customer ${processed}/${moreProcessing.length}`);
      }

      let playerId = player.userId;
      let ascendData = this.getAscensions(playerId);
      let lastMonthAscensions = ascendData.filter(
        (a) => a > Date.now() - day * 31
      ).length;

      if (lastMonthAscensions > 31) {
        print(
          "Now adding " +
            player.user +
            " (#" +
            playerId +
            ") to tofu whitelist. They'd ascended in the last month " +
            lastMonthAscensions +
            " times",
          "blue"
        );
        this.setIgnored(playerId.toString());
        continue;
      }

      let ascensions = ascendData.filter((a) => a > cutoffAscensionDate).length;
      player.ascensions = ascensions;

      let tofuCouldConsume =
        tofuCouldveConsumed + ascensions * this.maxTofuPerDay;

      // With the added ascensions, is it now acceptable?
      if (player.purchased < tofuCouldConsume) {
        //  continue;
      }

      let recentCount = allPurchases
        .filter(
          (p) => p.user == player.user && p.date >= cutOffStillAbusingDate
        )
        .reduce((v, p) => v + p.amount, 0);

      // If they're not doing abusive limits in the last few days, they're probably good.
      if (recentCount < this.maxTofuPerDay * (daysAbuse + ascensions)) {
        //  continue;
      }

      toHandle.push(player);
    }

    return toHandle;
  }

  isWorthWarning(purchase: TofuPurchase) {
    let warning = this.warnings.find(
      (p) => p.user.toLowerCase() == purchase.user.toLowerCase()
    );

    if (warning == null || true) {
      return true;
    }

    let day = 1000 * 60 * 60 * 24;
    let daysSince = (Date.now() - purchase.lastPurchase) / day;

    // If they haven't purchased anything in the last day or so
    if (daysSince > 2) {
      return false;
    }

    let tofuAllowed = (daysSince + 1) * this.maxTofuPerDay;

    let cutoff = Date.now() - day * this.timeBetweenWarnings;

    // If it's been too soon since the last warning
    if (warning.lastWarned > cutoff) {
      return false;
    }

    return true;
  }

  processBaddies() {
    for (let purchase of this.getBaddies()) {
      let maxUses = this.maxTofuPerDay * (purchase.ascensions + 14);
      let wentOverBy = purchase.purchased - maxUses;

      if (wentOverBy < -6) {
        continue;
      }

      print(
        `${purchase.user}. Ascensions: ${purchase.ascensions}, Brought: ${
          purchase.purchased
        }, Eaten: ${
          purchase.ascensions + 14
        }, Allowed to buy: ${maxUses}, Went over by: ${
          purchase.purchased - maxUses
        }.`,
        "blue"
      );

      if (!this.isWorthWarning(purchase)) {
        print("Not worth warning em though");
        continue;
      }

      //  this.handleWarning(purchase);
    }

    print("All purchases has been processed. Script finished.");
  }

  sendKmail(userId: number, message: string) {
    // print("Kmail " + userId + " => " + message.substring(0, 20) + "...");
    // visitUrl(
    //   "sendmessage.php?pwd=&action=send&towho=" +
    //     userId +
    //     "&message=" +
    //     urlEncode(message) +
    //     "&savecopy=on&sendmeat=0",
    //   true,
    //   true
    // );
  }

  getKmail(name: string): string {
    return `Hi ${name}, this is in regards to your Essential Tofu purchases.

            Please don't take this personally, but I can't support the amount of Essential Tofu that is being purchased. 

            People are buying more than they need, this is creating supply and demand issues.

            As such, I'm requesting that you only buy what you need. I don't want to be forced to ignore people. It doesn't really matter if you're giving it away either, they can buy their own tofu.

            If you are doing this to build up your Display Case collection or your incase the bots stop working stock. Then can I suggest you buy some of the no limits Essential Tofu?

            If you do not want to receive further kmails, feel free to baleet me.
            
            Thank you for your understanding and consideration. This is an automated message.`;
  }

  getFinalKmail(name: string): string {
    return `Hi ${name}, as per my previous kmail. I'm begging you to stop buying more Essential Tofu than you need. I don't want to baleet you. I can't keep up with demand.`;
  }
}

export function main() {
  new TofuAbusers().processBaddies();
}
