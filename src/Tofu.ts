import {
  abort,
  adv1,
  adventure,
  availableAmount,
  buy,
  cliExecute,
  craft,
  equip,
  equippedItem,
  getCustomOutfits,
  getInventory,
  getProperty,
  haveEffect,
  haveSkill,
  historicalAge,
  historicalPrice,
  isOnline,
  itemAmount,
  lastMonster,
  mallPrice,
  moodList,
  myAbsorbs,
  myAdventures,
  myClass,
  myHp,
  myMeat,
  myMp,
  myName,
  numericModifier,
  outfit,
  outfitPieces,
  print,
  propertyExists,
  putCloset,
  putShop,
  putStash,
  refreshStatus,
  repriceShop,
  retrieveItem,
  runChoice,
  runCombat,
  setProperty,
  shopAmount,
  shopLimit,
  shopPrice,
  takeStash,
  toBoolean,
  toEffect,
  toInt,
  toItem,
  toMonster,
  totalTurnsPlayed,
  turnsPlayed,
  use,
  useSkill,
  visitUrl,
  waitq,
  Item,
  Class,
  Skill,
  Effect,
  Slot,
  Location,
  Monster,
  limitMode,
  holiday,
} from "kolmafia";

class Tofu {
  private adventuresValuedAt: number = 4000;
  private doSideStuff: boolean = true;
  private freeFightValue: number = 4000;
  private sendToMallMulti: boolean = false;
  private mallMultiName: string = "ASSistant";
  private pricePerTofu: number = 5000;
  private mallLimit: number = 3;
  private dynMallLimit: number = 1000;
  private breakfastScript: string = "breakfast";
  private sellbotOverflow: number = 100_000_000; // When we have more than this amount of tofu in our store, we send the rest to sellbot
  private sellbotSendSome: number = 0;
  private skipRubberSpiders: boolean = false;
  private freeFights: Map<String, number> = new Map();
  private preferenceNag = "_nagAboutGelKick";

  addFreeFight(fightName: string) {
    this.freeFights.set(fightName, (this.freeFights.get(fightName) | 0) + 1);
  }

  getAdventuresFromRollover() {
    // How many adventures we expect to gain from rollover.
    let expected = 70;

    if (haveSkill(Skill.get("Brain Games"))) {
      expected += 3;
    }

    return expected;
  }

  startTofuing() {
    if (myClass() != Class.get("Gelatinous Noob")) {
      throw "You're not a Gelatinous Noob!";
    }

    if (!this.doQuickCheck()) {
      print("Cannot continue when you can't meet basic requirements!");
      return;
    }

    let startedCups = haveEffect(Effect.get("In Your Cups"));
    let turnsSpent = turnsPlayed();

    this.loadProperties();
    this.doInitialSetup();
    this.grabRequiredItems();
    this.voterSetup();
    this.createLightsThatGoOut();
    this.doAbsorbs();
    this.doMood();
    //    tofu.doStash();
    this.doFreeFights();
    this.generateAdventures();

    let startedTofu = itemAmount(Item.get("Essential Tofu"));

    this.doFarming();

    turnsSpent = turnsPlayed() - turnsSpent;
    let finalTofu = itemAmount(Item.get("Essential Tofu")) - startedTofu;
    this.doStock();
    this.doFinish();

    let finalCups = haveEffect(Effect.get("In Your Cups"));
    let turnsGained = finalCups - startedCups;

    if (this.isFarmingDay()) {
      turnsGained += turnsSpent;
    } else {
      turnsGained -= turnsSpent;
    }

    if (turnsGained != 0) {
      print(
        "Spent " +
          turnsSpent +
          " turns and gained an extra " +
          turnsGained +
          ' of "In Your Cups!"',
        "gray"
      );
    }

    let str = "";
    let total = 0;

    this.freeFights.forEach((v, k) => {
      if (str.length > 0) {
        str += ", ";
      }

      str += k + ": " + v;
      total += v;
    });

    print(`${total} free fights: ${str}`, "gray");

    if ((finalTofu -= turnsSpent) > 0) {
      print("Gained from free fights, " + finalTofu + " extra tofu!", "gray");
    }

    if (getProperty(this.preferenceNag) == "true") {
      print(
        "I'm not sure, but you may need to set up GELATINOUS KICK in your combat macro! Preferably after the first melee attack to minimize MP usage. The bot was likely defeated today.",
        "red"
      );
    }
  }

