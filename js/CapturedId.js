"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AamvaBarcodeVerifier = exports.AamvaBarcodeVerificationResult = exports.AamvaVizBarcodeComparisonVerifier = exports.AamvaVizBarcodeComparisonResult = exports.RejectedId = exports.LocalizedOnlyId = exports.ApecBusinessTravelCardMrzResult = exports.ChinaOneWayPermitFrontMrzResult = exports.ChinaOneWayPermitBackMrzResult = exports.ChinaExitEntryPermitMRZResult = exports.ChinaMainlandTravelPermitMRZResult = exports.SouthAfricaDlBarcodeResult = exports.SouthAfricaIdBarcodeResult = exports.ColombiaDlBarcodeResult = exports.ColombiaIdBarcodeResult = exports.ArgentinaIdBarcodeResult = exports.VIZResult = exports.USUniformedServicesBarcodeResult = exports.MRZResult = exports.AAMVABarcodeResult = exports.CapturedId = exports.VehicleRestriction = exports.ProfessionalDrivingPermit = exports.DateResult = void 0;
var PrivateCapturedId_1 = require("./private/PrivateCapturedId");
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var IdCaptureProxy_1 = require("./native/IdCaptureProxy");
var DateResult = /** @class */ (function () {
    function DateResult() {
    }
    Object.defineProperty(DateResult.prototype, "day", {
        get: function () { return this.json.day; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateResult.prototype, "month", {
        get: function () { return this.json.month; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateResult.prototype, "year", {
        get: function () { return this.json.year; },
        enumerable: false,
        configurable: true
    });
    DateResult.fromJSON = function (json) {
        if (json === null) {
            return null;
        }
        var dateResult = new DateResult();
        dateResult.json = json;
        return dateResult;
    };
    return DateResult;
}());
exports.DateResult = DateResult;
var ProfessionalDrivingPermit = /** @class */ (function () {
    function ProfessionalDrivingPermit() {
    }
    Object.defineProperty(ProfessionalDrivingPermit.prototype, "dateOfExpiry", {
        get: function () { return DateResult.fromJSON(this.json.dateOfExpiry); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProfessionalDrivingPermit.prototype, "codes", {
        get: function () { return this.json.codes; },
        enumerable: false,
        configurable: true
    });
    ProfessionalDrivingPermit.fromJSON = function (json) {
        if (json === null) {
            return null;
        }
        var object = new ProfessionalDrivingPermit();
        object.json = json;
        return object;
    };
    return ProfessionalDrivingPermit;
}());
exports.ProfessionalDrivingPermit = ProfessionalDrivingPermit;
var VehicleRestriction = /** @class */ (function () {
    function VehicleRestriction() {
    }
    Object.defineProperty(VehicleRestriction.prototype, "vehicleCode", {
        get: function () { return this.json.vehicleCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleRestriction.prototype, "vehicleRestriction", {
        get: function () { return this.json.vehicleRestriction; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleRestriction.prototype, "dateOfIssue", {
        get: function () { return DateResult.fromJSON(this.json.dateOfIssue); },
        enumerable: false,
        configurable: true
    });
    VehicleRestriction.fromJSON = function (json) {
        if (json === null) {
            return null;
        }
        var object = new VehicleRestriction();
        object.json = json;
        return object;
    };
    return VehicleRestriction;
}());
exports.VehicleRestriction = VehicleRestriction;
var CapturedId = /** @class */ (function () {
    function CapturedId() {
    }
    Object.defineProperty(CapturedId.prototype, "firstName", {
        get: function () { return this.commonCapturedFields.firstName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "lastName", {
        get: function () { return this.commonCapturedFields.lastName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "fullName", {
        get: function () { return this.commonCapturedFields.fullName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "sex", {
        get: function () { return this.commonCapturedFields.sex; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "dateOfBirth", {
        get: function () {
            return DateResult.fromJSON(this.commonCapturedFields.dateOfBirth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "age", {
        get: function () { return this.json.age; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "isExpired", {
        get: function () { return this.json.isExpired; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "nationality", {
        get: function () { return this.commonCapturedFields.nationality; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "address", {
        get: function () { return this.commonCapturedFields.address; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "capturedResultType", {
        get: function () { return this.json.capturedResultType; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "capturedResultTypes", {
        get: function () {
            return this.json.capturedResultTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "documentType", {
        get: function () { return this.commonCapturedFields.documentType; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "issuingCountryIso", {
        get: function () { return this.commonCapturedFields.issuingCountryIso; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "issuingCountry", {
        get: function () { return this.commonCapturedFields.issuingCountry; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "documentNumber", {
        get: function () { return this.commonCapturedFields.documentNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "dateOfExpiry", {
        get: function () {
            return DateResult.fromJSON(this.commonCapturedFields.dateOfExpiry);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "dateOfIssue", {
        get: function () {
            return DateResult.fromJSON(this.commonCapturedFields.dateOfIssue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "aamvaBarcodeResult", {
        get: function () {
            if (this._aamvaBarcodeResult == null && this.json.aamvaBarcodeResult != null) {
                this._aamvaBarcodeResult = AAMVABarcodeResult.
                    fromJSON(this.json.aamvaBarcodeResult);
            }
            return this._aamvaBarcodeResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "argentinaIdBarcodeResult", {
        get: function () {
            if (this._argentinaIdBarcodeResult == null && this.json.argentinaIdBarcodeResult != null) {
                this._argentinaIdBarcodeResult = ArgentinaIdBarcodeResult.
                    fromJSON(this.json.argentinaIdBarcodeResult);
            }
            return this._argentinaIdBarcodeResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "colombiaIdBarcodeResult", {
        get: function () {
            if (this._colombiaIdBarcodeResult == null && this.json.colombiaIdBarcodeResult != null) {
                this._colombiaIdBarcodeResult = ColombiaIdBarcodeResult.
                    fromJSON(this.json.colombiaIdBarcodeResult);
            }
            return this._colombiaIdBarcodeResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "colombiaDlBarcodeResult", {
        get: function () {
            if (this._colombiaDlBarcodeResult == null && this.json.colombiaDlBarcodeResult != null) {
                this._colombiaDlBarcodeResult = ColombiaDlBarcodeResult.
                    fromJSON(this.json.colombiaDlBarcodeResult);
            }
            return this._colombiaDlBarcodeResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "mrzResult", {
        get: function () {
            if (this._mrzResult == null && this.json.mrzResult != null) {
                this._mrzResult = MRZResult.fromJSON(this.json.mrzResult);
            }
            return this._mrzResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "southAfricaIdBarcodeResult", {
        get: function () {
            if (this._southAfricaIdBarcodeResult == null && this.json.southAfricaIdBarcodeResult != null) {
                this._southAfricaIdBarcodeResult = SouthAfricaIdBarcodeResult.
                    fromJSON(this.json.southAfricaIdBarcodeResult);
            }
            return this._southAfricaIdBarcodeResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "southAfricaDlBarcodeResult", {
        get: function () {
            if (this._southAfricaDlBarcodeResult == null && this.json.southAfricaDlBarcodeResult != null) {
                this._southAfricaDlBarcodeResult = SouthAfricaDlBarcodeResult.
                    fromJSON(this.json.southAfricaDlBarcodeResult);
            }
            return this._southAfricaDlBarcodeResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "usUniformedServicesBarcodeResult", {
        get: function () {
            if (this._usUniformedServicesBarcodeResult == null && this.json.usUniformedServicesBarcodeResult != null) {
                var fromJSON = USUniformedServicesBarcodeResult.fromJSON;
                this._usUniformedServicesBarcodeResult = fromJSON(this.json.usUniformedServicesBarcodeResult);
            }
            return this._usUniformedServicesBarcodeResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "vizResult", {
        get: function () {
            if (this._vizResult == null && this.json.vizResult != null) {
                this._vizResult = VIZResult.fromJSON(this.json.vizResult);
            }
            return this._vizResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "chinaMainlandTravelPermitMRZResult", {
        get: function () {
            if (this._chinaMainlandTravelPermitMRZResult == null && this.json.chinaMainlandTravelPermitMrzResult != null) {
                this._chinaMainlandTravelPermitMRZResult =
                    ChinaMainlandTravelPermitMRZResult
                        .fromJSON(this.json.chinaMainlandTravelPermitMrzResult);
            }
            return this._chinaMainlandTravelPermitMRZResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "chinaExitEntryPermitMRZResult", {
        get: function () {
            if (this._chinaExitEntryPermitMRZResult == null && this.json.chinaExitEntryPermitMrzResult != null) {
                this._chinaExitEntryPermitMRZResult =
                    ChinaExitEntryPermitMRZResult
                        .fromJSON(this.json.chinaExitEntryPermitMrzResult);
            }
            return this._chinaExitEntryPermitMRZResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "chinaOneWayPermitBackMrzResult", {
        get: function () {
            if (this._chinaOneWayPermitBackMrzResult == null && this.json.chinaOneWayPermitBackMrzResult != null) {
                this._chinaOneWayPermitBackMrzResult =
                    ChinaOneWayPermitBackMrzResult
                        .fromJSON(this.json.chinaOneWayPermitBackMrzResult);
            }
            return this._chinaOneWayPermitBackMrzResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "chinaOneWayPermitFrontMrzResult", {
        get: function () {
            if (this._chinaOneWayPermitFrontMrzResult == null && this.json.chinaOneWayPermitFrontMrzResult != null) {
                this._chinaOneWayPermitFrontMrzResult =
                    ChinaOneWayPermitFrontMrzResult
                        .fromJSON(this.json.chinaOneWayPermitFrontMrzResult);
            }
            return this._chinaOneWayPermitFrontMrzResult;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "apecBusinessTravelCardMrzResult", {
        get: function () {
            if (this._apecBusinessTravelCardMrzResult == null && this.json.apecBusinessTravelCardMrzResult != null) {
                this._apecBusinessTravelCardMrzResult =
                    ApecBusinessTravelCardMrzResult
                        .fromJSON(this.json.apecBusinessTravelCardMrzResult);
            }
            return this._apecBusinessTravelCardMrzResult;
        },
        enumerable: false,
        configurable: true
    });
    CapturedId.fromJSON = function (json) {
        var result = new CapturedId();
        result.json = json;
        if (json.aamvaBarcodeResult) {
            result.commonCapturedFields = PrivateCapturedId_1.CommonCapturedIdFields.fromJSON(json.aamvaBarcodeResult);
        }
        if (json.argentinaIdBarcodeResult) {
            result.commonCapturedFields = PrivateCapturedId_1.CommonCapturedIdFields.fromJSON(json.argentinaIdBarcodeResult);
        }
        if (json.colombiaIdBarcodeResult) {
            result.commonCapturedFields = PrivateCapturedId_1.CommonCapturedIdFields.fromJSON(json.colombiaIdBarcodeResult);
        }
        if (json.colombiaDlBarcodeResult) {
            result.commonCapturedFields = PrivateCapturedId_1.CommonCapturedIdFields.fromJSON(json.colombiaDlBarcodeResult);
        }
        if (json.mrzResult) {
            result.commonCapturedFields = PrivateCapturedId_1.CommonCapturedIdFields.fromJSON(json.mrzResult);
        }
        if (json.southAfricaIdBarcodeResult) {
            result.commonCapturedFields = PrivateCapturedId_1.CommonCapturedIdFields.fromJSON(json.southAfricaIdBarcodeResult);
        }
        if (json.southAfricaDlBarcodeResult) {
            result.commonCapturedFields = PrivateCapturedId_1.CommonCapturedIdFields.fromJSON(json.southAfricaDlBarcodeResult);
        }
        if (json.usUniformedServicesBarcodeResult) {
            result.commonCapturedFields = PrivateCapturedId_1.CommonCapturedIdFields.fromJSON(json.usUniformedServicesBarcodeResult);
        }
        if (json.vizResult) {
            result.commonCapturedFields = PrivateCapturedId_1.CommonCapturedIdFields.fromJSON(json.vizResult);
        }
        if (json.chinaMainlandTravelPermitMrzResult) {
            result.commonCapturedFields = PrivateCapturedId_1.CommonCapturedIdFields.fromJSON(json.chinaMainlandTravelPermitMrzResult);
        }
        if (json.chinaExitEntryPermitMrzResult) {
            result.commonCapturedFields = PrivateCapturedId_1.CommonCapturedIdFields.fromJSON(json.chinaExitEntryPermitMrzResult);
        }
        if (json.chinaOneWayPermitBackMrzResult) {
            result.commonCapturedFields = PrivateCapturedId_1.CommonCapturedIdFields.fromJSON(json.chinaOneWayPermitBackMrzResult);
        }
        if (json.chinaOneWayPermitFrontMrzResult) {
            result.commonCapturedFields = PrivateCapturedId_1.CommonCapturedIdFields.fromJSON(json.chinaOneWayPermitFrontMrzResult);
        }
        if (json.apecBusinessTravelCardMrzResult) {
            result.commonCapturedFields = PrivateCapturedId_1.CommonCapturedIdFields.fromJSON(json.apecBusinessTravelCardMrzResult);
        }
        return result;
    };
    CapturedId.prototype.idImageOfType = function (type) {
        if (this.json.imageInfo === null) {
            return null;
        }
        return this.json.imageInfo[type];
    };
    return CapturedId;
}());
exports.CapturedId = CapturedId;
var AAMVABarcodeResult = /** @class */ (function () {
    function AAMVABarcodeResult() {
    }
    Object.defineProperty(AAMVABarcodeResult.prototype, "aamvaVersion", {
        get: function () { return this.json.aamvaVersion; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "aliasFamilyName", {
        get: function () { return this.json.aliasFamilyName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "aliasGivenName", {
        get: function () { return this.json.aliasGivenName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "aliasSuffixName", {
        get: function () { return this.json.aliasSuffixName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "isRealId", {
        get: function () { return this.json.isRealId; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "driverNamePrefix", {
        get: function () { return this.json.driverNamePrefix; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "driverNameSuffix", {
        get: function () { return this.json.driverNameSuffix; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "endorsementsCode", {
        get: function () { return this.json.endorsementsCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "eyeColor", {
        get: function () { return this.json.eyeColor; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "firstNameTruncation", {
        get: function () { return this.json.firstNameTruncation; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "hairColor", {
        get: function () { return this.json.hairColor; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "heightCm", {
        get: function () { return this.json.heightCm; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "heightInch", {
        get: function () { return this.json.heightInch; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "iIN", {
        get: function () { return this.json.iin; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "issuingJurisdiction", {
        get: function () { return this.json.issuingJurisdiction; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "issuingJurisdictionIso", {
        get: function () { return this.json.issuingJurisdictionIso; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "jurisdictionVersion", {
        get: function () { return this.json.jurisdictionVersion; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "lastNameTruncation", {
        get: function () { return this.json.lastNameTruncation; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "middleName", {
        get: function () { return this.json.middleName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "middleNameTruncation", {
        get: function () { return this.json.middleNameTruncation; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "placeOfBirth", {
        get: function () { return this.json.placeOfBirth; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "race", {
        get: function () { return this.json.race; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "restrictionsCode", {
        get: function () { return this.json.restrictionsCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "vehicleClass", {
        get: function () { return this.json.vehicleClass; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "weightKg", {
        get: function () { return this.json.weightKg; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "weightLbs", {
        get: function () { return this.json.weightLbs; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "cardRevisionDate", {
        get: function () {
            return DateResult.fromJSON(this.json.cardRevisionDate);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "documentDiscriminatorNumber", {
        get: function () { return this.json.documentDiscriminatorNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AAMVABarcodeResult.prototype, "barcodeDataElements", {
        get: function () { return this.json.dictionary; },
        enumerable: false,
        configurable: true
    });
    AAMVABarcodeResult.fromJSON = function (json) {
        var result = new AAMVABarcodeResult();
        result.json = json;
        return result;
    };
    return AAMVABarcodeResult;
}());
exports.AAMVABarcodeResult = AAMVABarcodeResult;
var MRZResult = /** @class */ (function () {
    function MRZResult() {
    }
    Object.defineProperty(MRZResult.prototype, "documentCode", {
        get: function () { return this.json.documentCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MRZResult.prototype, "namesAreTruncated", {
        get: function () { return this.json.namesAreTruncated; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MRZResult.prototype, "optional", {
        get: function () { return this.json.optional; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MRZResult.prototype, "optional1", {
        get: function () { return this.json.optional1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MRZResult.prototype, "capturedMrz", {
        get: function () { return this.json.capturedMrz; },
        enumerable: false,
        configurable: true
    });
    MRZResult.fromJSON = function (json) {
        var result = new MRZResult();
        result.json = json;
        return result;
    };
    return MRZResult;
}());
exports.MRZResult = MRZResult;
var USUniformedServicesBarcodeResult = /** @class */ (function () {
    function USUniformedServicesBarcodeResult() {
    }
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "bloodType", {
        get: function () { return this.json.bloodType; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "branchOfService", {
        get: function () { return this.json.branchOfService; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "champusEffectiveDate", {
        get: function () {
            return DateResult.fromJSON(this.json.champusEffectiveDate);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "champusExpiryDate", {
        get: function () {
            return DateResult.fromJSON(this.json.champusExpiryDate);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "civilianHealthCareFlagCode", {
        get: function () { return this.json.civilianHealthCareFlagCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "civilianHealthCareFlagDescription", {
        get: function () { return this.json.civilianHealthCareFlagDescription; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "commissaryFlagCode", {
        get: function () { return this.json.commissaryFlagCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "commissaryFlagDescription", {
        get: function () { return this.json.commissaryFlagDescription; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "deersDependentSuffixCode", {
        get: function () { return this.json.deersDependentSuffixCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "deersDependentSuffixDescription", {
        get: function () { return this.json.deersDependentSuffixDescription; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "directCareFlagCode", {
        get: function () { return this.json.directCareFlagCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "directCareFlagDescription", {
        get: function () { return this.json.directCareFlagDescription; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "exchangeFlagCode", {
        get: function () { return this.json.exchangeFlagCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "exchangeFlagDescription", {
        get: function () { return this.json.exchangeFlagDescription; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "eyeColor", {
        get: function () { return this.json.eyeColor; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "familySequenceNumber", {
        get: function () { return this.json.familySequenceNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "formNumber", {
        get: function () { return this.json.formNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "genevaConventionCategory", {
        get: function () { return this.json.genevaConventionCategory; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "hairColor", {
        get: function () { return this.json.hairColor; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "height", {
        get: function () { return this.json.height; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "jpegData", {
        get: function () { return this.json.jpegData; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "mwrFlagCode", {
        get: function () { return this.json.mwrFlagCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "mwrFlagDescription", {
        get: function () { return this.json.mwrFlagDescription; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "payGrade", {
        get: function () { return this.json.payGrade; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "personDesignatorDocument", {
        get: function () { return this.json.personDesignatorDocument; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "rank", {
        get: function () { return this.json.rank; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "relationshipCode", {
        get: function () { return this.json.relationshipCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "relationshipDescription", {
        get: function () { return this.json.relationshipDescription; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "securityCode", {
        get: function () { return this.json.securityCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "serviceCode", {
        get: function () { return this.json.serviceCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "sponsorFlag", {
        get: function () { return this.json.sponsorFlag; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "sponsorName", {
        get: function () { return this.json.sponsorName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "sponsorPersonDesignatorIdentifier", {
        get: function () {
            return this.json.sponsorPersonDesignatorIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "statusCode", {
        get: function () { return this.json.statusCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "statusCodeDescription", {
        get: function () { return this.json.statusCodeDescription; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "version", {
        get: function () { return this.json.version; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(USUniformedServicesBarcodeResult.prototype, "weight", {
        get: function () { return this.json.weight; },
        enumerable: false,
        configurable: true
    });
    USUniformedServicesBarcodeResult.fromJSON = function (json) {
        var result = new USUniformedServicesBarcodeResult();
        result.json = json;
        return result;
    };
    return USUniformedServicesBarcodeResult;
}());
exports.USUniformedServicesBarcodeResult = USUniformedServicesBarcodeResult;
var VIZResult = /** @class */ (function () {
    function VIZResult() {
    }
    Object.defineProperty(VIZResult.prototype, "additionalAddressInformation", {
        get: function () { return this.json.additionalAddressInformation; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "additionalNameInformation", {
        get: function () { return this.json.additionalNameInformation; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "documentAdditionalNumber", {
        get: function () { return this.json.documentAdditionalNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "employer", {
        get: function () { return this.json.employer; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "issuingAuthority", {
        get: function () { return this.json.issuingAuthority; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "issuingJurisdiction", {
        get: function () { return this.json.issuingJurisdiction; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "issuingJurisdictionIso", {
        get: function () { return this.json.issuingJurisdictionIso; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "maritalStatus", {
        get: function () { return this.json.maritalStatus; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "personalIdNumber", {
        get: function () { return this.json.personalIdNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "placeOfBirth", {
        get: function () { return this.json.placeOfBirth; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "profession", {
        get: function () { return this.json.profession; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "race", {
        get: function () { return this.json.race; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "religion", {
        get: function () { return this.json.religion; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "residentialStatus", {
        get: function () { return this.json.residentialStatus; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "capturedSides", {
        get: function () { return this.json.capturedSides; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VIZResult.prototype, "isBackSideCaptureSupported", {
        get: function () { return this.json.isBackSideCaptureSupported; },
        enumerable: false,
        configurable: true
    });
    VIZResult.fromJSON = function (json) {
        var result = new VIZResult();
        result.json = json;
        return result;
    };
    return VIZResult;
}());
exports.VIZResult = VIZResult;
var ArgentinaIdBarcodeResult = /** @class */ (function () {
    function ArgentinaIdBarcodeResult() {
    }
    Object.defineProperty(ArgentinaIdBarcodeResult.prototype, "personalIdNumber", {
        get: function () { return this.json.personalIdNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArgentinaIdBarcodeResult.prototype, "documentCopy", {
        get: function () { return this.json.documentCopy; },
        enumerable: false,
        configurable: true
    });
    ArgentinaIdBarcodeResult.fromJSON = function (json) {
        var result = new ArgentinaIdBarcodeResult();
        result.json = json;
        return result;
    };
    return ArgentinaIdBarcodeResult;
}());
exports.ArgentinaIdBarcodeResult = ArgentinaIdBarcodeResult;
var ColombiaIdBarcodeResult = /** @class */ (function () {
    function ColombiaIdBarcodeResult() {
    }
    Object.defineProperty(ColombiaIdBarcodeResult.prototype, "bloodType", {
        get: function () { return this.json.bloodType; },
        enumerable: false,
        configurable: true
    });
    ColombiaIdBarcodeResult.fromJSON = function (json) {
        var result = new ColombiaIdBarcodeResult();
        result.json = json;
        return result;
    };
    return ColombiaIdBarcodeResult;
}());
exports.ColombiaIdBarcodeResult = ColombiaIdBarcodeResult;
var ColombiaDlBarcodeResult = /** @class */ (function () {
    function ColombiaDlBarcodeResult() {
    }
    Object.defineProperty(ColombiaDlBarcodeResult.prototype, "categories", {
        get: function () { return this.json.categories; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColombiaDlBarcodeResult.prototype, "identificationType", {
        get: function () { return this.json.identificationType; },
        enumerable: false,
        configurable: true
    });
    ColombiaDlBarcodeResult.fromJSON = function (json) {
        var result = new ColombiaDlBarcodeResult();
        result.json = json;
        return result;
    };
    return ColombiaDlBarcodeResult;
}());
exports.ColombiaDlBarcodeResult = ColombiaDlBarcodeResult;
var SouthAfricaIdBarcodeResult = /** @class */ (function () {
    function SouthAfricaIdBarcodeResult() {
    }
    Object.defineProperty(SouthAfricaIdBarcodeResult.prototype, "countryOfBirth", {
        get: function () { return this.json.countryOfBirth; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SouthAfricaIdBarcodeResult.prototype, "countryOfBirthIso", {
        get: function () { return this.json.countryOfBirthIso; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SouthAfricaIdBarcodeResult.prototype, "citizenshipStatus", {
        get: function () { return this.json.citizenshipStatus; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SouthAfricaIdBarcodeResult.prototype, "personalIdNumber", {
        get: function () { return this.json.personalIdNumber; },
        enumerable: false,
        configurable: true
    });
    SouthAfricaIdBarcodeResult.fromJSON = function (json) {
        var result = new SouthAfricaIdBarcodeResult();
        result.json = json;
        return result;
    };
    return SouthAfricaIdBarcodeResult;
}());
exports.SouthAfricaIdBarcodeResult = SouthAfricaIdBarcodeResult;
var SouthAfricaDlBarcodeResult = /** @class */ (function () {
    function SouthAfricaDlBarcodeResult() {
    }
    Object.defineProperty(SouthAfricaDlBarcodeResult.prototype, "version", {
        get: function () { return this.json.version; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SouthAfricaDlBarcodeResult.prototype, "licenseCountryOfIssue", {
        get: function () { return this.json.licenseCountryOfIssue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SouthAfricaDlBarcodeResult.prototype, "personalIdNumber", {
        get: function () { return this.json.personalIdNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SouthAfricaDlBarcodeResult.prototype, "personalIdNumberType", {
        get: function () { return this.json.personalIdNumberType; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SouthAfricaDlBarcodeResult.prototype, "documentCopy", {
        get: function () { return this.json.documentCopy; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SouthAfricaDlBarcodeResult.prototype, "driverRestrictionCodes", {
        get: function () { return this.json.driverRestrictionCodes; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SouthAfricaDlBarcodeResult.prototype, "professionalDrivingPermit", {
        get: function () {
            return ProfessionalDrivingPermit.fromJSON(this.json.professionalDrivingPermit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SouthAfricaDlBarcodeResult.prototype, "vehicleRestrictions", {
        get: function () {
            return this.json.vehicleRestrictions.map(function (json) { return VehicleRestriction.fromJSON(json); });
        },
        enumerable: false,
        configurable: true
    });
    SouthAfricaDlBarcodeResult.fromJSON = function (json) {
        var result = new SouthAfricaDlBarcodeResult();
        result.json = json;
        return result;
    };
    return SouthAfricaDlBarcodeResult;
}());
exports.SouthAfricaDlBarcodeResult = SouthAfricaDlBarcodeResult;
var ChinaMainlandTravelPermitMRZResult = /** @class */ (function () {
    function ChinaMainlandTravelPermitMRZResult() {
    }
    Object.defineProperty(ChinaMainlandTravelPermitMRZResult.prototype, "documentCode", {
        get: function () { return this.json.documentCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChinaMainlandTravelPermitMRZResult.prototype, "capturedMrz", {
        get: function () { return this.json.capturedMrz; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChinaMainlandTravelPermitMRZResult.prototype, "personalIdNumber", {
        get: function () { return this.json.personalIdNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChinaMainlandTravelPermitMRZResult.prototype, "renewalTimes", {
        get: function () { return this.json.renewalTimes; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChinaMainlandTravelPermitMRZResult.prototype, "fullNameSimplifiedChinese", {
        get: function () { return this.json.fullNameSimplifiedChinese; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChinaMainlandTravelPermitMRZResult.prototype, "omittedCharacterCountInGBKName", {
        get: function () { return this.json.omittedCharacterCountInGBKName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChinaMainlandTravelPermitMRZResult.prototype, "omittedNameCount", {
        get: function () { return this.json.omittedNameCount; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChinaMainlandTravelPermitMRZResult.prototype, "issuingAuthorityCode", {
        get: function () { return this.json.issuingAuthorityCode; },
        enumerable: false,
        configurable: true
    });
    ChinaMainlandTravelPermitMRZResult.fromJSON = function (json) {
        var result = new ChinaMainlandTravelPermitMRZResult();
        result.json = json;
        return result;
    };
    return ChinaMainlandTravelPermitMRZResult;
}());
exports.ChinaMainlandTravelPermitMRZResult = ChinaMainlandTravelPermitMRZResult;
var ChinaExitEntryPermitMRZResult = /** @class */ (function () {
    function ChinaExitEntryPermitMRZResult() {
    }
    Object.defineProperty(ChinaExitEntryPermitMRZResult.prototype, "documentCode", {
        get: function () { return this.json.documentCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChinaExitEntryPermitMRZResult.prototype, "capturedMrz", {
        get: function () { return this.json.capturedMrz; },
        enumerable: false,
        configurable: true
    });
    ChinaExitEntryPermitMRZResult.fromJSON = function (json) {
        var result = new ChinaExitEntryPermitMRZResult();
        result.json = json;
        return result;
    };
    return ChinaExitEntryPermitMRZResult;
}());
exports.ChinaExitEntryPermitMRZResult = ChinaExitEntryPermitMRZResult;
var ChinaOneWayPermitBackMrzResult = /** @class */ (function () {
    function ChinaOneWayPermitBackMrzResult() {
    }
    Object.defineProperty(ChinaOneWayPermitBackMrzResult.prototype, "documentCode", {
        get: function () { return this.json.documentCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChinaOneWayPermitBackMrzResult.prototype, "namesAreTruncated", {
        get: function () { return this.json.namesAreTruncated; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChinaOneWayPermitBackMrzResult.prototype, "capturedMrz", {
        get: function () { return this.json.capturedMrz; },
        enumerable: false,
        configurable: true
    });
    ChinaOneWayPermitBackMrzResult.fromJSON = function (json) {
        var result = new ChinaOneWayPermitBackMrzResult();
        result.json = json;
        return result;
    };
    return ChinaOneWayPermitBackMrzResult;
}());
exports.ChinaOneWayPermitBackMrzResult = ChinaOneWayPermitBackMrzResult;
var ChinaOneWayPermitFrontMrzResult = /** @class */ (function () {
    function ChinaOneWayPermitFrontMrzResult() {
    }
    Object.defineProperty(ChinaOneWayPermitFrontMrzResult.prototype, "documentCode", {
        get: function () { return this.json.documentCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChinaOneWayPermitFrontMrzResult.prototype, "capturedMrz", {
        get: function () { return this.json.capturedMrz; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChinaOneWayPermitFrontMrzResult.prototype, "fullNameSimplifiedChinese", {
        get: function () { return this.json.fullNameSimplifiedChinese; },
        enumerable: false,
        configurable: true
    });
    ChinaOneWayPermitFrontMrzResult.fromJSON = function (json) {
        var result = new ChinaOneWayPermitFrontMrzResult();
        result.json = json;
        return result;
    };
    return ChinaOneWayPermitFrontMrzResult;
}());
exports.ChinaOneWayPermitFrontMrzResult = ChinaOneWayPermitFrontMrzResult;
var ApecBusinessTravelCardMrzResult = /** @class */ (function () {
    function ApecBusinessTravelCardMrzResult() {
    }
    Object.defineProperty(ApecBusinessTravelCardMrzResult.prototype, "documentCode", {
        get: function () { return this.json.documentCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApecBusinessTravelCardMrzResult.prototype, "capturedMrz", {
        get: function () { return this.json.capturedMrz; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApecBusinessTravelCardMrzResult.prototype, "passportIssuerIso", {
        get: function () { return this.json.passportIssuerIso; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApecBusinessTravelCardMrzResult.prototype, "passportNumber", {
        get: function () { return this.json.passportNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApecBusinessTravelCardMrzResult.prototype, "passportDateOfExpiry", {
        get: function () {
            return DateResult.fromJSON(this.json.passportDateOfExpiry);
        },
        enumerable: false,
        configurable: true
    });
    ApecBusinessTravelCardMrzResult.fromJSON = function (json) {
        var result = new ApecBusinessTravelCardMrzResult();
        result.json = json;
        return result;
    };
    return ApecBusinessTravelCardMrzResult;
}());
exports.ApecBusinessTravelCardMrzResult = ApecBusinessTravelCardMrzResult;
var LocalizedOnlyId = /** @class */ (function () {
    function LocalizedOnlyId() {
    }
    Object.defineProperty(LocalizedOnlyId.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    LocalizedOnlyId.fromJSON = function (json) {
        var result = new LocalizedOnlyId();
        result._location = Common_1.Quadrilateral.fromJSON(json.location);
        return result;
    };
    return LocalizedOnlyId;
}());
exports.LocalizedOnlyId = LocalizedOnlyId;
var RejectedId = /** @class */ (function () {
    function RejectedId() {
    }
    Object.defineProperty(RejectedId.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    RejectedId.fromJSON = function (json) {
        var result = new RejectedId();
        result._location = Common_1.Quadrilateral.fromJSON(json.location);
        return result;
    };
    return RejectedId;
}());
exports.RejectedId = RejectedId;
var AamvaVizBarcodeComparisonResult = /** @class */ (function () {
    function AamvaVizBarcodeComparisonResult() {
    }
    Object.defineProperty(AamvaVizBarcodeComparisonResult.prototype, "checksPassed", {
        get: function () { return this.json.checksPassed; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AamvaVizBarcodeComparisonResult.prototype, "resultDescription", {
        get: function () { return this.json.resultDescription; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AamvaVizBarcodeComparisonResult.prototype, "issuingCountryIsoMatch", {
        get: function () {
            return PrivateCapturedId_1.StringComparisonCheck
                .fromJSON(this.json.issuingCountryIsoMatch);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AamvaVizBarcodeComparisonResult.prototype, "issuingJurisdictionIsoMatch", {
        get: function () {
            return PrivateCapturedId_1.StringComparisonCheck
                .fromJSON(this.json.issuingJurisdictionIsoMatch);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AamvaVizBarcodeComparisonResult.prototype, "documentNumbersMatch", {
        get: function () {
            return PrivateCapturedId_1.StringComparisonCheck
                .fromJSON(this.json.documentNumbersMatch);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AamvaVizBarcodeComparisonResult.prototype, "fullNamesMatch", {
        get: function () {
            return PrivateCapturedId_1.StringComparisonCheck
                .fromJSON(this.json.fullNamesMatch);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AamvaVizBarcodeComparisonResult.prototype, "datesOfBirthMatch", {
        get: function () {
            return PrivateCapturedId_1.DateComparisonCheck
                .fromJSON(this.json.datesOfBirth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AamvaVizBarcodeComparisonResult.prototype, "datesOfExpiryMatch", {
        get: function () {
            return PrivateCapturedId_1.DateComparisonCheck
                .fromJSON(this.json.datesOfExpiry);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AamvaVizBarcodeComparisonResult.prototype, "datesOfIssueMatch", {
        get: function () {
            return PrivateCapturedId_1.DateComparisonCheck
                .fromJSON(this.json.datesOfIssue);
        },
        enumerable: false,
        configurable: true
    });
    AamvaVizBarcodeComparisonResult.fromJSON = function (json) {
        var result = new AamvaVizBarcodeComparisonResult();
        result.json = json;
        return result;
    };
    return AamvaVizBarcodeComparisonResult;
}());
exports.AamvaVizBarcodeComparisonResult = AamvaVizBarcodeComparisonResult;
var AamvaVizBarcodeComparisonVerifier = /** @class */ (function () {
    function AamvaVizBarcodeComparisonVerifier() {
        this.proxy = new IdCaptureProxy_1.IdCaptureProxy();
    }
    AamvaVizBarcodeComparisonVerifier.create = function () {
        return new AamvaVizBarcodeComparisonVerifier();
    };
    AamvaVizBarcodeComparisonVerifier.prototype.verify = function (capturedId) {
        var _this = this;
        // Necessary for not exposing internal API on CapturedId, while only passing the private "json" property
        // to native iOS and Android.
        var capturedIdAsString = JSON.stringify(capturedId);
        var capturedIdJsonData = JSON.parse(capturedIdAsString).json;
        return new Promise(function (resolve, reject) {
            _this.proxy
                .verifyCapturedId(JSON.stringify(capturedIdJsonData))
                .then(function (json) {
                if (!json) {
                    resolve(AamvaVizBarcodeComparisonResult
                        .fromJSON(JSON.parse('{}')));
                }
                else {
                    resolve(AamvaVizBarcodeComparisonResult
                        .fromJSON(JSON.parse(json)));
                }
            }, reject);
        });
    };
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], AamvaVizBarcodeComparisonVerifier.prototype, "proxy", void 0);
    return AamvaVizBarcodeComparisonVerifier;
}());
exports.AamvaVizBarcodeComparisonVerifier = AamvaVizBarcodeComparisonVerifier;
var AamvaBarcodeVerificationResult = /** @class */ (function () {
    function AamvaBarcodeVerificationResult() {
    }
    Object.defineProperty(AamvaBarcodeVerificationResult.prototype, "allChecksPassed", {
        get: function () { return this.json.allChecksPassed; },
        enumerable: false,
        configurable: true
    });
    AamvaBarcodeVerificationResult.fromJSON = function (json) {
        var result = new AamvaBarcodeVerificationResult();
        result.json = json;
        return result;
    };
    return AamvaBarcodeVerificationResult;
}());
exports.AamvaBarcodeVerificationResult = AamvaBarcodeVerificationResult;
var AamvaBarcodeVerifier = /** @class */ (function () {
    function AamvaBarcodeVerifier() {
        this.proxy = new IdCaptureProxy_1.IdCaptureProxy();
    }
    AamvaBarcodeVerifier.create = function (context) {
        var verifier = new AamvaBarcodeVerifier();
        return new Promise(function (resolve, reject) {
            verifier
                .proxy
                .createContextForBarcodeVerification(context)
                .then(function () {
                verifier.context = context;
                resolve(verifier);
            }, reject);
        });
    };
    AamvaBarcodeVerifier.prototype.verify = function (capturedId) {
        var _this = this;
        // Necessary for not exposing internal API on CapturedId, while only passing the private "json" property
        // to native iOS and Android.
        var capturedIdAsString = JSON.stringify(capturedId);
        var capturedIdJsonData = JSON.parse(capturedIdAsString).json;
        return new Promise(function (resolve, reject) {
            _this.proxy
                .verifyCapturedIdAsync(JSON.stringify(capturedIdJsonData))
                .then(function (json) {
                if (!json) {
                    resolve(AamvaBarcodeVerificationResult
                        .fromJSON(JSON.parse('{}')));
                }
                else {
                    resolve(AamvaBarcodeVerificationResult
                        .fromJSON(JSON.parse(json)));
                }
            }, reject);
        });
    };
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], AamvaBarcodeVerifier.prototype, "proxy", void 0);
    return AamvaBarcodeVerifier;
}());
exports.AamvaBarcodeVerifier = AamvaBarcodeVerifier;
//# sourceMappingURL=CapturedId.js.map