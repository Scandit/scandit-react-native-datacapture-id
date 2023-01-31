"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonCapturedIdFields = exports.DateComparisonCheck = exports.StringComparisonCheck = void 0;
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
var CommonCapturedIdFields = /** @class */ (function () {
    function CommonCapturedIdFields() {
    }
    Object.defineProperty(CommonCapturedIdFields.prototype, "firstName", {
        get: function () { return this.json.firstName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonCapturedIdFields.prototype, "lastName", {
        get: function () { return this.json.lastName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonCapturedIdFields.prototype, "fullName", {
        get: function () { return this.json.fullName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonCapturedIdFields.prototype, "sex", {
        get: function () { return this.json.sex; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonCapturedIdFields.prototype, "dateOfBirth", {
        get: function () {
            return CapturedId_1.DateResult.fromJSON(this.json.dateOfBirth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonCapturedIdFields.prototype, "nationality", {
        get: function () { return this.json.nationality; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonCapturedIdFields.prototype, "address", {
        get: function () { return this.json.address; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonCapturedIdFields.prototype, "documentType", {
        get: function () { return this.json.documentType; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonCapturedIdFields.prototype, "documentNumber", {
        get: function () { return this.json.documentNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonCapturedIdFields.prototype, "issuingCountry", {
        get: function () { return this.json.issuingCountry; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonCapturedIdFields.prototype, "issuingCountryIso", {
        get: function () { return this.json.issuingCountryIso; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonCapturedIdFields.prototype, "dateOfExpiry", {
        get: function () {
            return CapturedId_1.DateResult.fromJSON(this.json.dateOfExpiry);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonCapturedIdFields.prototype, "dateOfIssue", {
        get: function () {
            return CapturedId_1.DateResult.fromJSON(this.json.dateOfIssue);
        },
        enumerable: false,
        configurable: true
    });
    CommonCapturedIdFields.fromJSON = function (json) {
        if (json === null) {
            return null;
        }
        var object = new CommonCapturedIdFields();
        object.json = json;
        return object;
    };
    return CommonCapturedIdFields;
}());
exports.CommonCapturedIdFields = CommonCapturedIdFields;
//# sourceMappingURL=PrivateCapturedId.js.map