  loadProperties() {
    print("Now loading tofu properties..", "gray");

    let lines: [string, string][] = [];

    let load = function (propertyName: string, defaultValue: string): string {
      let prop = getProperty(propertyName);

      if (prop == null || prop == "") {
        lines.push([
          `Setting Missing: ${propertyName}. Defaulted to: ${defaultValue}`,
          "gray",
        ]);
        return defaultValue;
      }

      lines.push([`Setting Found: ${propertyName}. Value: ${prop}`, "#666666"]);
      return prop;
    };

    this.adventuresValuedAt = toInt(
      load("tofuAdventuresValue", this.adventuresValuedAt.toString())
    );
    this.doSideStuff = toBoolean(
      load("tofuSideStuff", this.doSideStuff.toString())
    );
    this.freeFightValue = toInt(
      load("tofuFreeFightValue", this.freeFightValue.toString())
    );

    this.mallLimit = toInt(load("tofuMallLimit", this.mallLimit.toString()));
    this.pricePerTofu = toInt(
      load("tofuMallPrice", this.pricePerTofu.toString())
    );
    this.mallMultiName = load("tofuMallMultiName", this.mallMultiName);
    this.sendToMallMulti = toBoolean(
      load("tofuMallMultiEnabled", this.sendToMallMulti.toString())
    );
    this.breakfastScript = load("tofuBreakfastScript", this.breakfastScript);
    this.sellbotOverflow = toInt(
      load("tofuSellbotOverflow", this.sellbotOverflow.toString())
    );
    this.skipRubberSpiders = toBoolean(
      load("tofuSkipRubberSpiders", this.skipRubberSpiders.toString())
    );
    this.sellbotSendSome = toInt(
      load("tofuSellbotSendSome", this.sellbotSendSome.toString())
    );
    this.dynMallLimit = toInt(
      load("tofuLimitPerXTofuStocked", this.dynMallLimit.toString())
    );

    lines.sort((v1, v2) => v1[0].localeCompare(v2[0]));

    lines.forEach((s) => {
      print(s[0], s[1]);
    });
  }

  doQuickCheck(): boolean {
    let passed = true;

    if (myClass() != Class.get("Gelatinous Noob")) {
      print("You are not a gel noob!", "red");
      passed = false;
    }

    let rec: Item[] = [
      "The Jokester's gun",
      "Mafia Thumb Ring",
      "Garbage Sticker",
      "Mr. Cheeng's Spectacles",
      "Xiblaxian holo-wrist-puter",
      "Carnivorous potted plant",
      "potato alarm clock",
    ]
      .map((i) => Item.get(i))
      .filter((i) => i != Item.get("None") && availableAmount(i) == 0);

    if (rec.length > 0) {
      print(
        "Missing some nice pieces of gear! " +
          rec.map((i) => i.name).join(", "),
        "red"
      );

      waitq(2);
    }

    let rolloverOutfit: Item[] = outfitPieces("Gladiatorial Glad Rags").filter(
      (i) => availableAmount(i) == 0
    );

    if (rolloverOutfit.length > 0) {
      print(
        "Missing pieces of rollover outfit! Missing: " +
          rolloverOutfit.map((i) => i.name).join(", "),
        "red"
      );
    }

    let need: Item[] = ["Eldritch hat", "eldritch pants"]
      .map((i) => Item.get(i))
      .filter((i) => availableAmount(i) == 0);

    if (need.length > 0) {
      print(
        "Missing pieces of farming outfit! Missing: " +
          need.map((i) => i.name).join(", "),
        "red"
      );

      passed = false;
    }

    if (availableAmount(Item.get("The Jokester's gun")) == 0) {
      print("You should consider getting a joksters gun", "red");
    }

    let outfits: string[] = ["rollover", "voter", "farming"].filter(
      (s) =>
        getCustomOutfits().find((o) => o.toLowerCase() == s.toLowerCase()) ==
        null
    );

    if (outfits.length > 0) {
      print("Missing outfits! Missing: " + outfits.join(", "));
      passed = false;
    }

    return passed;
  }

  doInitialSetup() {
    print("Lets get ready to fight for the right to tofu!", "blue");
    cliExecute("charpane.php");
    cliExecute("familiar unspeakachu");
    cliExecute(this.breakfastScript);
    print("Tofu script is ready to rumble!", "gray");
  }

