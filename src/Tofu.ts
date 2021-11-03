import {
  adv1,
  adventure,
  availableAmount,
  buy,
  cliExecute,
  craft,
  equip,
  getInventory,
  getProperty,
  haveEffect,
  haveSkill,
  historicalAge,
  historicalPrice,
  isOnline,
  itemAmount,
  mallPrice,
  myAbsorbs,
  myAdventures,
  myClass,
  myMeat,
  myName,
  myPrimestat,
  numericModifier,
  outfit,
  print,
  putCloset,
  putShop,
  putStash,
  refreshStatus,
  retrieveItem,
  runChoice,
  runCombat,
  setProperty,
  takeStash,
  toBoolean,
  toInt,
  totalTurnsPlayed,
  use,
  useSkill,
  visitUrl,
  waitq,
} from "kolmafia";

export class Tofu {
  private adventuresValuedAt: number = 4000;
  private doSideStuff: boolean = true;
  private freeFightValue: number = 4000;

  doInitialSetup() {
    print("Lets get ready to fight for the right to tofu!", "blue");
    cliExecute("charpane.php");
    cliExecute("familiar unspeakachu");
    cliExecute(this.isTofunation() ? "breakfaster" : "breakfast");
    print("Tofu script is ready to rumble!", "gray");
  }

