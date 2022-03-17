"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AamvaVizBarcodeComparisonVerifier = exports.AamvaVizBarcodeComparisonResult = exports.RejectedId = exports.LocalizedOnlyId = exports.SouthAfricaDlBarcodeResult = exports.SouthAfricaIdBarcodeResult = exports.ColombiaIdBarcodeResult = exports.ArgentinaIdBarcodeResult = exports.VIZResult = exports.USUniformedServicesBarcodeResult = exports.MRZResult = exports.AAMVABarcodeResult = exports.CapturedId = exports.VehicleRestriction = exports.ProfessionalDrivingPermit = exports.DateResult = void 0;
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
        get: function () { return this.json.firstName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "lastName", {
        get: function () { return this.json.lastName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "fullName", {
        get: function () { return this.json.fullName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "sex", {
        get: function () { return this.json.sex; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "dateOfBirth", {
        get: function () {
            return DateResult.fromJSON(this.json.dateOfBirth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "nationality", {
        get: function () { return this.json.nationality; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "address", {
        get: function () { return this.json.address; },
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
        get: function () { return this.json.documentType; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "issuingCountryIso", {
        get: function () { return this.json.issuingCountryIso; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "issuingCountry", {
        get: function () { return this.json.issuingCountry; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "documentNumber", {
        get: function () { return this.json.documentNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "dateOfExpiry", {
        get: function () {
            return DateResult.fromJSON(this.json.dateOfExpiry);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedId.prototype, "dateOfIssue", {
        get: function () {
            return DateResult.fromJSON(this.json.dateOfIssue);
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
    CapturedId.fromJSON = function (json) {
        var result = new CapturedId();
        result.json = json;
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
        get: function () { return this.json.barcodeDataElements; },
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
        return new Promise(function (resolve, reject) {
            _this.proxy
                .verifyCapturedId(JSON.stringify(capturedId))
                .then(function (json) {
                if (!json) {
                    resolve();
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
//# sourceMappingURL=CapturedId.js.map