  grabBuffItems() {
    cliExecute("mood acidparade");

    let moodStuff = moodList();

    for (let mood of moodStuff) {
      let spl = mood.split(" | ");

      if (spl.length != 3) {
        continue;
      }

      if (spl[0].toLowerCase() != "lose_effect") {
        continue;
      }

      let match = spl[spl.length - 1].match(/use [0-9]+ (.*)/);

      if (match == null) {
        continue;
      }

      let item = toItem(match[1]);

      if (item == null || item == Item.get("None")) {
        print("Can't find the mood item '" + match[1] + "'", "red");
        continue;
      }

      let effect = toEffect(spl[1]);

      if (effect == null) {
        continue;
      }

      let duration = numericModifier(item, "Effect Duration");

      if (duration <= 0) {
        continue;
      }

      let toBuy: number;

      if (myMeat() < 1_500_000) {
        toBuy = 500 / duration;
      } else {
        toBuy = Math.max(10, 500 / duration);
      }

      retrieveItem(Math.max(10, toBuy), item);
    }
  }

  grabItem(item: Item, amount: number, price: number) {
    let required = amount - availableAmount(item);
    if (required <= 0) {
      return;
    }

    buy(item, required, price);
  }

  grabRequiredItems() {
    print("Now grabbing some items..", "blue");
    let spent: number = myMeat();

    this.grabItem(Item.get("Bowl of Scorpions"), 20, this.freeFightValue * 0.8);
    this.grabItem(
      Item.get("Louder than Bomb"),
      10,
      this.adventuresValuedAt * 11
    );
    this.grabItem(
      Item.get("Divine champagne popper"),
      10,
      this.adventuresValuedAt * 11
    );
    this.grabItem(Item.get("human musk"), 10, this.adventuresValuedAt * 6);
    this.grabItem(Item.get("borrowed time"), 2, this.adventuresValuedAt * 20);
    this.grabItem(Item.get("glark cable"), 10, this.freeFightValue);
    this.grabItem(
      Item.get("Absentee Voter Ballot"),
      3,
      this.freeFightValue * 3
    );

    this.grabItem(Item.get("BRICKO Ooze"), 10, this.freeFightValue);
    this.grabItem(Item.get("Lynyrd snare"), 3, this.freeFightValue);
    this.grabBuffItems();

    if (this.doSideStuff) {
      this.grabItem(Item.get("Drum Machine"), 3, this.freeFightValue * 5);
    }

    if (haveSkill(Skill.get("Ancestral Recall"))) {
      this.grabItem(Item.get("Blue Mana"), 10, this.adventuresValuedAt);
    }

    if (!this.skipRubberSpiders) {
      this.grabItem(Item.get("Rubber Spider"), 45, this.freeFightValue);
    }

    this.grabItem(Item.get("Time's Arrow"), 3, this.adventuresValuedAt * 3);

    retrieveItem(100, Item.get("Third-Hand Lantern"));
    retrieveItem(1000, Item.get("meat paste"));
    this.buyCheapestChocolates(10);

    let famEquip = Item.get("ittah bittah hookah");

    if (
      famEquip != null &&
      equippedItem(Slot.get("Familiar")) == Item.get("None")
    ) {
      equip(famEquip);
    }

    spent = spent - myMeat();

    if (spent == 0) {
      print(
        "The shopkeeper chases us out, angry we didn't buy anything!",
        "gray"
      );
    } else if (spent <= 10000) {
      print(
        "The shop keeper is grousy, we didn't spend enough meat! (" +
          this.getNumber(spent) +
          ")",
        "gray"
      );
    } else {
      print(
        "The shop keeper feels awe at the amount of meat we've just spent! (" +
          this.getNumber(spent) +
          ")",
        "gray"
      );
    }
  }

