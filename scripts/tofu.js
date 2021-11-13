/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "main": () => (/* binding */ main)
});

;// CONCATENATED MODULE: external "kolmafia"
const external_kolmafia_namespaceObject = require("kolmafia");
;// CONCATENATED MODULE: ./src/Tofu.ts
function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var

Tofu = /*#__PURE__*/function () {function Tofu() {_classCallCheck(this, Tofu);_defineProperty(this, "adventuresValuedAt",
    4000);_defineProperty(this, "doSideStuff",
    true);_defineProperty(this, "freeFightValue",
    4000);_defineProperty(this, "sendToMallMulti",
    false);_defineProperty(this, "mallMultiName",
    "ASSistant");_defineProperty(this, "pricePerTofu",
    5000);_defineProperty(this, "mallLimit",
    3);_defineProperty(this, "breakfastScript",
    "breakfast");_defineProperty(this, "rolloverAdventures",
    70);_defineProperty(this, "sellbotOverflow",
    100000000);}_createClass(Tofu, [{ key: "startTofuing", value: // When we have more than this amount of tofu in our store, we send the rest to sellbot

    function startTofuing() {
      if ((0,external_kolmafia_namespaceObject.myClass)() != Class.get("Gelatinous Noob")) {
        throw "You're not a Gelatinous Noob!";
      }

      var tofu = new Tofu();

      if (!tofu.doQuickCheck()) {
        (0,external_kolmafia_namespaceObject.print)("Cannot continue when you can't meet basic requirements!");
        return;
      }

      tofu.loadProperties();
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
    } }, { key: "loadProperties", value:

    function loadProperties() {
      (0,external_kolmafia_namespaceObject.print)("Now loading tofu properties..", "gray");
      var load = function load(propertyName, defaultValue) {
        var prop = (0,external_kolmafia_namespaceObject.getProperty)(propertyName);

        if (prop == null || prop == "") {
          (0,external_kolmafia_namespaceObject.print)("Tofu Setting ".concat(
          propertyName, " hasn't been set. Defaulting to ").concat(defaultValue));

          return defaultValue;
        }

        return prop;
      };

      this.adventuresValuedAt = (0,external_kolmafia_namespaceObject.toInt)(
      load("tofuAdventuresValue", this.adventuresValuedAt.toString()));

      this.doSideStuff = (0,external_kolmafia_namespaceObject.toBoolean)(
      load("tofuSideStuff", this.doSideStuff.toString()));

      this.freeFightValue = (0,external_kolmafia_namespaceObject.toInt)(
      load("tofuFreeFightValue", this.freeFightValue.toString()));


      this.mallLimit = (0,external_kolmafia_namespaceObject.toInt)(load("tofuMallLimit", this.mallLimit.toString()));
      this.pricePerTofu = (0,external_kolmafia_namespaceObject.toInt)(
      load("tofuMallPrice", this.pricePerTofu.toString()));

      this.mallMultiName = load("tofuMallMultiName", this.mallMultiName);
      this.sendToMallMulti = (0,external_kolmafia_namespaceObject.toBoolean)(
      load("tofuMallMultiEnabled", this.sendToMallMulti.toString()));

      this.breakfastScript = load("tofuBreakfastScript", this.breakfastScript);
      this.sellbotOverflow = (0,external_kolmafia_namespaceObject.toInt)(
      load("tofuSellbotOverflow", this.sellbotOverflow.toString()));

    } }, { key: "doQuickCheck", value:

    function doQuickCheck() {
      var passed = true;

      if ((0,external_kolmafia_namespaceObject.myClass)() != Class.get("Gelatinous Noob")) {
        (0,external_kolmafia_namespaceObject.print)("You are not a gel noob!", "red");
        passed = false;
      }

      var rec = [
      "The Jokester's gun",
      "Mafia Thumb Ring",
      "Garbage Sticker",
      "Mr. Cheeng's Spectacles",
      "Xiblaxian holo-wrist-puter"].

      map((i) => Item.get(i)).
      filter((i) => (0,external_kolmafia_namespaceObject.availableAmount)(i) == 0);

      if (rec.length > 0) {
        (0,external_kolmafia_namespaceObject.print)(
        "Missing some nice pieces of gear! " +
        rec.map((i) => i.name).join(", "),
        "red");

      }

      var rolloverOutfit = (0,external_kolmafia_namespaceObject.outfitPieces)("Gladiatorial Glad Rags").filter(
      (i) => (0,external_kolmafia_namespaceObject.availableAmount)(i) == 0);


      if (rolloverOutfit.length > 0) {
        (0,external_kolmafia_namespaceObject.print)(
        "Missing pieces of rollover outfit! Missing: " +
        rolloverOutfit.map((i) => i.name).join(", "),
        "red");

      }

      var need = ["Eldritch hat", "eldritch pants"].
      map((i) => Item.get(i)).
      filter((i) => (0,external_kolmafia_namespaceObject.availableAmount)(i) == 0);

      if (need.length > 0) {
        (0,external_kolmafia_namespaceObject.print)(
        "Missing pieces of farming outfit! Missing: " +
        need.map((i) => i.name).join(", "),
        "red");


        passed = false;
      }

      if ((0,external_kolmafia_namespaceObject.availableAmount)(Item.get("The Jokester's gun")) == 0) {
        (0,external_kolmafia_namespaceObject.print)("You should consider getting a joksters gun", "red");
      }

      var outfits = ["rollover", "voter", "farming"].filter(
      (s) =>
      (0,external_kolmafia_namespaceObject.getCustomOutfits)().find((o) => o.toLowerCase() == s.toLowerCase()) ==
      null);


      if (outfits.length > 0) {
        (0,external_kolmafia_namespaceObject.print)("Missing outfits! Missing: " + outfits.join(", "));
        passed = false;
      }

      return passed;
    } }, { key: "doInitialSetup", value:

    function doInitialSetup() {
      (0,external_kolmafia_namespaceObject.print)("Lets get ready to fight for the right to tofu!", "blue");
      (0,external_kolmafia_namespaceObject.cliExecute)("charpane.php");
      (0,external_kolmafia_namespaceObject.cliExecute)("familiar unspeakachu");
      (0,external_kolmafia_namespaceObject.cliExecute)(this.breakfastScript);
      (0,external_kolmafia_namespaceObject.print)("Tofu script is ready to rumble!", "gray");
    } }, { key: "grabBuffItems", value:

    function grabBuffItems() {
      (0,external_kolmafia_namespaceObject.cliExecute)("mood acidparade");

      var moodStuff = (0,external_kolmafia_namespaceObject.moodList)();var _iterator = _createForOfIteratorHelper(

      moodStuff),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var mood = _step.value;
          var spl = mood.split(" | ");

          if (spl.length != 3) {
            continue;
          }

          if (spl[0].toLowerCase() != "lose_effect") {
            continue;
          }

          var match = spl[spl.length - 1].match(/use [0-9]+ (.*)/);

          if (match == null) {
            continue;
          }

          var item = (0,external_kolmafia_namespaceObject.toItem)(match[1]);

          if (item == null || item == Item.get("None")) {
            (0,external_kolmafia_namespaceObject.print)("Can't find the mood item '" + match[1] + "'", "red");
            continue;
          }

          var effect = (0,external_kolmafia_namespaceObject.toEffect)(spl[1]);

          if (effect == null) {
            continue;
          }

          var duration = (0,external_kolmafia_namespaceObject.numericModifier)(item, "Effect Duration");

          if (duration <= 0) {
            continue;
          }

          var toBuy = void 0;

          if ((0,external_kolmafia_namespaceObject.myMeat)() < 1500000) {
            toBuy = 500 / duration;
          } else {
            toBuy = Math.max(10, 500 / duration);
          }

          (0,external_kolmafia_namespaceObject.retrieveItem)(Math.max(10, toBuy), item);
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
    } }, { key: "grabItem", value:

    function grabItem(item, amount, price) {
      var required = amount - (0,external_kolmafia_namespaceObject.availableAmount)(item);
      if (required <= 0) {
        return;
      }

      (0,external_kolmafia_namespaceObject.buy)(item, required, price);
    } }, { key: "grabRequiredItems", value:

    function grabRequiredItems() {
      (0,external_kolmafia_namespaceObject.print)("Now grabbing some items..", "blue");
      var spent = (0,external_kolmafia_namespaceObject.myMeat)();

      this.grabItem(Item.get("Bowl of Scorpions"), 20, this.freeFightValue * 0.8);
      this.grabItem(
      Item.get("Louder than Bomb"),
      10,
      this.adventuresValuedAt * 11);

      this.grabItem(
      Item.get("Divine champagne popper"),
      10,
      this.adventuresValuedAt * 11);

      this.grabItem(Item.get("human musk"), 10, this.adventuresValuedAt * 6);
      this.grabItem(Item.get("borrowed time"), 2, this.adventuresValuedAt * 20);
      this.grabItem(Item.get("glark cable"), 10, this.freeFightValue);
      this.grabItem(
      Item.get("Absentee Voter Ballot"),
      3,
      this.freeFightValue * 3);


      this.grabItem(Item.get("BRICKO Ooze"), 10, this.freeFightValue);
      this.grabItem(Item.get("Lynyrd snare"), 3, this.freeFightValue);
      this.grabBuffItems();

      if (this.doSideStuff) {
        this.grabItem(Item.get("Drum Machine"), 3, this.freeFightValue * 5);
      }

      if ((0,external_kolmafia_namespaceObject.haveSkill)(Skill.get("Ancestral Recall"))) {
        this.grabItem(Item.get("Blue Mana"), 10, this.adventuresValuedAt);
      }

      (0,external_kolmafia_namespaceObject.retrieveItem)(100, Item.get("Third-Hand Lantern"));
      (0,external_kolmafia_namespaceObject.retrieveItem)(1000, Item.get("meat paste"));
      this.buyCheapestChocolates(10);

      spent = spent - (0,external_kolmafia_namespaceObject.myMeat)();

      if (spent == 0) {
        (0,external_kolmafia_namespaceObject.print)(
        "The shopkeeper chases us out, angry we didn't buy anything!",
        "gray");

      } else if (spent <= 10000) {
        (0,external_kolmafia_namespaceObject.print)(
        "The shop keeper is grousy, we didn't spend enough meat! (" +
        this.getNumber(spent) +
        ")",
        "gray");

      } else {
        (0,external_kolmafia_namespaceObject.print)(
        "The shop keeper feels awe at the amount of meat we've just spent! (" +
        this.getNumber(spent) +
        ")",
        "gray");

      }
    } }, { key: "getNumber", value:

    function getNumber(n) {
      return n.
      toString().
      split(".")[0].
      replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } }, { key: "doStash", value:

    function doStash() {
      //
      // EXTEND BUFFS
      //
      (0,external_kolmafia_namespaceObject.cliExecute)("/whitelist heck");

      if (
      !(0,external_kolmafia_namespaceObject.toBoolean)((0,external_kolmafia_namespaceObject.getProperty)("expressCardUsed")) &&
      (0,external_kolmafia_namespaceObject.takeStash)(1, Item.get("Platinum Yendorian Express Card")))
      {
        (0,external_kolmafia_namespaceObject.cliExecute)("/shrug lyric");
        (0,external_kolmafia_namespaceObject.use)(1, Item.get("Platinum Yendorian Express Card"));
        (0,external_kolmafia_namespaceObject.putStash)(1, Item.get("Platinum Yendorian Express Card"));
      }

      if (
      !(0,external_kolmafia_namespaceObject.toBoolean)((0,external_kolmafia_namespaceObject.getProperty)("_bagOTricksUsed")) &&
      (0,external_kolmafia_namespaceObject.takeStash)(1, Item.get("Bag o' Tricks")))
      {
        (0,external_kolmafia_namespaceObject.cliExecute)("/shrug lyric");
        (0,external_kolmafia_namespaceObject.use)(1, Item.get("Bag o' Tricks"));
        (0,external_kolmafia_namespaceObject.putStash)(1, Item.get("Bag o' Tricks"));
      }

      (0,external_kolmafia_namespaceObject.cliExecute)("/whitelist bonus");
    } }, { key: "getChocolates", value:

    function getChocolates() {
      return [
      "Chocolate Disco ball",
      "Chocolate pasta spoon",
      "Chocolate saucepan",
      "chocolate seal-clubbing club",
      "chocolate stolen accordion",
      "chocolate turtle totem"].
      map((s) => Item.get(s));
    } }, { key: "buyCheapestChocolates", value:

    function buyCheapestChocolates(amount) {
      var chocs = this.getChocolates();

      chocs.forEach((c) => {
        amount -= (0,external_kolmafia_namespaceObject.availableAmount)(c);
      });

      if (amount <= 0) {
        return;
      }

      var v = this.adventuresValuedAt;

      var buyChocolates = function buyChocolates() {
        var cheapest;
        var price;var _iterator2 = _createForOfIteratorHelper(

        chocs),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var i = _step2.value;
            var p = (0,external_kolmafia_namespaceObject.historicalAge)(i) > 31 ? (0,external_kolmafia_namespaceObject.mallPrice)(i) : (0,external_kolmafia_namespaceObject.historicalPrice)(i);

            if (cheapest != null || price <= p || p > v) {
              continue;
            }

            cheapest = i;
            price = p;
          }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

        if (cheapest == null) {
          return false;
        }

        amount -= (0,external_kolmafia_namespaceObject.buy)(cheapest, amount, price);
        return true;
      };

      while (amount > 0 && buyChocolates()) {}
    } }, { key: "generateAdventures", value:

    function generateAdventures() {
      (0,external_kolmafia_namespaceObject.print)("Now hyping ourselves up so we can do more adventures..", "blue");
      var advs = (0,external_kolmafia_namespaceObject.myAdventures)();

      if (
      !(0,external_kolmafia_namespaceObject.toBoolean)((0,external_kolmafia_namespaceObject.getProperty)("_essentialTofuUsed")) &&
      (0,external_kolmafia_namespaceObject.availableAmount)(Item.get("Essential Tofu")) > 0)
      {
        (0,external_kolmafia_namespaceObject.use)(1, Item.get("Essential Tofu"));
      }

      if (!(0,external_kolmafia_namespaceObject.toBoolean)((0,external_kolmafia_namespaceObject.getProperty)("_etchedHourglassUsed"))) {
        (0,external_kolmafia_namespaceObject.use)(1, Item.get("Etched Hourglass"));
      }

      // TODO Calculate if its worth eating a 2nd chocolate
      while ((0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("_chocolatesUsed")) < 2) {
        var c = this.getChocolates().find((i) => (0,external_kolmafia_namespaceObject.availableAmount)(i) > 0);

        if (c != null) {
          (0,external_kolmafia_namespaceObject.use)(1, c);
        } else {
          break;
        }
      }

      if ((0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("_loveChocolatesUsed")) < 1) {
        if ((0,external_kolmafia_namespaceObject.itemAmount)(Item.get("LOV Extraterrestrial Chocolate")) > 0) {
          (0,external_kolmafia_namespaceObject.use)(1, Item.get("LOV Extraterrestrial Chocolate"));
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
      (0,external_kolmafia_namespaceObject.getProperty)("_timeArrowSent") == "" &&
      (0,external_kolmafia_namespaceObject.availableAmount)(Item.get("Time's Arrow")) > 0)
      {
        (0,external_kolmafia_namespaceObject.cliExecute)("send time's arrow to botticelli");
        (0,external_kolmafia_namespaceObject.setProperty)("_timeArrowSent", "true");
      }

      while (
      (0,external_kolmafia_namespaceObject.haveSkill)(Skill.get("Ancestral Recall")) &&
      (0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("_ancestralRecallCasts")) < 10)
      {
        if ((0,external_kolmafia_namespaceObject.availableAmount)(Item.get("Blue Mana")) > 0) {
          (0,external_kolmafia_namespaceObject.useSkill)(1, Skill.get("Ancestral Recall"));
        } else {
          break;
        }
      }

      if (advs == (0,external_kolmafia_namespaceObject.myAdventures)()) {
        (0,external_kolmafia_namespaceObject.print)(
        "Mum shakes her head at me, I didn't generate any adventures..",
        "gray");

      } else {
        (0,external_kolmafia_namespaceObject.print)(
        "Feeling so adventerous, that I could explore " + (
        (0,external_kolmafia_namespaceObject.myAdventures)() - advs) +
        " more times!",
        "gray");

      }
    } }, { key: "doFreeFights", value:

    function doFreeFights() {
      (0,external_kolmafia_namespaceObject.print)(
      "I want to test out some of my kung fu moves before I head off. Lets do some free fights",
      "blue");


      (0,external_kolmafia_namespaceObject.outfit)("Farming");

      while ((0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("_brickoFights")) < 10) {
        if ((0,external_kolmafia_namespaceObject.availableAmount)(Item.get("BRICKO Ooze")) > 0) {
          (0,external_kolmafia_namespaceObject.use)(1, Item.get("BRICKO Ooze"));
        } else {
          break;
        }
      }

      while ((0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("_lynyrdSnareUses")) < 3) {
        if ((0,external_kolmafia_namespaceObject.availableAmount)(Item.get("Lynyrd snare")) > 0) {
          (0,external_kolmafia_namespaceObject.use)(1, Item.get("Lynyrd snare"));
        } else {
          break;
        }
      }

      while ((0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("_drunkPygmyBanishes")) < 11) {
        var bowling = Item.get("bowling ball");

        if ((0,external_kolmafia_namespaceObject.getInventory)()[bowling.name] > 0) {
          (0,external_kolmafia_namespaceObject.putCloset)(bowling);
          // put_shop(1750, 0, 1000, bowling);
        }

        if (
        (0,external_kolmafia_namespaceObject.availableAmount)(Item.get("Louder than Bomb")) == 0 ||
        (0,external_kolmafia_namespaceObject.availableAmount)(Item.get("Divine champagne popper")) == 0 ||
        (0,external_kolmafia_namespaceObject.availableAmount)(Item.get("Bowl of Scorpions")) == 0)
        {
          break;
        }

        (0,external_kolmafia_namespaceObject.adv1)(Location.get("The Hidden Bowling Alley"), -1, "");
      }

      while ((0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("_glarkCableUses")) < 5) {
        if ((0,external_kolmafia_namespaceObject.availableAmount)(Item.get("glark cable")) > 0) {
          (0,external_kolmafia_namespaceObject.adv1)(Location.get("The Red Zeppelin"), -1, "");
        } else {
          break;
        }
      }

      if (!(0,external_kolmafia_namespaceObject.toBoolean)((0,external_kolmafia_namespaceObject.getProperty)("_eldritchTentacleFought"))) {
        (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=forestvillage&action=fv_scientist");
        (0,external_kolmafia_namespaceObject.runChoice)(1);
        (0,external_kolmafia_namespaceObject.runCombat)();
      }

      (0,external_kolmafia_namespaceObject.print)("Free fights are all done! I feel empowered!", "gray");
    } }, { key: "createLightsThatGoOut", value:

    function createLightsThatGoOut() {
      (0,external_kolmafia_namespaceObject.print)("May need to make some lights that never go out!", "blue");
      var itemToMake = Item.get("A Light That Never Goes Out");
      var record = Item.get("Recording of Inigo's Incantation of Inspiration");
      var effect = Effect.get("Inigo's Incantation of Inspiration");
      var ingred = Item.get("Lump of Brituminous coal");
      var ingred2 = Item.get("third-hand lantern");

      while (
      (0,external_kolmafia_namespaceObject.availableAmount)(itemToMake) < 15 &&
      (0,external_kolmafia_namespaceObject.mallPrice)(itemToMake) < (0,external_kolmafia_namespaceObject.mallPrice)(ingred) + 100 + (0,external_kolmafia_namespaceObject.mallPrice)(record) / 4)
      {
        (0,external_kolmafia_namespaceObject.buy)(itemToMake, 15, (0,external_kolmafia_namespaceObject.mallPrice)(ingred) + 100 + (0,external_kolmafia_namespaceObject.mallPrice)(record) / 4);
      }

      while (
      (0,external_kolmafia_namespaceObject.availableAmount)(itemToMake) + (0,external_kolmafia_namespaceObject.availableAmount)(ingred) < 20 &&
      (0,external_kolmafia_namespaceObject.mallPrice)(ingred) + (0,external_kolmafia_namespaceObject.mallPrice)(record) / 4 < (0,external_kolmafia_namespaceObject.mallPrice)(itemToMake))
      {
        (0,external_kolmafia_namespaceObject.buy)(ingred, 15, (0,external_kolmafia_namespaceObject.mallPrice)(itemToMake));
      }

      (0,external_kolmafia_namespaceObject.retrieveItem)(record, 4);

      while ((0,external_kolmafia_namespaceObject.availableAmount)(ingred) >= 4) {
        (0,external_kolmafia_namespaceObject.cliExecute)("shrug Polka of Plenty");

        (0,external_kolmafia_namespaceObject.use)(record);

        while ((0,external_kolmafia_namespaceObject.haveEffect)(effect) >= 5) {
          (0,external_kolmafia_namespaceObject.craft)("smith", 1, ingred, ingred2);
        }
      }

      if ((0,external_kolmafia_namespaceObject.availableAmount)(itemToMake) < 15) {
        (0,external_kolmafia_namespaceObject.print)("Hmm, not enough. I'll call lights no go out again.", "red");
        this.createLightsThatGoOut();
      }

      (0,external_kolmafia_namespaceObject.print)("Whee! Now my light will never go out!", "gray");
    } }, { key: "doAbsorbs", value:

    function doAbsorbs() {
      (0,external_kolmafia_namespaceObject.print)("My stomach feels peckish.. Lets do some absorbs!", "blue");

      if ((0,external_kolmafia_namespaceObject.haveEffect)(Effect.get("In Your Cups")) > 450) {
        while ((0,external_kolmafia_namespaceObject.myAbsorbs)() < 15) {
          (0,external_kolmafia_namespaceObject.cliExecute)("absorb light that never goes out");
        }
      } else {
        while ((0,external_kolmafia_namespaceObject.myAbsorbs)() < 15) {
          (0,external_kolmafia_namespaceObject.cliExecute)("absorb meat paste");
        }
      }

      (0,external_kolmafia_namespaceObject.print)("Burp! Absorbs complete!", "gray");
    } }, { key: "isFarmingDay", value:

    function isFarmingDay() {
      return (0,external_kolmafia_namespaceObject.numericModifier)("Smithsness") >= 50;
    } }, { key: "doJokestersGun", value:

    function doJokestersGun() {
      if (
      (0,external_kolmafia_namespaceObject.getProperty)("_firedJokestersGun") == "true" ||
      (0,external_kolmafia_namespaceObject.availableAmount)(Item.get("The Jokester's gun")) == 0)
      {
        return;
      }

      (0,external_kolmafia_namespaceObject.print)(
      '"Is that bulge in your pocket for me?" she asks. But you whip out a gun and say "Not today!"',
      "blue");


      (0,external_kolmafia_namespaceObject.equip)(Item.get("The Jokester's gun"));

      if (this.doSideStuff) {
        (0,external_kolmafia_namespaceObject.use)(Item.get("Drum Machine"));
        (0,external_kolmafia_namespaceObject.print)(
        "Oh god! Your girlfriend transformed into a giant worm! That was horrifying a fight!",
        "gray");

      } else if ((0,external_kolmafia_namespaceObject.haveEffect)(Effect.get("In Your Cups")) >= 10) {
        (0,external_kolmafia_namespaceObject.adventure)(1, Location.get("The Electric Lemonade Acid Parade"));
        (0,external_kolmafia_namespaceObject.print)(
        "You blow the smoke off the barrel of your gun, and sneer. Another essential tofu hits the ground.",
        "gray");

      } else {
        (0,external_kolmafia_namespaceObject.print)(
        "Couldn't use the jokesters gun for a free fight as not enough in your cups",
        "red");

      }

      (0,external_kolmafia_namespaceObject.outfit)("Farming");
    } }, { key: "doMood", value:

    function doMood() {
      (0,external_kolmafia_namespaceObject.print)("Time to be moody!", "blue");
      var mood = "apathetic";

      if (this.isFarmingDay()) {
        mood = "acidparade";
      }

      (0,external_kolmafia_namespaceObject.cliExecute)("mood " + mood);

      (0,external_kolmafia_namespaceObject.cliExecute)("mood execute");
      (0,external_kolmafia_namespaceObject.print)("Today I feel " + mood + "!", "gray");
    } }, { key: "doFarming", value:

    function doFarming() {
      (0,external_kolmafia_namespaceObject.refreshStatus)();
      (0,external_kolmafia_namespaceObject.visitUrl)("charpane.php");
      var advs = (0,external_kolmafia_namespaceObject.myAdventures)();

      //
      // FARM OR CHARGE AS APPROPRIATE
      //

      if (this.isFarmingDay()) {
        (0,external_kolmafia_namespaceObject.print)("You sigh as you put on your big boy boots. It's time to milk the tofu again.. In the paddocks, ".concat(
        (0,external_kolmafia_namespaceObject.myAdventures)(), " tofu cows tremble in fear!"),
        "blue");


        if (
        !(0,external_kolmafia_namespaceObject.toBoolean)((0,external_kolmafia_namespaceObject.getProperty)("_borrowedTimeUsed")) &&
        (0,external_kolmafia_namespaceObject.availableAmount)(Item.get("Borrowed Time")) > 0)
        {
          (0,external_kolmafia_namespaceObject.use)(1, Item.get("Borrowed Time"));
        }

        //if (toInt(getProperty("_VYKEACompanionLevel")) == 0) {
        //	retrieveItem(10, Item.get("VYKEA Rail"));
        //	retrieveItem(1, Item.get("VYKEA Instructions"));
        //	retrieveItem(1, Item.get("VYKEA Dowel"));
        //	use(1, Item.get("VYKEA Instructions"));
        //}

        while (
        (0,external_kolmafia_namespaceObject.myAdventures)() > 0 &&
        (0,external_kolmafia_namespaceObject.haveEffect)(Effect.get("In Your Cups")) >= 10)
        {
          this.doJokestersGun();
          (0,external_kolmafia_namespaceObject.outfit)("Farming");

          if (
          (0,external_kolmafia_namespaceObject.haveEffect)(Effect.get("Fat Leon's Phat Loot Lyric")) < 100 &&
          (0,external_kolmafia_namespaceObject.isOnline)("Flesh Puppet"))
          {
            //cliExecute("/w buffy lyric");
            (0,external_kolmafia_namespaceObject.cliExecute)("/w flesh_puppet buffme");
            (0,external_kolmafia_namespaceObject.print)("Waiting for flesh puppet to give me some buffs..", "green");
            (0,external_kolmafia_namespaceObject.waitq)(15);
          }

          if (this.doVoterFight()) {
            continue;
          }

          (0,external_kolmafia_namespaceObject.adventure)(1, Location.get("The Electric Lemonade Acid Parade"));
        }
      } else {
        this.doJokestersGun();
        (0,external_kolmafia_namespaceObject.outfit)("Farming");

        var adventuresToKeep = 200 - this.rolloverAdventures;

        (0,external_kolmafia_namespaceObject.print)("Charging day! Of ".concat(
        (0,external_kolmafia_namespaceObject.myAdventures)(), ", we're spending ").concat(Math.max(
        0,
        (0,external_kolmafia_namespaceObject.myAdventures)() - adventuresToKeep), " adventures today! That's weak!"),

        "blue");


        while ((0,external_kolmafia_namespaceObject.myAdventures)() > adventuresToKeep) {
          if (this.doVoterFight()) {
            continue;
          }

          (0,external_kolmafia_namespaceObject.visitUrl)("inv_use.php?pwd&whichitem=4613&teacups=1");
        }
      }

      if ((0,external_kolmafia_namespaceObject.myAdventures)() == advs) {
        (0,external_kolmafia_namespaceObject.print)(
        "Phew, that wasn't exhausting. Sat on the couch all day! Dad's really proud of me!",
        "gray");

      } else {
        (0,external_kolmafia_namespaceObject.print)(
        "Phew, that was exhausting! Mum's going to be real proud of me!",
        "gray");

      }
    } }, { key: "doVoterFight", value:

    function doVoterFight() {
      if (
      (0,external_kolmafia_namespaceObject.availableAmount)(Item.get('"I voted" Sticker')) == 0 ||
      (0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("_voteFreeFights")) >= 3 && (
      !this.doSideStuff ||
      !this.isFarmingDay() ||
      (0,external_kolmafia_namespaceObject.getProperty)("_voteMonster") != "government bureaucrat"))
      {
        return false;
      }

      var vote_fight_now =
      (0,external_kolmafia_namespaceObject.totalTurnsPlayed)() % 11 == 1 &&
      (0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("lastVoteMonsterTurn")) < (0,external_kolmafia_namespaceObject.totalTurnsPlayed)();

      if (!vote_fight_now) {
        return false;
      }

      (0,external_kolmafia_namespaceObject.print)(
      "Someone is trying to take away my gun rights! I voted for those! Not today!",
      "gray");


      (0,external_kolmafia_namespaceObject.outfit)("Voter");

      (0,external_kolmafia_namespaceObject.adv1)(Location.get("The Electric Lemonade Acid Parade"), 1, "");

      (0,external_kolmafia_namespaceObject.outfit)("farming");

      return true;
    } }, { key: "doFinish", value:

    function doFinish() {
      (0,external_kolmafia_namespaceObject.print)("Gotta put on my PJs, mum is coming to tuck me in!", "blue");
      //
      // NIGHT NIGHT
      //

      (0,external_kolmafia_namespaceObject.outfit)("Rollover");
      (0,external_kolmafia_namespaceObject.print)(
      "Good night mum! Good night dad! Good night " + (0,external_kolmafia_namespaceObject.myName)() + "!",
      "gray");


      var licksReady = (0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("shockingLickCharges"));

      if (licksReady > 0) {
        (0,external_kolmafia_namespaceObject.print)("Psst! My lips are numb! ".concat(
        licksReady, " shocking licks stored!"),
        "gray");

      }
    } }, { key: "doShockingLicks", value:

    function doShockingLicks() {
      var licks = (0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("shockingLickCharges"));

      (0,external_kolmafia_namespaceObject.print)("We have " + licks + " ready!", "blue");

      if (!this.isFarmingDay()) {
        (0,external_kolmafia_namespaceObject.print)("Oi! We're not fighting this worm without some +item!");
        return;
      }

      var drum = Item.get("Drum Machine");
      (0,external_kolmafia_namespaceObject.retrieveItem)(drum, licks);
      var adv = (0,external_kolmafia_namespaceObject.myAdventures)();

      while (
      (0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("shockingLickCharges")) > 0 &&
      (0,external_kolmafia_namespaceObject.availableAmount)(drum) > 0 &&
      (0,external_kolmafia_namespaceObject.myAdventures)() >= adv)
      {
        (0,external_kolmafia_namespaceObject.use)(drum);
      }

      (0,external_kolmafia_namespaceObject.print)("Fought some worms!");
    } }, { key: "voterSetup", value:

    function voterSetup() {
      (0,external_kolmafia_namespaceObject.print)("Oh god, I forgot I need to vote in the elections today", "blue");

      if ((0,external_kolmafia_namespaceObject.availableAmount)(Item.get('"I Voted!" sticker')) > 0) {
        (0,external_kolmafia_namespaceObject.print)("Already voted for Trump.. Whew!", "gray");
        return;
      }

      var voterValueTable = [
      {
        monster: Monster.get("terrible mutant"),
        value: (0,external_kolmafia_namespaceObject.mallPrice)(Item.get("glob of undifferentiated tissue")) + 10 },

      {
        monster: Monster.get("angry ghost"),
        value: (0,external_kolmafia_namespaceObject.mallPrice)(Item.get("ghostly ectoplasm")) * 1.11 },

      {
        monster: Monster.get("government bureaucrat"),
        value:
        (0,external_kolmafia_namespaceObject.mallPrice)(Item.get("absentee voter ballot")) * 0.05 + 75 * 0.25 + 50 },

      {
        monster: Monster.get("annoyed snake"),
        value: 25 * 0.5 + 25 },

      {
        monster: Monster.get("slime blob"),
        value: 20 * 0.4 + 50 * 0.2 + 250 * 0.01 }];



      try {
        (0,external_kolmafia_namespaceObject.visitUrl)("inv_use.php?pwd&which=3&whichitem=9991");
        //use(Item.get("Absentee Voter Ballot"));
      } catch (e) {}

      try {
        (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
      } catch (e) {}

      var votingMonsterPriority = voterValueTable.
      sort((a, b) => b.value - a.value).
      map((element) => element.monster.name);

      var initPriority = new Map([
      ["Adventures: +1", 6],
      ["+30% Meat from Monsters", 5],
      ["+3 Stats Per Fight", 4],
      ["+4 Moxie Stats Per Fight", 3],
      ["+4 Muscle Stats Per Fight", 2],
      ["+4 Mysticality Stats Per Fight", 1]]);


      var monsterVote =
      votingMonsterPriority.indexOf((0,external_kolmafia_namespaceObject.getProperty)("_voteMonster1")) <
      votingMonsterPriority.indexOf((0,external_kolmafia_namespaceObject.getProperty)("_voteMonster2")) ?
      1 :
      2;

      var voteLocalPriorityArr = [
      [
      0,
      initPriority.get((0,external_kolmafia_namespaceObject.getProperty)("_voteLocal1")) || (
      (0,external_kolmafia_namespaceObject.getProperty)("_voteLocal1").indexOf("-") === -1 ? 1 : -1)],

      [
      1,
      initPriority.get((0,external_kolmafia_namespaceObject.getProperty)("_voteLocal2")) || (
      (0,external_kolmafia_namespaceObject.getProperty)("_voteLocal2").indexOf("-") === -1 ? 1 : -1)],

      [
      2,
      initPriority.get((0,external_kolmafia_namespaceObject.getProperty)("_voteLocal3")) || (
      (0,external_kolmafia_namespaceObject.getProperty)("_voteLocal3").indexOf("-") === -1 ? 1 : -1)],

      [
      3,
      initPriority.get((0,external_kolmafia_namespaceObject.getProperty)("_voteLocal4")) || (
      (0,external_kolmafia_namespaceObject.getProperty)("_voteLocal4").indexOf("-") === -1 ? 1 : -1)]];



      var bestVotes = voteLocalPriorityArr.sort((a, b) => b[1] - a[1]);
      var firstInit = bestVotes[0][0];
      var secondInit = bestVotes[1][0];

      (0,external_kolmafia_namespaceObject.print)(
      "We're voting for " +
      (0,external_kolmafia_namespaceObject.getProperty)("_voteLocal" + (firstInit + 1)) +
      " (" +
      firstInit +
      ")" +
      " and " +
      (0,external_kolmafia_namespaceObject.getProperty)("_voteLocal" + (secondInit + 1)) +
      " (" +
      secondInit +
      ")",
      "gray");


      (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?option=1&whichchoice=1331&g=".concat(
      monsterVote, "&local[]=").concat(firstInit, "&local[]=").concat(firstInit));

      (0,external_kolmafia_namespaceObject.waitq)(1);
    } }, { key: "doStock", value:

    function doStock() {
      (0,external_kolmafia_namespaceObject.print)("I need to dump this essential tofu somewhere...", "blue");
      var tofu = Item.get("Essential Tofu");
      var to_sell = (0,external_kolmafia_namespaceObject.itemAmount)(tofu) - 10;

      if (to_sell <= 0) {
        (0,external_kolmafia_namespaceObject.print)("Oh! I don't have any tofu to sell.. Nevermind then!", "gray");
        return;
      }

      if (this.sendToMallMulti) {
        (0,external_kolmafia_namespaceObject.print)(
        "Stocking " + this.mallMultiName + "! " + to_sell + " tofu to stock!",
        "purple");

        (0,external_kolmafia_namespaceObject.cliExecute)("csend ".concat(
        to_sell, " essential tofu to ").concat(this.mallMultiName, " || ").concat(this.mallLimit, "@").concat(this.pricePerTofu));

      } else if (
      this.sellbotOverflow < 100000000 &&
      (0,external_kolmafia_namespaceObject.shopAmount)(tofu) > this.sellbotOverflow)
      {
        (0,external_kolmafia_namespaceObject.print)("We have ".concat(
        this.getNumber(
        (0,external_kolmafia_namespaceObject.shopAmount)(tofu)), " tofu in mall, our overflow is ").concat(
        this.getNumber(
        this.sellbotOverflow), " so lets send ").concat(
        this.getNumber(to_sell), " excess tofu to sellbot!"),
        "purple");


        (0,external_kolmafia_namespaceObject.cliExecute)("csend ".concat(to_sell, " essential tofu to sellbot"));
      } else {
        (0,external_kolmafia_namespaceObject.putShop)(this.pricePerTofu, this.mallLimit, to_sell, tofu);
      }

      (0,external_kolmafia_namespaceObject.print)("Got rid of that tofu!", "gray");
    } }]);return Tofu;}();


function main() {
  new Tofu().startTofuing();
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;