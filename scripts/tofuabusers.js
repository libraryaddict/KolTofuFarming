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
;// CONCATENATED MODULE: ./src/TofuAbusers.ts
function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return typeof key === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (typeof input !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (typeof res !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}var

StorePurchase = /*#__PURE__*/_createClass(function StorePurchase() {_classCallCheck(this, StorePurchase);_defineProperty(this, "date", void 0);_defineProperty(this, "user", void 0);_defineProperty(this, "amount", void 0);_defineProperty(this, "meat", void 0);_defineProperty(this, "item", void 0);});var







WarningType = /*#__PURE__*/function (WarningType) {WarningType[WarningType["NONE"] = 0] = "NONE";WarningType[WarningType["KMAIL"] = 1] = "KMAIL";WarningType[WarningType["FINAL_KMAIL"] = 2] = "FINAL_KMAIL";WarningType[WarningType["IGNORED"] = 3] = "IGNORED";return WarningType;}(WarningType || {});var






TofuWarning = /*#__PURE__*/_createClass(





function TofuWarning(jsonObject) {_classCallCheck(this, TofuWarning);_defineProperty(this, "lastWarned", Date.now());_defineProperty(this, "tofu", void 0);_defineProperty(this, "user", void 0);_defineProperty(this, "status", WarningType.NONE);
  if (jsonObject == null) {
    return;
  }

  this.tofu = jsonObject.tofu;
  this.lastWarned = jsonObject.lastWarned;
  this.user = jsonObject.user;
  this.status = jsonObject.status;
});var


ContactList = /*#__PURE__*/function () {function ContactList() {_classCallCheck(this, ContactList);_defineProperty(this, "ignored", void 0);_defineProperty(this, "contacts", void 0);}_createClass(ContactList, [{ key: "load", value:



    function load() {
      var page = this.getPage();

      this.ignored = this.getIgnored(page);
      this.contacts = this.getContacts(page);
    } }, { key: "ignoreUser", value:

    function ignoreUser(userId) {
      if (this.isIgnored(userId)) {
        (0,external_kolmafia_namespaceObject.print)("Already ignored " + userId);
        return;
      }

      // chatPrivate(myName(), "/baleet " + userId);
      (0,external_kolmafia_namespaceObject.print)("Ignored => " + userId);
      this.ignored.push([userId, ""]);
    } }, { key: "isIgnored", value:

    function isIgnored(userId) {
      return this.ignored.find((v) => v[0] == userId) != null;
    } }, { key: "getPage", value:

    function getPage() {
      return (0,external_kolmafia_namespaceObject.visitUrl)("account_contactlist.php");
    } }, { key: "getIgnored", value:

    function getIgnored() {var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getPage();
      page = page.substring(page.indexOf("<b>Ignore List</b>"));

      return this.getPlayers(page);
    } }, { key: "getContacts", value:

    function getContacts() {var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getPage();
      page = page.substring(0, page.lastIndexOf("<b>Ignore List</b>"));
      (0,external_kolmafia_namespaceObject.bufferToFile)(page.toString(), "test.html");

      return this.getPlayers(page);
    } }, { key: "getPlayers", value:

    function getPlayers(page) {
      var spl = page.split("type=checkbox name=pids");

      var users = [];var _iterator = _createForOfIteratorHelper(

        spl),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var s = _step.value;
          var match = s.match(
          /href=(?:'|")showplayer.php\?who=(\d+)(?:'|") class=nounder><b>([a-zA-Z0-9 ]+)</
          );

          if (match == null) {
            continue;
          }

          users.push([+match[1], match[1]]);
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      return users;
    } }]);return ContactList;}();var


TofuPurchase = /*#__PURE__*/_createClass(function TofuPurchase() {_classCallCheck(this, TofuPurchase);_defineProperty(this, "userId", void 0);_defineProperty(this, "user", void 0);_defineProperty(this, "purchased", void 0);_defineProperty(this, "ascensions", void 0);_defineProperty(this, "lastPurchase", void 0);});var







TofuAbusers = /*#__PURE__*/function () {






  function TofuAbusers() {_classCallCheck(this, TofuAbusers);_defineProperty(this, "warnings", []);_defineProperty(this, "contacts", new ContactList());_defineProperty(this, "maxTofuPerDay", 1.5); // Ascensions count as another day. This should realistically be 1, but we know people love buying stuff
    _defineProperty(this, "timeBetweenWarnings", 3); // Days
    _defineProperty(this, "tofuIgnore", "tofuWhitelistAbuse");this.contacts.load();this.loadWarnings();
  }_createClass(TofuAbusers, [{ key: "getIgnored", value:

    function getIgnored() {
      if ((0,external_kolmafia_namespaceObject.getProperty)(this.tofuIgnore) == "") {
        return [];
      }

      return (0,external_kolmafia_namespaceObject.getProperty)(this.tofuIgnore).split(",");
    } }, { key: "setIgnored", value:

    function setIgnored(playerId) {
      var ignored = this.getIgnored();

      if (this.getIgnored().includes(playerId)) {
        return;
      }

      ignored.push(playerId);

      (0,external_kolmafia_namespaceObject.setProperty)(this.tofuIgnore, ignored.join(","));
    } }, { key: "isIgnored", value:

    function isIgnored(playerId) {
      return this.getIgnored().includes(playerId);
    } }, { key: "loadWarnings", value:

    function loadWarnings() {
      var string = (0,external_kolmafia_namespaceObject.fileToBuffer)("tofu_warnings.json");

      if (string == null || string.length == 0) {
        return;
      }

      var obj = JSON.parse(string);var _iterator2 = _createForOfIteratorHelper(

        obj),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var array = _step2.value;
          this.warnings.push(new TofuWarning(array));
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}
    } }, { key: "saveWarnings", value:

    function saveWarnings() {
      (0,external_kolmafia_namespaceObject.bufferToFile)(JSON.stringify(this.warnings), "tofu_warnings.json");
    } }, { key: "handleWarning", value:

    function handleWarning(purchase) {
      var user = purchase.user;

      var warning = this.warnings.find(
      (w) => w.user.toLowerCase() == user.toLowerCase()
      );

      var day = 24 * 60 * 60 * 1000;

      if (warning == null) {
        warning = new TofuWarning();
        warning.user = user;
        warning.tofu = purchase.purchased;

        this.warnings.push(warning);
      } else {
        if (warning.status >= WarningType.IGNORED) {
          var ignored = this.contacts.isIgnored(purchase.userId);

          (0,external_kolmafia_namespaceObject.print)("".concat(
          purchase.user, " should be ignored as per logs! How are they doing this! Skipping.. Are they actually ignored though: ").concat(ignored),
          "red"
          );
          return;
        }

        var daysPassed = (Date.now() - warning.lastWarned) / day;

        if (daysPassed > 14) {
          // Reset the tofu purchased if its been more than 2 weeks since last warning
          warning.lastWarned = Date.now();
          warning.tofu = purchase.purchased;
          warning.status = WarningType.NONE;

          (0,external_kolmafia_namespaceObject.print)(
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

      var newStatus = WarningType[WarningType[warning.status + 1]];

      warning.status = newStatus;

      switch (warning.status) {
        case WarningType.KMAIL:
          (0,external_kolmafia_namespaceObject.print)("".concat(purchase.user, " is a first time offender, sent a kmail."));
          this.sendKmail(purchase.userId, this.getKmail(user));
          break;
        case WarningType.FINAL_KMAIL:
          (0,external_kolmafia_namespaceObject.print)("".concat(
          purchase.user, " is a second time offender. Sent a another kmail.")
          );
          this.sendKmail(purchase.userId, this.getFinalKmail(user));
          break;
        case WarningType.IGNORED:
          (0,external_kolmafia_namespaceObject.print)("".concat(purchase.user, " ignored both kmails, now baleeting."));
          this.contacts.ignoreUser(purchase.userId);
          break;
        default:{
            (0,external_kolmafia_namespaceObject.print)(
            "Unable to handle warning " + warning.status + " on " + warning.user
            );
          }
      }

      this.saveWarnings();
    } }, { key: "getPurchases", value:

    function getPurchases() {
      var purchases = [];var _iterator3 = _createForOfIteratorHelper(

        (0,external_kolmafia_namespaceObject.getShopLog)()),_step3;try {var _loop = function _loop() {var line = _step3.value;
          var getParsedResult = function getParsedResult(regex) {
            return line.match(regex)[1];
          };

          var meat = getParsedResult(/ for (\d+) Meat/);
          var amount = getParsedResult(/ bought (\d+) \(/);
          var i = getParsedResult(/ bought \d+ \((.*)\) for \d+ Meat./);
          var name = getParsedResult(/:\d+ (.*) bought \d+ /);
          var dateString = getParsedResult(/(\d+\/\d+\/\d+ \d+:\d+:\d+) /).split(
          " "
          );

          var date1 = dateString[0].split("/");
          date1[2] = "20" + date1[2];

          var date = Date.parse(date1.join("/") + " " + dateString[1]);

          var purchase = new StorePurchase();
          purchase.amount = +amount;
          purchase.date = date;
          purchase.item = (0,external_kolmafia_namespaceObject.toItem)(i);
          purchase.user = name;
          purchase.meat = +meat;

          purchases.push(purchase);
        };for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {_loop();}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

      return purchases;
    } }, { key: "getPlayerId", value:

    function getPlayerId(name) {
      var buffer = (0,external_kolmafia_namespaceObject.fileToBuffer)("player_names.txt").split("\n");var _iterator4 = _createForOfIteratorHelper(

        buffer),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var line = _step4.value;
          var spl = line.split("\t");

          if (spl[0].toLowerCase() != name.toLowerCase()) {
            continue;
          }

          return +spl[1];
        }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}

      var id = (0,external_kolmafia_namespaceObject.getPlayerId)(name);

      if (!id.match(/[0-9]+/)) {
        throw "Can't find the player '" + name + "'";
      }

      buffer.push(name + "\t" + id);

      (0,external_kolmafia_namespaceObject.bufferToFile)(buffer.join("\n").toString(), "player_names.txt");

      return +id;
    } }, { key: "getAscensions", value:

    function getAscensions(id) {
      var ascensions = [];

      var buffer = (0,external_kolmafia_namespaceObject.visitUrl)("ascensionhistory.php?who=" + id);var _iterator5 = _createForOfIteratorHelper(

        buffer.split("</tr>")),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var s = _step5.value;
          var match = s.match(/valign=center>(\d+\/\d+\/\d+)&nbsp;/);

          if (match == null) {
            continue;
          }

          var dateString = match[1].split("/");
          dateString[2] = "20" + dateString[2];
          var string = dateString.join("/");

          ascensions.push(Date.parse(string));
        }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}

      return ascensions;
    }

    /**
     * Returns [playerId, playerName, surplusTofu]
     */ }, { key: "getBaddies", value:
    function getBaddies() {var _this = this;
      var day = 24 * 60 * 60 * 1000;
      var daysAbuse = 3;
      var cutoffAscensionDate = Date.now() - day * 15;
      var cutOffStillAbusingDate = Date.now() - day * daysAbuse;
      var processedUsers = [];
      var toHandle = [];
      var tofuCouldveConsumed = 14 * this.maxTofuPerDay;

      var allPurchases = this.getPurchases().filter(
      (p) => p.item == external_kolmafia_namespaceObject.Item.get("Essential Tofu")
      );

      //let purchases = allPurchases.filter((p) => p.amount == 3);

      var moreProcessing = [];var _iterator6 = _createForOfIteratorHelper(

        allPurchases),_step6;try {var _loop3 = function _loop3() {var purchase = _step6.value;
          if (processedUsers.includes(purchase.user)) {return "continue";

          }

          processedUsers.push(purchase.user);

          var recentCount = allPurchases.
          filter(
          (p) => p.user == purchase.user && p.date >= cutOffStillAbusingDate
          ).
          reduce((v, p) => v + p.amount, 0);

          // If they're not doing abusive limits in the last few days, they're probably good.
          if (recentCount < _this.maxTofuPerDay * daysAbuse) {

            //continue;
          }
          var count = allPurchases.
          filter((p) => p.user == purchase.user).
          reduce((v, p) => v + p.amount, 0);

          if (count < tofuCouldveConsumed) {return "continue";

          }

          var playerId = _this.getPlayerId(purchase.user);

          if (_this.isIgnored(playerId.toString())) {return "continue";

          }

          var player = new TofuPurchase();
          player.user = purchase.user;
          player.userId = playerId;
          player.lastPurchase = purchase.date;
          player.purchased = count;

          if (!_this.isWorthWarning(player)) {return "continue";

          }

          moreProcessing.push(player);
        };for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var _ret2 = _loop3();if (_ret2 === "continue") continue;}} catch (err) {_iterator6.e(err);} finally {_iterator6.f();}

      (0,external_kolmafia_namespaceObject.print)(moreProcessing.length + " customers need further processing..");

      var lastPrinted = Date.now();
      var timeBetween = 3000;
      var processed = 0;var _loop2 = function _loop2()

      {var player = _moreProcessing[_i];
        processed++;

        if (lastPrinted + timeBetween < Date.now()) {
          lastPrinted = Date.now();
          (0,external_kolmafia_namespaceObject.print)("Processing customer ".concat(processed, "/").concat(moreProcessing.length));
        }

        var playerId = player.userId;
        var ascendData = _this.getAscensions(playerId);
        var lastMonthAscensions = ascendData.filter(
        (a) => a > Date.now() - day * 31
        ).length;

        if (lastMonthAscensions > 31) {
          (0,external_kolmafia_namespaceObject.print)(
          "Now adding " +
          player.user +
          " (#" +
          playerId +
          ") to tofu whitelist. They'd ascended in the last month " +
          lastMonthAscensions +
          " times",
          "blue"
          );
          _this.setIgnored(playerId.toString());return "continue";

        }

        var ascensions = ascendData.filter((a) => a > cutoffAscensionDate).length;
        player.ascensions = ascensions;

        var tofuCouldConsume =
        tofuCouldveConsumed + ascensions * _this.maxTofuPerDay;

        // With the added ascensions, is it now acceptable?
        if (player.purchased < tofuCouldConsume) {

          //  continue;
        }
        var recentCount = allPurchases.
        filter(
        (p) => p.user == player.user && p.date >= cutOffStillAbusingDate
        ).
        reduce((v, p) => v + p.amount, 0);

        // If they're not doing abusive limits in the last few days, they're probably good.
        if (recentCount < _this.maxTofuPerDay * (daysAbuse + ascensions)) {

          //  continue;
        }
        toHandle.push(player);
      };for (var _i = 0, _moreProcessing = moreProcessing; _i < _moreProcessing.length; _i++) {var _ret = _loop2();if (_ret === "continue") continue;}

      return toHandle;
    } }, { key: "isWorthWarning", value:

    function isWorthWarning(purchase) {
      var warning = this.warnings.find(
      (p) => p.user.toLowerCase() == purchase.user.toLowerCase()
      );

      if (warning == null || true) {
        return true;
      }

      var day = 1000 * 60 * 60 * 24;
      var daysSince = (Date.now() - purchase.lastPurchase) / day;

      // If they haven't purchased anything in the last day or so
      if (daysSince > 2) {
        return false;
      }

      var tofuAllowed = (daysSince + 1) * this.maxTofuPerDay;

      var cutoff = Date.now() - day * this.timeBetweenWarnings;

      // If it's been too soon since the last warning
      if (warning.lastWarned > cutoff) {
        return false;
      }

      return true;
    } }, { key: "processBaddies", value:

    function processBaddies() {var _iterator7 = _createForOfIteratorHelper(
        this.getBaddies()),_step7;try {for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {var purchase = _step7.value;
          var maxUses = this.maxTofuPerDay * (purchase.ascensions + 14);
          var wentOverBy = purchase.purchased - maxUses;

          if (wentOverBy < -6) {
            continue;
          }

          (0,external_kolmafia_namespaceObject.print)("".concat(
          purchase.user, ". Ascensions: ").concat(purchase.ascensions, ", Brought: ").concat(
          purchase.purchased, ", Eaten: ").concat(

          purchase.ascensions + 14, ", Allowed to buy: ").concat(
          maxUses, ", Went over by: ").concat(
          purchase.purchased - maxUses, "."),

          "blue"
          );

          if (!this.isWorthWarning(purchase)) {
            (0,external_kolmafia_namespaceObject.print)("Not worth warning em though");
            continue;
          }

          //  this.handleWarning(purchase);
        }} catch (err) {_iterator7.e(err);} finally {_iterator7.f();}

      (0,external_kolmafia_namespaceObject.print)("All purchases has been processed. Script finished.");
    } }, { key: "sendKmail", value:

    function sendKmail(userId, message) {










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
    } }, { key: "getKmail", value: function getKmail(name) {return "Hi ".concat(name, ", this is in regards to your Essential Tofu purchases.\n\n            Please don't take this personally, but I can't support the amount of Essential Tofu that is being purchased. \n\n            People are buying more than they need, this is creating supply and demand issues.\n\n            As such, I'm requesting that you only buy what you need. I don't want to be forced to ignore people. It doesn't really matter if you're giving it away either, they can buy their own tofu.\n\n            If you are doing this to build up your Display Case collection or your incase the bots stop working stock. Then can I suggest you buy some of the no limits Essential Tofu?\n\n            If you do not want to receive further kmails, feel free to baleet me.\n            \n            Thank you for your understanding and consideration. This is an automated message.");





    } }, { key: "getFinalKmail", value:

    function getFinalKmail(name) {
      return "Hi ".concat(name, ", as per my previous kmail. I'm begging you to stop buying more Essential Tofu than you need. I don't want to baleet you. I can't keep up with demand.");
    } }]);return TofuAbusers;}();


function main() {
  new TofuAbusers().processBaddies();
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;