  getNumber(n: number): string {
    return n
      .toString()
      .split(".")[0]
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  doStash() {
    //
    // EXTEND BUFFS
    //
    cliExecute("/whitelist heck");

    if (
      !toBoolean(getProperty("expressCardUsed")) &&
      takeStash(1, Item.get("Platinum Yendorian Express Card"))
    ) {
      cliExecute("/shrug lyric");
      use(1, Item.get("Platinum Yendorian Express Card"));
      putStash(1, Item.get("Platinum Yendorian Express Card"));
    }

    if (
      !toBoolean(getProperty("_bagOTricksUsed")) &&
      takeStash(1, Item.get("Bag o' Tricks"))
    ) {
      cliExecute("/shrug lyric");
      use(1, Item.get("Bag o' Tricks"));
      putStash(1, Item.get("Bag o' Tricks"));
    }

    cliExecute("/whitelist bonus");
  }

  getChocolates(): Item[] {
    return [
      "Chocolate Disco ball",
      "Chocolate pasta spoon",
      "Chocolate saucepan",
      "chocolate seal-clubbing club",
      "chocolate stolen accordion",
      "chocolate turtle totem",
    ].map((s) => Item.get(s));
  }

  buyCheapestChocolates(amount: number) {
    let chocs = this.getChocolates();

    chocs.forEach((c) => {
      amount -= availableAmount(c);
    });

    if (amount <= 0) {
      return;
    }

    let v = this.adventuresValuedAt;

    let buyChocolates = function (): boolean {
      let cheapest: Item;
      let price: number;

      for (let i of chocs) {
        let p = historicalAge(i) > 31 ? mallPrice(i) : historicalPrice(i);

        if (cheapest != null || price <= p || p > v) {
          continue;
        }

        cheapest = i;
        price = p;
      }

      if (cheapest == null) {
        return false;
      }

      amount -= buy(cheapest, amount, price);
      return true;
    };

    while (amount > 0 && buyChocolates()) {}
  }

  generateAdventures(): number {
    print("Now hyping ourselves up so we can do more adventures..", "blue");
    let advs = myAdventures();

    if (
      getProperty("_timeArrowSent") == "" &&
      availableAmount(Item.get("Time's Arrow")) > 0
    ) {
      cliExecute("send time's arrow to cookiebot || arrow");
      setProperty("_timeArrowSent", "true");
    }

    if (
      !toBoolean(getProperty("_essentialTofuUsed")) &&
      availableAmount(Item.get("Essential Tofu")) > 0
    ) {
      use(1, Item.get("Essential Tofu"));
    }

    if (!toBoolean(getProperty("_etchedHourglassUsed"))) {
      use(1, Item.get("Etched Hourglass"));
    }

    // TODO Calculate if its worth eating a 2nd chocolate
    while (toInt(getProperty("_chocolatesUsed")) < 2) {
      let c = this.getChocolates().find((i) => availableAmount(i) > 0);

      if (c != null) {
        use(1, c);
      } else {
        break;
      }
    }

    if (toInt(getProperty("_loveChocolatesUsed")) < 1) {
      if (itemAmount(Item.get("LOV Extraterrestrial Chocolate")) > 0) {
        use(1, Item.get("LOV Extraterrestrial Chocolate"));
      }
    }

    // if (!this.doExpensive) {
    //   print(
    //     "We did some stuff, then realized that we stumbled into the expensive part of the store! So we left.",
    //     "gray"
    //   );
    //   return;
    // }

    while (
      haveSkill(Skill.get("Ancestral Recall")) &&
      toInt(getProperty("_ancestralRecallCasts")) < 10
    ) {
      if (availableAmount(Item.get("Blue Mana")) > 0) {
        useSkill(1, Skill.get("Ancestral Recall"));
      } else {
        break;
      }
    }

    if (advs == myAdventures()) {
      print(
        "Mum shakes her head at me, I didn't generate any adventures..",
        "gray"
      );
    } else {
      print(
        "Feeling so adventerous, that I could explore " +
          (myAdventures() - advs) +
          " more times!",
        "gray"
      );
    }

    return myAdventures() - advs;
  }

  doRubberSpider(): boolean {
    if (
      this.skipRubberSpiders ||
      availableAmount(Item.get("Rubber Spider")) <= 0
    ) {
      return false;
    }

    let pref = "_lastSpiderUsed";
    let prefNubbin = "_rubberNubins";
    let turnsAgo = totalTurnsPlayed() - toInt(getProperty(pref));
    let nubbin = Item.get("Rubber nubbin");

    if (turnsAgo < 10 || getProperty("_skipRubberSpiders") == "true") {
      return;
    }

    if (toInt(getProperty(prefNubbin)) == availableAmount(nubbin)) {
      if (turnsAgo <= 20) {
        return false;
      } else if (turnsAgo == 21 && !this.isFarmingDay()) {
        print(
          "Last spider was " + turnsAgo + " turns ago.. Lets see if we hit one."
        );
        adv1(Location.get("The Electric Lemonade Acid Parade"));
      }
    }

    if (propertyExists(prefNubbin)) {
      this.addFreeFight("Rubber Spider");
    }

    if (!isOnline("CookieBot")) {
      setProperty("_skipRubberSpiders", "true");
      return false;
    }

    setProperty(pref, totalTurnsPlayed().toString());
    setProperty(prefNubbin, availableAmount(nubbin) + "");

    cliExecute("send rubber spider to cookiebot || spider");

    print(
      "Waiting 15 seconds to be better reassured that the rubber spider is applied soon as feasible",
      "gray"
    );
    waitq(15);
    return true;
  }

  doFreeFights() {
    if (myAdventures() <= 0) {
      return;
    }

    print(
      "I want to test out some of my kung fu moves before I head off. Lets do some free fights",
      "blue"
    );

    outfit("Farming");

    while (toInt(getProperty("_brickoFights")) < 10) {
      if (availableAmount(Item.get("BRICKO Ooze")) > 0) {
        use(1, Item.get("BRICKO Ooze"));
        this.addFreeFight("BRICKO");
      } else {
        break;
      }
    }

    while (toInt(getProperty("_lynyrdSnareUses")) < 3) {
      if (availableAmount(Item.get("Lynyrd snare")) > 0) {
        use(1, Item.get("Lynyrd snare"));
        this.addFreeFight("Lynyrd");
      } else {
        break;
      }
    }

    let myTurns = myAdventures();

    while (
      toInt(getProperty("_drunkPygmyBanishes")) < 11 &&
      myTurns <= myAdventures()
    ) {
      let bowling = Item.get("bowling ball");

      if (getInventory()[bowling.name] > 0) {
        putCloset(bowling);
        // put_shop(1750, 0, 1000, bowling);
      }

      if (
        availableAmount(Item.get("Louder than Bomb")) == 0 ||
        availableAmount(Item.get("Divine champagne popper")) == 0 ||
        itemAmount(Item.get("Bowl of Scorpions")) == 0
      ) {
        break;
      }

      adv1(Location.get("The Hidden Bowling Alley"), -1, "");
      this.addFreeFight("Drunk Pygmy");
    }

    while (toInt(getProperty("_glarkCableUses")) < 5) {
      let count = myAdventures();

      if (itemAmount(Item.get("glark cable")) > 0) {
        adv1(Location.get("The Red Zeppelin"), -1, "");
        this.addFreeFight("Red Zappelin");

        if (
          count > myAdventures() &&
          getProperty("lastCopyableMonster").includes("red")
        ) {
          abort(
            "You spent an adventure at the red zeppelin. The last copyable monster has 'red' in the name. I'm assuming your combat script is borked."
          );
          throw "Please check combat script";
        }
      } else {
        break;
      }
    }

    if (!toBoolean(getProperty("_eldritchTentacleFought"))) {
      visitUrl("place.php?whichplace=forestvillage&action=fv_scientist");
      runChoice(1);
      runCombat();
      this.addFreeFight("Eldritch Tentacle");
    }

    let fights = 0;

    this.freeFights.forEach((v, k) => {
      fights += v;
    });

    print(`${fights} free fights are all done! I feel empowered!`, "gray");
  }

  createLightsThatGoOut() {
    print("May need to make some lights that never go out!", "blue");
    let itemToMake = Item.get("A Light That Never Goes Out");
    let record = Item.get("Recording of Inigo's Incantation of Inspiration");
    let effect = Effect.get("Inigo's Incantation of Inspiration");
    let ingred = Item.get("Lump of Brituminous coal");
    let ingred2 = Item.get("third-hand lantern");

    let getCostToMake: () => number = () =>
      mallPrice(ingred) + mallPrice(ingred2) + mallPrice(record) / 4;

    while (
      availableAmount(itemToMake) < 15 &&
      mallPrice(itemToMake) < getCostToMake()
    ) {
      print("Looks like it's cheaper to buy them, than to make them..","gray");
      buy(itemToMake, 15, getCostToMake());
    }

    while (
      availableAmount(itemToMake) + availableAmount(ingred) < 20 &&
      getCostToMake() < mallPrice(itemToMake)
    ) {
      print("Looks like it's cheaper to make them, than to buy them..","gray");
      buy(ingred, 15, mallPrice(itemToMake));
    }

    retrieveItem(record, 4);

    while (availableAmount(ingred) >= 4) {
      cliExecute("shrug Polka of Plenty");

      use(record);

      while (haveEffect(effect) >= 5) {
        craft("smith", Math.floor(haveEffect(effect) / 5), ingred, ingred2);
      }
    }

    if (availableAmount(itemToMake) < 15) {
      print("Hmm, not enough. I'll call lights no go out again.", "red");
      this.createLightsThatGoOut();
    }

    print("Whee! Now my light will never go out!", "gray");
  }

  isWandererHoliday(): boolean {
    for (let wandererHoliday of  [
      "El Dia De Los Muertos Borrachos",
      "Feast of Boris",
      "Talk Like a Pirate Day",
    ]) {
      if (!holiday().toLowerCase().includes(wandererHoliday.toLowerCase())) {
        continue;
      }

      return true;
    }

    return false;
  }

  doAbsorbs() {
    print("My stomach feels peckish.. Lets do some absorbs!", "blue");

    if (this.isWandererHoliday()) {
      print("Oh, it's a wanderer holiday.. Well, we definitely are not going to farm today then.","blue");
    }

    if (
      !this.isWandererHoliday() &&
      haveEffect(Effect.get("In Your Cups")) > 450
    ) {
      while (myAbsorbs() < 15) {
        cliExecute("absorb light that never goes out");
      }
    } else {
      while (myAbsorbs() < 15) {
        cliExecute("absorb meat paste");
      }
    }

    print("Burp! Absorbs complete!", "gray");
  }

  isFarmingDay() {
    return numericModifier("Smithsness") >= 50;
  }

  doJokestersGun() {
    if (
      getProperty("_firedJokestersGun") == "true" ||
      availableAmount(Item.get("The Jokester's gun")) == 0
    ) {
      return;
    }

    print(
      '"Is that bulge in your pocket for me?" she asks. But you whip out a gun and say "Not today!"',
      "blue"
    );

    equip(Item.get("The Jokester's gun"));

    if (this.doSideStuff) {
      use(Item.get("Drum Machine"));
      print(
        "Oh god! Your girlfriend transformed into a giant worm! That was horrifying a fight!",
        "gray"
      );
    } else if (haveEffect(Effect.get("In Your Cups")) >= 10) {
      adventure(1, Location.get("The Electric Lemonade Acid Parade"));
      print(
        "You blow the smoke off the barrel of your gun, and sneer. Another essential tofu hits the ground.",
        "gray"
      );
    } else {
      print(
        "Couldn't use the jokesters gun for a free fight as not enough in your cups",
        "red"
      );
    }

    outfit("Farming");
    this.addFreeFight("Jokesters Gun");
  }

  doMood() {
    print("Time to be moody!", "blue");
    let mood = "apathetic";

    if (this.isFarmingDay()) {
      mood = "acidparade";
    }

    cliExecute("mood " + mood);

    cliExecute("mood execute");
    print("Today I feel " + mood + "!", "gray");
  }

  doFarming() {
    refreshStatus();
    visitUrl("charpane.php");
    let advs = myAdventures();

    //
    // FARM OR CHARGE AS APPROPRIATE
    //

    if (this.isFarmingDay()) {
      print(
        `You sigh as you put on your big boy boots. It's time to milk the tofu again.. In the paddocks, ${myAdventures()} tofu cows tremble in fear!`,
        "blue"
      );

      if (
        !toBoolean(getProperty("_borrowedTimeUsed")) &&
        availableAmount(Item.get("Borrowed Time")) > 0
      ) {
        use(1, Item.get("Borrowed Time"));
      }

      //if (toInt(getProperty("_VYKEACompanionLevel")) == 0) {
      //	retrieveItem(10, Item.get("VYKEA Rail"));
      //	retrieveItem(1, Item.get("VYKEA Instructions"));
      //	retrieveItem(1, Item.get("VYKEA Dowel"));
      //	use(1, Item.get("VYKEA Instructions"));
      //}

      while (
        myAdventures() > 0 &&
        haveEffect(Effect.get("In Your Cups")) >= 10
      ) {
        this.doJokestersGun();
        outfit("Farming");

        if (this.doRubberSpider()) {
          continue;
        }

        if (
          haveEffect(Effect.get("Fat Leon's Phat Loot Lyric")) < 100 &&
          isOnline("Flesh Puppet")
        ) {
          //cliExecute("/w buffy lyric");
          cliExecute("/w flesh_puppet buffme");
          print("Waiting for flesh puppet to give me some buffs..", "green");
          waitq(15);
        }

        if (this.doVoterFight()) {
          continue;
        }

        adventure(1, Location.get("The Electric Lemonade Acid Parade"));
      }
    } else {
      this.doJokestersGun();
      outfit("Farming");

      const adventuresToKeep = 200 - this.getAdventuresFromRollover();

      print(
        `Charging day! Of ${myAdventures()}, we're spending ${Math.max(
          0,
          myAdventures() - adventuresToKeep
        )} adventures today! That's weak!`,
        "blue"
      );

      while (myAdventures() > adventuresToKeep) {
        if (this.doRubberSpider()) {
          continue;
        }

        if (this.doVoterFight()) {
          continue;
        }

        setProperty("lastEncounter", "In Your Cups"); // Probs a bad move?

        visitUrl("inv_use.php?pwd&whichitem=4613&teacups=1");
      }
    }

    if (myAdventures() == advs) {
      print(
        "Phew, that wasn't exhausting. Sat on the couch all day! Dad's really proud of me!",
        "gray"
      );
    } else {
      print(
        "Phew, that was exhausting! Mum's going to be real proud of me!",
        "gray"
      );
    }
  }

  doVoterFight(): boolean {
    let voterFreeFight = toInt(getProperty("_voteFreeFights")) >= 3;
    if (
      availableAmount(Item.get('"I voted" Sticker')) == 0 ||
      (voterFreeFight &&
        (!this.doSideStuff ||
          !this.isFarmingDay() ||
          getProperty("_voteMonster") != "government bureaucrat"))
    ) {
      return false;
    }

    let vote_fight_now =
      totalTurnsPlayed() % 11 == 1 &&
      toInt(getProperty("lastVoteMonsterTurn")) < totalTurnsPlayed();

    if (!vote_fight_now) {
      return false;
    } else if (voterFreeFight) {
      this.addFreeFight("Vote Monster");
    }

    print(
      "Someone is trying to take away my gun rights! I voted for those! Not today!",
      "gray"
    );

    outfit("Voter");
    let hp = myHp();

    adv1(Location.get("The Electric Lemonade Acid Parade"), 1, "");

    if (myHp() < 5 || hp - myHp() > 200) {
      setProperty(this.preferenceNag, "true");
    }

    outfit("farming");

    return true;
  }

  doFinish() {
    print("Gotta put on my PJs, mum is coming to tuck me in!", "blue");
    //
    // NIGHT NIGHT
    //

    outfit("Rollover");
    print(
      "Good night mum! Good night dad! Good night " + myName() + "!",
      "gray"
    );

    let licksReady = toInt(getProperty("shockingLickCharges"));

    if (licksReady > 0) {
      print(
        `Psst! My lips are numb! ${licksReady} shocking licks stored!`,
        "gray"
      );
    }
  }

  doShockingLicks() {
    let licks = toInt(getProperty("shockingLickCharges"));

    print("We have " + licks + " ready!", "blue");

    if (!this.isFarmingDay()) {
      print("Oi! We're not fighting this worm without some +item!");
      return;
    }

    let drum = Item.get("Drum Machine");
    retrieveItem(drum, licks);
    let adv = myAdventures();

    while (
      toInt(getProperty("shockingLickCharges")) > 0 &&
      availableAmount(drum) > 0 &&
      myAdventures() >= adv
    ) {
      use(drum);
    }

    print("Fought some worms!");
  }

  voterSetup(): void {
    print("Oh god, I forgot I need to vote in the elections today", "blue");

    if (availableAmount(Item.get('"I Voted!" sticker')) > 0) {
      print("Already voted for Trump.. Whew!", "gray");
      return;
    }

    const voterValueTable = [
      {
        monster: Monster.get("terrible mutant"),
        value: mallPrice(Item.get("glob of undifferentiated tissue")) + 10,
      },
      {
        monster: Monster.get("angry ghost"),
        value: mallPrice(Item.get("ghostly ectoplasm")) * 1.11,
      },
      {
        monster: Monster.get("government bureaucrat"),
        value:
          mallPrice(Item.get("absentee voter ballot")) * 0.05 + 75 * 0.25 + 50,
      },
      {
        monster: Monster.get("annoyed snake"),
        value: 25 * 0.5 + 25,
      },
      {
        monster: Monster.get("slime blob"),
        value: 20 * 0.4 + 50 * 0.2 + 250 * 0.01,
      },
    ];

    try {
      visitUrl("inv_use.php?pwd&which=3&whichitem=9991");
      //use(Item.get("Absentee Voter Ballot"));
    } catch (e) {}

    try {
      visitUrl("place.php?whichplace=town_right&action=townright_vote");
    } catch (e) {}

    const votingMonsterPriority = voterValueTable
      .sort((a, b) => b.value - a.value)
      .map((element) => element.monster.name);

    const initPriority = new Map<string, number>([
      ["Adventures: +1", 6],
      ["+30% Meat from Monsters", 5],
      ["+3 Stats Per Fight", 4],
      ["+4 Moxie Stats Per Fight", 3],
      ["+4 Muscle Stats Per Fight", 2],
      [`+4 Mysticality Stats Per Fight`, 1],
    ]);

    const monsterVote =
      votingMonsterPriority.indexOf(getProperty("_voteMonster1")) <
      votingMonsterPriority.indexOf(getProperty("_voteMonster2"))
        ? 1
        : 2;

    const voteLocalPriorityArr = [
      [
        0,
        initPriority.get(getProperty("_voteLocal1")) ||
          (getProperty("_voteLocal1").indexOf("-") === -1 ? 1 : -1),
      ],
      [
        1,
        initPriority.get(getProperty("_voteLocal2")) ||
          (getProperty("_voteLocal2").indexOf("-") === -1 ? 1 : -1),
      ],
      [
        2,
        initPriority.get(getProperty("_voteLocal3")) ||
          (getProperty("_voteLocal3").indexOf("-") === -1 ? 1 : -1),
      ],
      [
        3,
        initPriority.get(getProperty("_voteLocal4")) ||
          (getProperty("_voteLocal4").indexOf("-") === -1 ? 1 : -1),
      ],
    ];

    const bestVotes = voteLocalPriorityArr.sort((a, b) => b[1] - a[1]);
    const firstInit = bestVotes[0][0];
    const secondInit = bestVotes[1][0];

    print(
      "We're voting for " +
        getProperty("_voteLocal" + (firstInit + 1)) +
        " (" +
        firstInit +
        ")" +
        " and " +
        getProperty("_voteLocal" + (secondInit + 1)) +
        " (" +
        secondInit +
        ")",
      "gray"
    );

    visitUrl(
      `choice.php?option=1&whichchoice=1331&g=${monsterVote}&local[]=${firstInit}&local[]=${firstInit}`
    );
    waitq(1);
  }

  doStock() {
    print("I need to dump this essential tofu somewhere...", "blue");
    let tofu = Item.get("Essential Tofu");
    let to_sell = itemAmount(tofu) - 10;

    if (to_sell <= 0) {
      print("Oh! I don't have any tofu to sell.. Nevermind then!", "gray");

      if (shopAmount(tofu) > 0 && shopPrice(tofu) != this.getShopPrice()) {
        repriceShop(this.getShopPrice(), shopLimit(tofu), tofu);
        print(
          "Readjusted price of tofu in shop to " +
            this.getShopPrice() +
            " to discourage buyers",
          "gray"
        );
      }

      return;
    }

    if (this.sellbotSendSome > 0) {
      let toSend = Math.min(to_sell, this.sellbotSendSome);

      print(
        `We want to send ${toSend} tofu to sellbot! We're handling the rest at low prices!`,
        "purple"
      );

      cliExecute(`csend ${toSend} essential tofu to sellbot`);

      to_sell -= toSend;
    }

    let ourLimit = Math.max(1, Math.min(this.mallLimit, Math.floor(to_sell / this.dynMallLimit)));

    if (to_sell > 0) {
      if (this.sendToMallMulti) {
        print(
          "Stocking " + this.mallMultiName + "! " + to_sell + " tofu to stock!",
          "purple"
        );
        cliExecute(
          `csend ${to_sell} essential tofu to ${this.mallMultiName} || ${ourLimit}@${this.pricePerTofu}`
        );
      } else if (
        this.sellbotOverflow < 100_000_000 &&
        shopAmount(tofu) > this.sellbotOverflow
      ) {
        print(
          `We have ${this.getNumber(
            shopAmount(tofu)
          )} tofu in mall, our overflow is ${this.getNumber(
            this.sellbotOverflow
          )} so lets send ${this.getNumber(to_sell)} excess tofu to sellbot!`,
          "purple"
        );

        cliExecute(`csend ${to_sell} essential tofu to sellbot`);
      } else {
        putShop(this.getShopPrice(), ourLimit, to_sell, tofu);
      }
    }

    if (shopLimit(tofu) != ourLimit) {
      print(
        "Huh, the shop limit should be " +
           ourLimit +
          " but is " +
          shopLimit(tofu) +
          "... Lets fix that!",
        "purple"
      );
      putShop(this.getShopPrice(), ourLimit, 0, tofu);
    }

    print("Got rid of that tofu!", "gray");
  }

  getShopPrice(): number {
    let tofu = Item.get("Essential Tofu");
    let amountIHave = shopAmount(tofu) + itemAmount(tofu);

    if (amountIHave < 800) {
      return this.pricePerTofu + 1;
    }

    return this.pricePerTofu;
  }
}

export function main() {
  new Tofu().startTofuing();
}
