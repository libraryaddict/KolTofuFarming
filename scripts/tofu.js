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
function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return typeof key === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (typeof input !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (typeof res !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}var

Tofu = /*#__PURE__*/function () {function Tofu() {_classCallCheck(this, Tofu);_defineProperty(this, "adventuresValuedAt",
    4000);_defineProperty(this, "doSideStuff",
    true);_defineProperty(this, "freeFightValue",
    4000);_defineProperty(this, "sendToMallMulti",
    false);_defineProperty(this, "mallMultiName",
    "ASSistant");_defineProperty(this, "pricePerTofu",
    5000);_defineProperty(this, "mallLimit",
    3);_defineProperty(this, "dynMallLimit",
    1000);_defineProperty(this, "breakfastScript",
    "breakfast");_defineProperty(this, "sellbotOverflow",
    100000000); // When we have more than this amount of tofu in our store, we send the rest to sellbot
    _defineProperty(this, "sellbotSendSome", 0);_defineProperty(this, "skipRubberSpiders",
    false);_defineProperty(this, "freeFights",
    new Map());_defineProperty(this, "preferenceNag",
    "_nagAboutGelKick");}_createClass(Tofu, [{ key: "addFreeFight", value:

    function addFreeFight(fightName) {
      this.freeFights.set(fightName, (this.freeFights.get(fightName) | 0) + 1);
    } }, { key: "getAdventuresFromRollover", value:

    function getAdventuresFromRollover() {
      // How many adventures we expect to gain from rollover.
      var expected = 70;

      if ((0,external_kolmafia_namespaceObject.haveSkill)(external_kolmafia_namespaceObject.Skill.get("Brain Games"))) {
        expected += 3;
      }

      return expected;
    } }, { key: "startTofuing", value:

    function startTofuing() {
      if ((0,external_kolmafia_namespaceObject.myClass)() != external_kolmafia_namespaceObject.Class.get("Gelatinous Noob")) {
        throw "You're not a Gelatinous Noob!";
      }

      if (!this.doQuickCheck()) {
        (0,external_kolmafia_namespaceObject.print)("Cannot continue when you can't meet basic requirements!");
        return;
      }

      var startedCups = (0,external_kolmafia_namespaceObject.haveEffect)(external_kolmafia_namespaceObject.Effect.get("In Your Cups"));
      var turnsSpent = (0,external_kolmafia_namespaceObject.turnsPlayed)();

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

      var startedTofu = (0,external_kolmafia_namespaceObject.itemAmount)(external_kolmafia_namespaceObject.Item.get("Essential Tofu"));

      this.doFarming();

      this.setGovermentToday();

      turnsSpent = (0,external_kolmafia_namespaceObject.turnsPlayed)() - turnsSpent;
      var finalTofu = (0,external_kolmafia_namespaceObject.itemAmount)(external_kolmafia_namespaceObject.Item.get("Essential Tofu")) - startedTofu;
      this.doStock();
      this.doFinish();

      var finalCups = (0,external_kolmafia_namespaceObject.haveEffect)(external_kolmafia_namespaceObject.Effect.get("In Your Cups"));
      var turnsGained = finalCups - startedCups;

      if (this.isFarmingDay()) {
        turnsGained += turnsSpent;
      } else {
        turnsGained -= turnsSpent;
      }

      if (turnsGained != 0) {
        (0,external_kolmafia_namespaceObject.print)(
        "Spent " +
        turnsSpent +
        " turns and gained an extra " +
        turnsGained +
        ' of "In Your Cups!"',
        "gray");

      }

      var str = "";
      var total = 0;

      this.freeFights.forEach((v, k) => {
        if (str.length > 0) {
          str += ", ";
        }

        str += k + ": " + v;
        total += v;
      });

      (0,external_kolmafia_namespaceObject.print)("".concat(total, " free fights: ").concat(str), "gray");

      if ((finalTofu -= turnsSpent) > 0) {
        (0,external_kolmafia_namespaceObject.print)("Gained from free fights, " + finalTofu + " extra tofu!", "gray");
      }

      if ((0,external_kolmafia_namespaceObject.getProperty)(this.preferenceNag) == "true") {
        (0,external_kolmafia_namespaceObject.print)(
        "I'm not sure, but you may need to set up GELATINOUS KICK in your combat macro! Preferably after the first melee attack to minimize MP usage. The bot was likely defeated today.",
        "red");

      }
    } }, { key: "loadProperties", value:

    function loadProperties() {
      (0,external_kolmafia_namespaceObject.print)("Now loading tofu properties..", "gray");

      var lines = [];

      var load = function load(propertyName, defaultValue) {
        var prop = (0,external_kolmafia_namespaceObject.getProperty)(propertyName);

        if (prop == null || prop == "") {
          lines.push(["Setting Missing: ".concat(
          propertyName, ". Defaulted to: ").concat(defaultValue),
          "gray"]);

          return defaultValue;
        }

        lines.push(["Setting Found: ".concat(propertyName, ". Value: ").concat(prop), "#666666"]);
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

      this.skipRubberSpiders = (0,external_kolmafia_namespaceObject.toBoolean)(
      load("tofuSkipRubberSpiders", this.skipRubberSpiders.toString()));

      this.sellbotSendSome = (0,external_kolmafia_namespaceObject.toInt)(
      load("tofuSellbotSendSome", this.sellbotSendSome.toString()));

      this.dynMallLimit = (0,external_kolmafia_namespaceObject.toInt)(
      load("tofuLimitPerXTofuStocked", this.dynMallLimit.toString()));


      lines.sort((v1, v2) => v1[0].localeCompare(v2[0]));

      lines.forEach((s) => {
        (0,external_kolmafia_namespaceObject.print)(s[0], s[1]);
      });
    } }, { key: "doQuickCheck", value:

    function doQuickCheck() {
      var passed = true;

      if ((0,external_kolmafia_namespaceObject.myClass)() != external_kolmafia_namespaceObject.Class.get("Gelatinous Noob")) {
        (0,external_kolmafia_namespaceObject.print)("You are not a gel noob!", "red");
        passed = false;
      }

      var rec = [
      "The Jokester's gun",
      "Mafia Thumb Ring",
      "Garbage Sticker",
      "Mr. Cheeng's Spectacles",
      "Xiblaxian holo-wrist-puter",
      "Carnivorous potted plant",
      "potato alarm clock"].

      map((i) => external_kolmafia_namespaceObject.Item.get(i)).
      filter((i) => i != external_kolmafia_namespaceObject.Item.none && (0,external_kolmafia_namespaceObject.availableAmount)(i) == 0);

      if (rec.length > 0) {
        (0,external_kolmafia_namespaceObject.print)(
        "Missing some nice pieces of gear! " +
        rec.map((i) => i.name).join(", "),
        "red");


        (0,external_kolmafia_namespaceObject.waitq)(2);
      }

      var rolloverOutfit = (0,external_kolmafia_namespaceObject.outfitPieces)(
      "Gladiatorial Glad Rags").
      filter((i) => (0,external_kolmafia_namespaceObject.availableAmount)(i) == 0);

      if (rolloverOutfit.length > 0) {
        (0,external_kolmafia_namespaceObject.print)(
        "Missing pieces of rollover outfit! Missing: " +
        rolloverOutfit.map((i) => i.name).join(", "),
        "red");

      }

      var need = ["Eldritch hat", "eldritch pants"].
      map((i) => external_kolmafia_namespaceObject.Item.get(i)).
      filter((i) => (0,external_kolmafia_namespaceObject.availableAmount)(i) == 0);

      if (need.length > 0) {
        (0,external_kolmafia_namespaceObject.print)(
        "Missing pieces of farming outfit! Missing: " +
        need.map((i) => i.name).join(", "),
        "red");


        passed = false;
      }

      if ((0,external_kolmafia_namespaceObject.availableAmount)(external_kolmafia_namespaceObject.Item.get("The Jokester's gun")) == 0) {
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

          if (item == null || item == external_kolmafia_namespaceObject.Item.none) {
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

      this.grabItem(external_kolmafia_namespaceObject.Item.get("Bowl of Scorpions"), 20, this.freeFightValue * 0.8);
      this.grabItem(
      external_kolmafia_namespaceObject.Item.get("Louder than Bomb"),
      10,
      this.adventuresValuedAt * 11);

      this.grabItem(
      external_kolmafia_namespaceObject.Item.get("Divine champagne popper"),
      10,
      this.adventuresValuedAt * 11);

      this.grabItem(external_kolmafia_namespaceObject.Item.get("human musk"), 10, this.adventuresValuedAt * 6);
      this.grabItem(external_kolmafia_namespaceObject.Item.get("borrowed time"), 2, this.adventuresValuedAt * 20);
      this.grabItem(external_kolmafia_namespaceObject.Item.get("glark cable"), 10, this.freeFightValue);
      this.grabItem(
      external_kolmafia_namespaceObject.Item.get("Absentee Voter Ballot"),
      3,
      this.freeFightValue * 3);


      this.grabItem(external_kolmafia_namespaceObject.Item.get("BRICKO Ooze"), 10, this.freeFightValue);
      this.grabItem(external_kolmafia_namespaceObject.Item.get("Lynyrd snare"), 3, this.freeFightValue);
      this.grabBuffItems();

      if (this.doSideStuff) {
        this.grabItem(external_kolmafia_namespaceObject.Item.get("Drum Machine"), 3, this.freeFightValue * 5);
      }

      if ((0,external_kolmafia_namespaceObject.haveSkill)(external_kolmafia_namespaceObject.Skill.get("Ancestral Recall"))) {
        this.grabItem(external_kolmafia_namespaceObject.Item.get("Blue Mana"), 10, this.adventuresValuedAt);
      }

      if (!this.skipRubberSpiders) {
        this.grabItem(external_kolmafia_namespaceObject.Item.get("Rubber Spider"), 45, this.freeFightValue);
      }

      this.grabItem(external_kolmafia_namespaceObject.Item.get("Time's Arrow"), 3, this.adventuresValuedAt * 3);

      (0,external_kolmafia_namespaceObject.retrieveItem)(100, external_kolmafia_namespaceObject.Item.get("Third-Hand Lantern"));
      (0,external_kolmafia_namespaceObject.retrieveItem)(1000, external_kolmafia_namespaceObject.Item.get("meat paste"));
      this.buyCheapestChocolates(10);

      var famEquip = external_kolmafia_namespaceObject.Item.get("ittah bittah hookah");

      if (famEquip != null && (0,external_kolmafia_namespaceObject.equippedItem)(external_kolmafia_namespaceObject.Slot.get("familiar")) == external_kolmafia_namespaceObject.Item.none) {
        (0,external_kolmafia_namespaceObject.equip)(famEquip);
      }

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
      (0,external_kolmafia_namespaceObject.takeStash)(1, external_kolmafia_namespaceObject.Item.get("Platinum Yendorian Express Card")))
      {
        (0,external_kolmafia_namespaceObject.cliExecute)("/shrug lyric");
        (0,external_kolmafia_namespaceObject.use)(1, external_kolmafia_namespaceObject.Item.get("Platinum Yendorian Express Card"));
        (0,external_kolmafia_namespaceObject.putStash)(1, external_kolmafia_namespaceObject.Item.get("Platinum Yendorian Express Card"));
      }

      if (
      !(0,external_kolmafia_namespaceObject.toBoolean)((0,external_kolmafia_namespaceObject.getProperty)("_bagOTricksUsed")) &&
      (0,external_kolmafia_namespaceObject.takeStash)(1, external_kolmafia_namespaceObject.Item.get("Bag o' Tricks")))
      {
        (0,external_kolmafia_namespaceObject.cliExecute)("/shrug lyric");
        (0,external_kolmafia_namespaceObject.use)(1, external_kolmafia_namespaceObject.Item.get("Bag o' Tricks"));
        (0,external_kolmafia_namespaceObject.putStash)(1, external_kolmafia_namespaceObject.Item.get("Bag o' Tricks"));
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
      map((s) => external_kolmafia_namespaceObject.Item.get(s));
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
      (0,external_kolmafia_namespaceObject.getProperty)("_timeArrowSent") == "" &&
      (0,external_kolmafia_namespaceObject.availableAmount)(external_kolmafia_namespaceObject.Item.get("Time's Arrow")) > 0)
      {
        (0,external_kolmafia_namespaceObject.cliExecute)("send time's arrow to cookiebot || arrow");
        (0,external_kolmafia_namespaceObject.setProperty)("_timeArrowSent", "true");
      }

      if (
      !(0,external_kolmafia_namespaceObject.toBoolean)((0,external_kolmafia_namespaceObject.getProperty)("_essentialTofuUsed")) &&
      (0,external_kolmafia_namespaceObject.availableAmount)(external_kolmafia_namespaceObject.Item.get("Essential Tofu")) > 0)
      {
        (0,external_kolmafia_namespaceObject.use)(1, external_kolmafia_namespaceObject.Item.get("Essential Tofu"));
      }

      if (!(0,external_kolmafia_namespaceObject.toBoolean)((0,external_kolmafia_namespaceObject.getProperty)("_etchedHourglassUsed"))) {
        (0,external_kolmafia_namespaceObject.use)(1, external_kolmafia_namespaceObject.Item.get("Etched Hourglass"));
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
        if ((0,external_kolmafia_namespaceObject.itemAmount)(external_kolmafia_namespaceObject.Item.get("LOV Extraterrestrial Chocolate")) > 0) {
          (0,external_kolmafia_namespaceObject.use)(1, external_kolmafia_namespaceObject.Item.get("LOV Extraterrestrial Chocolate"));
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
      (0,external_kolmafia_namespaceObject.haveSkill)(external_kolmafia_namespaceObject.Skill.get("Ancestral Recall")) &&
      (0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("_ancestralRecallCasts")) < 10)
      {
        if ((0,external_kolmafia_namespaceObject.availableAmount)(external_kolmafia_namespaceObject.Item.get("Blue Mana")) > 0) {
          (0,external_kolmafia_namespaceObject.useSkill)(1, external_kolmafia_namespaceObject.Skill.get("Ancestral Recall"));
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

      return (0,external_kolmafia_namespaceObject.myAdventures)() - advs;
    } }, { key: "doRubberSpider", value:

    function doRubberSpider() {
      if (
      this.skipRubberSpiders ||
      (0,external_kolmafia_namespaceObject.availableAmount)(external_kolmafia_namespaceObject.Item.get("Rubber Spider")) <= 0)
      {
        return false;
      }

      var pref = "_lastSpiderUsed";
      var prefNubbin = "_rubberNubins";
      var turnsAgo = (0,external_kolmafia_namespaceObject.totalTurnsPlayed)() - (0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)(pref));
      var nubbin = external_kolmafia_namespaceObject.Item.get("Rubber nubbin");

      if (turnsAgo < 10 || (0,external_kolmafia_namespaceObject.getProperty)("_skipRubberSpiders") == "true") {
        return;
      }

      if ((0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)(prefNubbin)) == (0,external_kolmafia_namespaceObject.availableAmount)(nubbin)) {
        if (turnsAgo <= 20) {
          return false;
        } else if (turnsAgo == 21 && !this.isFarmingDay()) {
          (0,external_kolmafia_namespaceObject.print)(
          "Last spider was " + turnsAgo + " turns ago.. Lets see if we hit one.");

          (0,external_kolmafia_namespaceObject.adv1)(external_kolmafia_namespaceObject.Location.get("The Electric Lemonade Acid Parade"));
        }
      }

      if ((0,external_kolmafia_namespaceObject.propertyExists)(prefNubbin)) {
        this.addFreeFight("Rubber Spider");
      }

      if (!(0,external_kolmafia_namespaceObject.isOnline)("CookieBot")) {
        (0,external_kolmafia_namespaceObject.setProperty)("_skipRubberSpiders", "true");
        return false;
      }

      (0,external_kolmafia_namespaceObject.setProperty)(pref, (0,external_kolmafia_namespaceObject.totalTurnsPlayed)().toString());
      (0,external_kolmafia_namespaceObject.setProperty)(prefNubbin, (0,external_kolmafia_namespaceObject.availableAmount)(nubbin) + "");

      (0,external_kolmafia_namespaceObject.cliExecute)("send rubber spider to cookiebot || spider");

      (0,external_kolmafia_namespaceObject.print)(
      "Waiting 15 seconds to be better reassured that the rubber spider is applied soon as feasible",
      "gray");

      (0,external_kolmafia_namespaceObject.waitq)(15);
      return true;
    } }, { key: "doFreeFights", value:

    function doFreeFights() {
      if ((0,external_kolmafia_namespaceObject.myAdventures)() <= 0) {
        return;
      }

      (0,external_kolmafia_namespaceObject.print)(
      "I want to test out some of my kung fu moves before I head off. Lets do some free fights",
      "blue");


      (0,external_kolmafia_namespaceObject.outfit)("Farming");

      while ((0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("_brickoFights")) < 10) {
        if ((0,external_kolmafia_namespaceObject.availableAmount)(external_kolmafia_namespaceObject.Item.get("BRICKO Ooze")) > 0) {
          (0,external_kolmafia_namespaceObject.use)(1, external_kolmafia_namespaceObject.Item.get("BRICKO Ooze"));
          this.addFreeFight("BRICKO");
        } else {
          break;
        }
      }

      while ((0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("_lynyrdSnareUses")) < 3) {
        if ((0,external_kolmafia_namespaceObject.availableAmount)(external_kolmafia_namespaceObject.Item.get("Lynyrd snare")) > 0) {
          (0,external_kolmafia_namespaceObject.use)(1, external_kolmafia_namespaceObject.Item.get("Lynyrd snare"));
          this.addFreeFight("Lynyrd");
        } else {
          break;
        }
      }

      var myTurns = (0,external_kolmafia_namespaceObject.myAdventures)();

      while (
      (0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("_drunkPygmyBanishes")) < 11 &&
      myTurns <= (0,external_kolmafia_namespaceObject.myAdventures)() &&
      !this.isWandererHoliday())
      {
        var bowling = external_kolmafia_namespaceObject.Item.get("bowling ball");

        if ((0,external_kolmafia_namespaceObject.getInventory)()[bowling.name] > 0) {
          (0,external_kolmafia_namespaceObject.putCloset)(bowling);
          // put_shop(1750, 0, 1000, bowling);
        }

        if (
        (0,external_kolmafia_namespaceObject.availableAmount)(external_kolmafia_namespaceObject.Item.get("Louder than Bomb")) == 0 ||
        (0,external_kolmafia_namespaceObject.availableAmount)(external_kolmafia_namespaceObject.Item.get("Divine champagne popper")) == 0 ||
        (0,external_kolmafia_namespaceObject.itemAmount)(external_kolmafia_namespaceObject.Item.get("Bowl of Scorpions")) == 0)
        {
          break;
        }

        (0,external_kolmafia_namespaceObject.adv1)(external_kolmafia_namespaceObject.Location.get("The Hidden Bowling Alley"), -1, "");
        this.addFreeFight("Drunk Pygmy");
      }

      while (
      (0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("_glarkCableUses")) < 5 &&
      !this.isWandererHoliday())
      {
        var count = (0,external_kolmafia_namespaceObject.myAdventures)();

        if ((0,external_kolmafia_namespaceObject.itemAmount)(external_kolmafia_namespaceObject.Item.get("glark cable")) > 0) {
          (0,external_kolmafia_namespaceObject.adv1)(external_kolmafia_namespaceObject.Location.get("The Red Zeppelin"), -1, "");
          this.addFreeFight("Red Zappelin");

          if (
          count > (0,external_kolmafia_namespaceObject.myAdventures)() &&
          (0,external_kolmafia_namespaceObject.getProperty)("lastCopyableMonster").includes("red"))
          {
            (0,external_kolmafia_namespaceObject.abort)(
            "You spent an adventure at the red zeppelin. The last copyable monster has 'red' in the name. I'm assuming your combat script is borked.");

            throw "Please check combat script";
          }
        } else {
          break;
        }
      }

      if (!(0,external_kolmafia_namespaceObject.toBoolean)((0,external_kolmafia_namespaceObject.getProperty)("_eldritchTentacleFought"))) {
        (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=forestvillage&action=fv_scientist");
        (0,external_kolmafia_namespaceObject.runChoice)(1);
        (0,external_kolmafia_namespaceObject.runCombat)();
        this.addFreeFight("Eldritch Tentacle");
      }

      var fights = 0;

      this.freeFights.forEach((v) => {
        fights += v;
      });

      (0,external_kolmafia_namespaceObject.print)("".concat(fights, " free fights are all done! I feel empowered!"), "gray");
    } }, { key: "createLightsThatGoOut", value:

    function createLightsThatGoOut() {
      (0,external_kolmafia_namespaceObject.print)("May need to make some lights that never go out!", "blue");
      var itemToMake = external_kolmafia_namespaceObject.Item.get("A Light That Never Goes Out");
      var record = external_kolmafia_namespaceObject.Item.get("Recording of Inigo's Incantation of Inspiration");
      var effect = external_kolmafia_namespaceObject.Effect.get("Inigo's Incantation of Inspiration");
      var ingred = external_kolmafia_namespaceObject.Item.get("Lump of Brituminous coal");
      var ingred2 = external_kolmafia_namespaceObject.Item.get("third-hand lantern");

      var getCostToMake = () =>
      (0,external_kolmafia_namespaceObject.mallPrice)(ingred) + (0,external_kolmafia_namespaceObject.mallPrice)(ingred2) + (0,external_kolmafia_namespaceObject.mallPrice)(record) / 4;

      while (
      (0,external_kolmafia_namespaceObject.availableAmount)(itemToMake) < 15 &&
      (0,external_kolmafia_namespaceObject.mallPrice)(itemToMake) < getCostToMake())
      {
        (0,external_kolmafia_namespaceObject.print)("Looks like it's cheaper to buy them, than to make them..", "gray");
        (0,external_kolmafia_namespaceObject.buy)(itemToMake, 15, getCostToMake());
      }

      while (
      (0,external_kolmafia_namespaceObject.availableAmount)(itemToMake) + (0,external_kolmafia_namespaceObject.availableAmount)(ingred) < 20 &&
      getCostToMake() < (0,external_kolmafia_namespaceObject.mallPrice)(itemToMake))
      {
        (0,external_kolmafia_namespaceObject.print)("Looks like it's cheaper to make them, than to buy them..", "gray");
        (0,external_kolmafia_namespaceObject.buy)(ingred, 15, (0,external_kolmafia_namespaceObject.mallPrice)(itemToMake));
      }

      (0,external_kolmafia_namespaceObject.retrieveItem)(record, 4);

      while ((0,external_kolmafia_namespaceObject.availableAmount)(ingred) >= 4) {
        (0,external_kolmafia_namespaceObject.cliExecute)("shrug Polka of Plenty");

        (0,external_kolmafia_namespaceObject.use)(record);

        while ((0,external_kolmafia_namespaceObject.haveEffect)(effect) >= 5) {
          (0,external_kolmafia_namespaceObject.craft)("smith", Math.floor((0,external_kolmafia_namespaceObject.haveEffect)(effect) / 5), ingred, ingred2);
        }
      }

      if ((0,external_kolmafia_namespaceObject.availableAmount)(itemToMake) < 15) {
        (0,external_kolmafia_namespaceObject.print)("Hmm, not enough. I'll call lights no go out again.", "red");
        this.createLightsThatGoOut();
      }

      (0,external_kolmafia_namespaceObject.print)("Whee! Now my light will never go out!", "gray");
    } }, { key: "isWandererHoliday", value:

    function isWandererHoliday() {
      for (var _i = 0, _arr = [
        "El Dia De Los Muertos Borrachos",
        "Feast of Boris",
        "Talk Like a Pirate Day"]; _i < _arr.length; _i++)
      {var wandererHoliday = _arr[_i];
        if (!(0,external_kolmafia_namespaceObject.holiday)().toLowerCase().includes(wandererHoliday.toLowerCase())) {
          continue;
        }

        return true;
      }

      return false;
    } }, { key: "doAbsorbs", value:

    function doAbsorbs() {
      (0,external_kolmafia_namespaceObject.print)("My stomach feels peckish.. Lets do some absorbs!", "blue");

      if (this.isWandererHoliday()) {
        (0,external_kolmafia_namespaceObject.print)(
        "Oh, it's a wanderer holiday.. Well, we definitely are not going to farm today then.",
        "blue");

      }

      var cups = (0,external_kolmafia_namespaceObject.haveEffect)(external_kolmafia_namespaceObject.Effect.get("In Your Cups"));

      if (
      !this.isWandererHoliday() &&
      cups > 450 && (
      cups > 2000 || this.isGovermentToday()))
      {
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
      (0,external_kolmafia_namespaceObject.availableAmount)(external_kolmafia_namespaceObject.Item.get("The Jokester's gun")) == 0)
      {
        return;
      }

      (0,external_kolmafia_namespaceObject.print)(
      '"Is that bulge in your pocket for me?" she asks. But you whip out a gun and say "Not today!"',
      "blue");


      (0,external_kolmafia_namespaceObject.equip)(external_kolmafia_namespaceObject.Item.get("The Jokester's gun"));

      if (this.doSideStuff) {
        (0,external_kolmafia_namespaceObject.use)(external_kolmafia_namespaceObject.Item.get("Drum Machine"));
        (0,external_kolmafia_namespaceObject.print)(
        "Oh god! Your girlfriend transformed into a giant worm! That was horrifying a fight!",
        "gray");

      } else if ((0,external_kolmafia_namespaceObject.haveEffect)(external_kolmafia_namespaceObject.Effect.get("In Your Cups")) >= 10) {
        (0,external_kolmafia_namespaceObject.adventure)(1, external_kolmafia_namespaceObject.Location.get("The Electric Lemonade Acid Parade"));
        (0,external_kolmafia_namespaceObject.print)(
        "You blow the smoke off the barrel of your gun, and sneer. Another essential tofu hits the ground.",
        "gray");

      } else {
        (0,external_kolmafia_namespaceObject.print)(
        "Couldn't use the jokesters gun for a free fight as not enough in your cups",
        "red");

      }

      (0,external_kolmafia_namespaceObject.outfit)("Farming");
      this.addFreeFight("Jokesters Gun");
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
        (0,external_kolmafia_namespaceObject.availableAmount)(external_kolmafia_namespaceObject.Item.get("Borrowed Time")) > 0)
        {
          (0,external_kolmafia_namespaceObject.use)(1, external_kolmafia_namespaceObject.Item.get("Borrowed Time"));
        }

        //if (toInt(getProperty("_VYKEACompanionLevel")) == 0) {
        //	retrieveItem(10, Item.get("VYKEA Rail"));
        //	retrieveItem(1, Item.get("VYKEA Instructions"));
        //	retrieveItem(1, Item.get("VYKEA Dowel"));
        //	use(1, Item.get("VYKEA Instructions"));
        //}

        while (
        (0,external_kolmafia_namespaceObject.myAdventures)() > 0 &&
        (0,external_kolmafia_namespaceObject.haveEffect)(external_kolmafia_namespaceObject.Effect.get("In Your Cups")) >= 10)
        {
          this.doJokestersGun();
          (0,external_kolmafia_namespaceObject.outfit)("Farming");

          if (this.doRubberSpider()) {
            continue;
          }

          if (
          (0,external_kolmafia_namespaceObject.haveEffect)(external_kolmafia_namespaceObject.Effect.get("Fat Leon's Phat Loot Lyric")) < 100 &&
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

          (0,external_kolmafia_namespaceObject.adventure)(1, external_kolmafia_namespaceObject.Location.get("The Electric Lemonade Acid Parade"));
        }
      } else {
        this.doJokestersGun();
        (0,external_kolmafia_namespaceObject.outfit)("Farming");

        var adventuresToKeep = 200 - this.getAdventuresFromRollover();

        (0,external_kolmafia_namespaceObject.print)("Charging day! Of ".concat(
        (0,external_kolmafia_namespaceObject.myAdventures)(), ", we're spending ").concat(Math.max(
        0,
        (0,external_kolmafia_namespaceObject.myAdventures)() - adventuresToKeep), " adventures today! That's weak!"),

        "blue");


        while ((0,external_kolmafia_namespaceObject.myAdventures)() > adventuresToKeep) {
          if (this.doRubberSpider()) {
            continue;
          }

          if (this.doVoterFight()) {
            continue;
          }

          (0,external_kolmafia_namespaceObject.setProperty)("lastEncounter", "In Your Cups"); // Probs a bad move?

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
      if ((0,external_kolmafia_namespaceObject.availableAmount)(external_kolmafia_namespaceObject.Item.get('"I voted" Sticker')) == 0) {
        return false;
      }

      var freeFight = (0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("_voteFreeFights")) < 3;

      if (!freeFight) {
        if (!this.doSideStuff) {
          return false;
        }

        if (!this.isFarmingDay()) {
          return false;
        }

        if ((0,external_kolmafia_namespaceObject.getProperty)("_voteMonster") != "government bureaucrat") {
          return false;
        }

        if (
        (0,external_kolmafia_namespaceObject.shopAmount)(external_kolmafia_namespaceObject.Item.get("absentee voter ballot")) +
        (0,external_kolmafia_namespaceObject.itemAmount)(external_kolmafia_namespaceObject.Item.get("absentee voter ballot")) >
        300)
        {

          //  return false;
        }}

      var vote_fight_now =
      (0,external_kolmafia_namespaceObject.totalTurnsPlayed)() % 11 == 1 &&
      (0,external_kolmafia_namespaceObject.toInt)((0,external_kolmafia_namespaceObject.getProperty)("lastVoteMonsterTurn")) < (0,external_kolmafia_namespaceObject.totalTurnsPlayed)();

      if (!vote_fight_now) {
        return false;
      } else if (freeFight) {
        this.addFreeFight("Vote Monster");
      }

      (0,external_kolmafia_namespaceObject.print)(
      "Someone is trying to take away my gun rights! I voted for those! Not today!",
      "gray");


      (0,external_kolmafia_namespaceObject.outfit)("Voter");
      var hp = (0,external_kolmafia_namespaceObject.myHp)();

      (0,external_kolmafia_namespaceObject.adv1)(external_kolmafia_namespaceObject.Location.get("The Electric Lemonade Acid Parade"), 1, "");

      if ((0,external_kolmafia_namespaceObject.myHp)() < 5 || hp - (0,external_kolmafia_namespaceObject.myHp)() > 200) {
        (0,external_kolmafia_namespaceObject.setProperty)(this.preferenceNag, "true");
      }

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

      var drum = external_kolmafia_namespaceObject.Item.get("Drum Machine");
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
    } }, { key: "isGovermentToday", value:

    function isGovermentToday() {
      var prop = (0,external_kolmafia_namespaceObject.getProperty)("votingMonsters");

      return (
        !prop.includes((0,external_kolmafia_namespaceObject.myDaycount)() + "|") &&
        prop.includes("government bureaucrat") && (
        !prop.includes("mutant") ||
        (0,external_kolmafia_namespaceObject.haveEffect)(external_kolmafia_namespaceObject.Effect.get("In Your Cups")) > 3000));

    } }, { key: "setGovermentToday", value:

    function setGovermentToday() {
      (0,external_kolmafia_namespaceObject.setProperty)(
      "votingMonsters",
      (0,external_kolmafia_namespaceObject.myDaycount)() +
      "|" +
      (0,external_kolmafia_namespaceObject.getProperty)("_voteMonster1") +
      "|" +
      (0,external_kolmafia_namespaceObject.getProperty)("_voteMonster2"));

    } }, { key: "voterSetup", value:

    function voterSetup() {
      (0,external_kolmafia_namespaceObject.print)("Oh god, I forgot I need to vote in the elections today", "blue");

      if ((0,external_kolmafia_namespaceObject.availableAmount)(external_kolmafia_namespaceObject.Item.get('"I Voted!" sticker')) > 0) {
        (0,external_kolmafia_namespaceObject.print)("Already voted for Trump.. Whew!", "gray");
        return;
      }

      if ((0,external_kolmafia_namespaceObject.itemAmount)(external_kolmafia_namespaceObject.Item.get("Absentee Voter Ballot")) == 0) {
        (0,external_kolmafia_namespaceObject.print)("Can't vote unfortunately..", "gray");
        return;
      }

      var voterValueTable = [
      {
        monster: external_kolmafia_namespaceObject.Monster.get("terrible mutant"),
        value: (0,external_kolmafia_namespaceObject.mallPrice)(external_kolmafia_namespaceObject.Item.get("glob of undifferentiated tissue")) + 10
      },
      {
        monster: external_kolmafia_namespaceObject.Monster.get("angry ghost"),
        value: (0,external_kolmafia_namespaceObject.mallPrice)(external_kolmafia_namespaceObject.Item.get("ghostly ectoplasm")) * 1.11
      },
      {
        monster: external_kolmafia_namespaceObject.Monster.get("government bureaucrat"),
        value:
        (0,external_kolmafia_namespaceObject.mallPrice)(external_kolmafia_namespaceObject.Item.get("absentee voter ballot")) * 0.05 + 75 * 0.25 + 50
      },
      {
        monster: external_kolmafia_namespaceObject.Monster.get("annoyed snake"),
        value: 25 * 0.5 + 25
      },
      {
        monster: external_kolmafia_namespaceObject.Monster.get("slime blob"),
        value: 20 * 0.4 + 50 * 0.2 + 250 * 0.01
      }];


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
      var tofu = external_kolmafia_namespaceObject.Item.get("Essential Tofu");
      var to_sell = (0,external_kolmafia_namespaceObject.itemAmount)(tofu) - 10;

      if (to_sell <= 0) {
        (0,external_kolmafia_namespaceObject.print)("Oh! I don't have any tofu to sell.. Nevermind then!", "gray");

        if ((0,external_kolmafia_namespaceObject.shopAmount)(tofu) > 0 && (0,external_kolmafia_namespaceObject.shopPrice)(tofu) != this.getShopPrice()) {
          (0,external_kolmafia_namespaceObject.repriceShop)(this.getShopPrice(), (0,external_kolmafia_namespaceObject.shopLimit)(tofu), tofu);
          (0,external_kolmafia_namespaceObject.print)(
          "Readjusted price of tofu in shop to " +
          this.getShopPrice() +
          " to discourage buyers",
          "gray");

        }

        return;
      }

      if (this.sellbotSendSome > 0) {
        var toSend = Math.min(to_sell, this.sellbotSendSome);

        (0,external_kolmafia_namespaceObject.print)("We want to send ".concat(
        toSend, " tofu to sellbot! We're handling the rest at low prices!"),
        "purple");


        (0,external_kolmafia_namespaceObject.cliExecute)("csend ".concat(toSend, " essential tofu to sellbot"));

        to_sell -= toSend;
      }

      var ourLimit = Math.max(
      1,
      Math.min(this.mallLimit, Math.floor(to_sell / this.dynMallLimit)));


      if (to_sell > 0) {
        if (this.sendToMallMulti) {
          (0,external_kolmafia_namespaceObject.print)(
          "Stocking " + this.mallMultiName + "! " + to_sell + " tofu to stock!",
          "purple");

          (0,external_kolmafia_namespaceObject.cliExecute)("csend ".concat(
          to_sell, " essential tofu to ").concat(this.mallMultiName, " || ").concat(ourLimit, "@").concat(this.pricePerTofu));

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
          (0,external_kolmafia_namespaceObject.putShop)(this.getShopPrice(), ourLimit, to_sell, tofu);
        }
      }

      if ((0,external_kolmafia_namespaceObject.shopLimit)(tofu) != ourLimit && (0,external_kolmafia_namespaceObject.shopAmount)(tofu) > 0) {
        (0,external_kolmafia_namespaceObject.print)(
        "Huh, the shop limit should be " +
        ourLimit +
        " but is " +
        (0,external_kolmafia_namespaceObject.shopLimit)(tofu) +
        "... Lets fix that!",
        "purple");

        (0,external_kolmafia_namespaceObject.putShop)(this.getShopPrice(), ourLimit, 0, tofu);
      }

      (0,external_kolmafia_namespaceObject.print)("Got rid of that tofu!", "gray");
    } }, { key: "getShopPrice", value:

    function getShopPrice() {
      var tofu = external_kolmafia_namespaceObject.Item.get("Essential Tofu");
      var amountIHave = (0,external_kolmafia_namespaceObject.shopAmount)(tofu) + (0,external_kolmafia_namespaceObject.itemAmount)(tofu);

      if (amountIHave < 800) {
        return this.pricePerTofu + 1;
      }

      return this.pricePerTofu;
    } }]);return Tofu;}();


function main() {
  new Tofu().startTofuing();
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;