"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateComparisonCheck = exports.StringComparisonCheck = void 0;
var CapturedId_1 = require("../CapturedId");
var StringComparisonCheck = /** @class */ (function () {
    function StringComparisonCheck() {
    }
    Object.defineProperty(StringComparisonCheck.prototype, "vizValue", {
        get: function () { return this.json.vizValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringComparisonCheck.prototype, "aamvaBarcodeValue", {
        get: function () { return this.json.aamvaBarcodeValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringComparisonCheck.prototype, "checkResult", {
        get: function () { return this.json.checkResult; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringComparisonCheck.prototype, "resultDescription", {
        get: function () { return this.json.resultDescription; },
        enumerable: false,
        configurable: true
    });
    StringComparisonCheck.fromJSON = function (json) {
        var result = new StringComparisonCheck();
        result.json = json;
        return result;
    };
    return StringComparisonCheck;
}());
exports.StringComparisonCheck = StringComparisonCheck;
var DateComparisonCheck = /** @class */ (function () {
    function DateComparisonCheck() {
    }
    Object.defineProperty(DateComparisonCheck.prototype, "vizValue", {
        get: function () {
            return CapturedId_1.DateResult.fromJSON(this.json.vizValue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateComparisonCheck.prototype, "aamvaBarcodeValue", {
        get: function () {
            return CapturedId_1.DateResult.fromJSON(this.json.aamvaBarcodeValue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateComparisonCheck.prototype, "checkResult", {
        get: function () { return this.json.checkResult; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateComparisonCheck.prototype, "resultDescription", {
        get: function () { return this.json.resultDescription; },
        enumerable: false,
        configurable: true
    });
    DateComparisonCheck.fromJSON = function (json) {
        var result = new DateComparisonCheck();
        result.json = json;
        return result;
    };
    return DateComparisonCheck;
}());
exports.DateComparisonCheck = DateComparisonCheck;
//# sourceMappingURL=PrivateCapturedId.js.map