  isTofunation(): boolean {
    return myName().toLowerCase() == "tofunation";
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
    retrieveItem(500 / 10, Item.get("lavender candy heart"));
    retrieveItem(500 / 20, Item.get("resolution: be happier"));
    retrieveItem(500 / 30, Item.get("Battery (lantern)"));
    this.grabItem(Item.get("glark cable"), 10, this.freeFightValue);
    this.grabItem(
      Item.get("Absentee Voter Ballot"),
      3,
      this.freeFightValue * 3
    );
    this.grabItem(Item.get("BRICKO Ooze"), 10, this.freeFightValue);
    this.grabItem(Item.get("Lynyrd snare"), 3, this.freeFightValue);

    if (this.doSideStuff) {
      this.grabItem(Item.get("Drum Machine"), 3, this.freeFightValue * 5);
    }

    if (haveSkill(Skill.get("Ancestral Recall"))) {
      this.grabItem(Item.get("Blue Mana"), 10, this.adventuresValuedAt);
    }

    retrieveItem(100, Item.get("Third-Hand Lantern"));
    retrieveItem(20, Item.get("recording of The Ballad of Richie Thingfinder"));

    retrieveItem(1000, Item.get("meat paste"));
    this.buyCheapestChocolates(10);

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

  generateAdventures() {
    print("Now hyping ourselves up so we can do more adventures..", "blue");
    let advs = myAdventures();

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

    if (
      getProperty("_timeArrowSent") == "" &&
      availableAmount(Item.get("Time's Arrow")) > 0
    ) {
      cliExecute("send time's arrow to botticelli");
      setProperty("_timeArrowSent", "true");
    }

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
  }

  doFreeFights() {
    print(
      "I want to test out some of my kung fu moves before I head off. Lets do some free fights",
      "blue"
    );

    while (toInt(getProperty("_brickoFights")) < 10) {
      if (availableAmount(Item.get("BRICKO Ooze")) > 0) {
        use(1, Item.get("BRICKO Ooze"));
      } else {
        break;
      }
    }

    while (toInt(getProperty("_lynyrdSnareUses")) < 3) {
      if (availableAmount(Item.get("Lynyrd snare")) > 0) {
        use(1, Item.get("Lynyrd snare"));
      } else {
        break;
      }
    }

    while (toInt(getProperty("_drunkPygmyBanishes")) < 11) {
      let bowling = Item.get("bowling ball");

      if (getInventory()[bowling.name] > 0) {
        putCloset(bowling);
        // put_shop(1750, 0, 1000, bowling);
      }

      if (
        availableAmount(Item.get("Louder than Bomb")) == 0 ||
        availableAmount(Item.get("Divine champagne popper")) == 0 ||
        availableAmount(Item.get("Bowl of Scorpions")) == 0
      ) {
        break;
      }

      adv1(Location.get("The Hidden Bowling Alley"), -1, "");
    }

    while (toInt(getProperty("_glarkCableUses")) < 5) {
      if (availableAmount(Item.get("glark cable")) > 0) {
        adv1(Location.get("The Red Zeppelin"), -1, "");
      } else {
        break;
      }
    }

    if (!toBoolean(getProperty("_eldritchTentacleFought"))) {
      visitUrl("place.php?whichplace=forestvillage&action=fv_scientist");
      runChoice(1);
      runCombat();
    }

    print("Free fights are all done! I feel empowered!", "gray");
  }

  createLightsThatGoOut() {
    print("May need to make some lights that never go out!", "blue");
    let itemToMake = Item.get("A Light That Never Goes Out");
    let record = Item.get("Recording of Inigo's Incantation of Inspiration");
    let effect = Effect.get("Inigo's Incantation of Inspiration");
    let ingred = Item.get("Lump of Brituminous coal");
    let ingred2 = Item.get("third-hand lantern");

    while (
      availableAmount(itemToMake) < 15 &&
      mallPrice(itemToMake) < mallPrice(ingred) + 100 + mallPrice(record) / 4
    ) {
      buy(itemToMake, 15, mallPrice(ingred) + 100 + mallPrice(record) / 4);
    }

    while (
      availableAmount(itemToMake) + availableAmount(ingred) < 20 &&
      mallPrice(ingred) + mallPrice(record) / 4 < mallPrice(itemToMake)
    ) {
      buy(ingred, 15, mallPrice(itemToMake));
    }

    retrieveItem(record, 4);

    while (availableAmount(ingred) >= 4) {
      cliExecute("shrug Polka of Plenty");

      use(record);

      while (haveEffect(effect) >= 5) {
        craft("smith", 1, ingred, ingred2);
      }
    }

    if (availableAmount(itemToMake) < 15) {
      print("Hmm, not enough. I'll call lights no go out again.", "red");
      this.createLightsThatGoOut();
    }

    print("Whee! Now my light will never go out!", "gray");
  }

  doAbsorbs() {
    print("My stomach feels peckish.. Lets do some absorbs!", "blue");

    if (haveEffect(Effect.get("In Your Cups")) > 450) {
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
    return numericModifier("Smithsness") > 70;
  }

  doJokestersGun() {
    if (getProperty("_firedJokestersGun") == "true") {
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

      const adventuresToKeep = 130;

      print(
        `Charging day! Of ${myAdventures()}, we're spending ${Math.max(
          0,
          myAdventures() - adventuresToKeep
        )} adventures today! That's weak!`,
        "blue"
      );

      while (myAdventures() > adventuresToKeep) {
        if (this.doVoterFight()) {
          continue;
        }

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
    if (
      availableAmount(Item.get('"I voted" Sticker')) == 0 ||
      (toInt(getProperty("_voteFreeFights")) >= 3 &&
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
    }

    print(
      "Someone is trying to take away my gun rights! I voted for those! Not today!",
      "gray"
    );

    outfit("Voter");

    adv1(Location.get("The Electric Lemonade Acid Parade"), 1, "");

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

  doStock() {
    print("I need to dump this essential tofu somewhere...", "blue");
    let tofu = Item.get("Essential Tofu");
    let to_sell = itemAmount(tofu) - 10;
    let stockAss = false;

    if (to_sell <= 0) {
      print("Oh! I don't have any tofu to sell.. Nevermind then!", "gray");
      return;
    }

    if (stockAss) {
      print("Stocking ASSistant! " + to_sell + " tofu to stock!", "purple");
      cliExecute("csend " + to_sell + " essential tofu to ASSistant || 5@5000");
    } else {
      print("Stocking my own shop! " + to_sell + " tofu to stock!", "purple");
      putShop(5000, 3, to_sell, tofu);
    }

    print("Got rid of that tofu!", "gray");
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
}

export function main() {
  if (myClass() != Class.get("Gelatinous Noob")) {
    throw "You're not a Gelatinous Noob!";
  }

  let tofu = new Tofu();

  tofu.doInitialSetup();
  tofu.grabRequiredItems();
  tofu.voterSetup();
  tofu.createLightsThatGoOut();
  tofu.doAbsorbs();
  tofu.doMood();
  //    tofu.doStash();
  tofu.doFreeFights();
  tofu.generateAdventures();
  tofu.doFarming();
  tofu.doStock();
  tofu.doFinish();
}
