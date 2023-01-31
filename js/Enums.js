"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComparisonCheckResult = exports.IdLayoutLineStyle = exports.IdLayoutStyle = exports.IdLayout = exports.IdImageType = exports.SupportedSides = exports.IdDocumentType = exports.DocumentType = exports.CapturedResultType = void 0;
var CapturedResultType;
(function (CapturedResultType) {
    CapturedResultType["AAMVABarcodeResult"] = "aamvaBarcodeResult";
    CapturedResultType["ArgentinaIdBarcodeResult"] = "argentinaIdBarcodeResult";
    CapturedResultType["ColombiaIdBarcodeResult"] = "colombiaIdBarcodeResult";
    CapturedResultType["ColombiaDlBarcodeResult"] = "colombiaDlBarcodeResult";
    CapturedResultType["MRZResult"] = "mrzResult";
    CapturedResultType["SouthAfricaDlBarcodeResult"] = "southAfricaDlBarcodeResult";
    CapturedResultType["SouthAfricaIdBarcodeResult"] = "southAfricaIdBarcodeResult";
    CapturedResultType["USUniformedServicesBarcodeResult"] = "usUniformedServicesBarcodeResult";
    CapturedResultType["VIZResult"] = "vizResult";
    CapturedResultType["ChinaMainlandTravelPermitMRZResult"] = "chinaMainlandTravelPermitMrzResult";
    CapturedResultType["ChinaExitEntryPermitMRZResult"] = "chinaExitEntryPermitMrzResult";
})(CapturedResultType = exports.CapturedResultType || (exports.CapturedResultType = {}));
var DocumentType;
(function (DocumentType) {
    DocumentType["None"] = "none";
    DocumentType["ConsularId"] = "consularId";
    DocumentType["DrivingLicense"] = "drivingLicense";
    DocumentType["DrivingLicensePublicServicesCard"] = "drivingLicensePublicServicesCard";
    DocumentType["EmploymentPass"] = "employmentPass";
    DocumentType["FinCard"] = "finCard";
    DocumentType["Id"] = "id";
    DocumentType["MultipurposeId"] = "multipurposeId";
    DocumentType["MyKad"] = "myKad";
    DocumentType["MyKid"] = "myKid";
    DocumentType["MyPR"] = "myPr";
    DocumentType["MyTentera"] = "myTentera";
    DocumentType["PanCard"] = "panCard";
    DocumentType["ProfessionalId"] = "professionalId";
    DocumentType["PublicServicesCard"] = "publicServicesCard";
    DocumentType["ResidencePermit"] = "residencePermit";
    DocumentType["ResidentId"] = "residentId";
    DocumentType["TemporaryResidencePermit"] = "temporaryResidencePermit";
    DocumentType["VoterId"] = "voterId";
    DocumentType["WorkPermit"] = "workPermit";
    DocumentType["IKad"] = "iKad";
    DocumentType["MilitaryId"] = "militaryId";
    DocumentType["MyKas"] = "myKas";
    DocumentType["SocialSecurityCard"] = "socialSecurityCard";
    DocumentType["HealthInsuranceCard"] = "healthInsuranceCard";
    DocumentType["Passport"] = "passport";
    DocumentType["DiplomaticPassport"] = "diplomaticPassport";
    DocumentType["ServicePassport"] = "servicePassport";
    DocumentType["TemporaryPassport"] = "temporaryPassport";
    DocumentType["Visa"] = "visa";
    DocumentType["SPass"] = "sPass";
    DocumentType["AddressCard"] = "addressCard";
    DocumentType["AlienId"] = "alienId";
    DocumentType["AlienPassport"] = "alienPassport";
    DocumentType["GreenCard"] = "greenCard";
    DocumentType["MinorsId"] = "minorsId";
    DocumentType["PostalId"] = "postalId";
    DocumentType["ProfessionalDl"] = "professionalDl";
    DocumentType["TaxId"] = "taxId";
    DocumentType["WeaponPermit"] = "weaponPermit";
    DocumentType["BorderCrossingCard"] = "borderCrossingCard";
    DocumentType["DriverCard"] = "driverCard";
    DocumentType["GlobalEntryCard"] = "globalEntryCard";
    DocumentType["MyPolis"] = "myPolis";
    DocumentType["NexusCard"] = "nexusCard";
    DocumentType["PassportCard"] = "passportCard";
    DocumentType["ProofOfAgeCard"] = "proofOfAgeCard";
    DocumentType["RefugeeId"] = "refugeeId";
    DocumentType["TribalId"] = "tribalId";
    DocumentType["VeteranId"] = "veteranId";
    DocumentType["CitizenshipCertificate"] = "citizenshipCertificate";
    DocumentType["MyNumberCard"] = "myNumberCard";
    DocumentType["MinorsPassport"] = "minorsPassport";
    DocumentType["MinorsPublicServicesCard"] = "minorsPublicServicesCard";
})(DocumentType = exports.DocumentType || (exports.DocumentType = {}));
var IdDocumentType;
(function (IdDocumentType) {
    IdDocumentType["AAMVABarcode"] = "aamvaBarcode";
    IdDocumentType["ArgentinaIdBarcode"] = "argentinaIdBarcode";
    IdDocumentType["ColombiaIdBarcode"] = "colombiaIdBarcode";
    IdDocumentType["ColombiaDlBarcode"] = "colombiaDlBarcode";
    IdDocumentType["DLVIZ"] = "dlViz";
    IdDocumentType["IdCardMRZ"] = "idCardMrz";
    IdDocumentType["IdCardVIZ"] = "idCardViz";
    IdDocumentType["PassportMRZ"] = "passportMrz";
    IdDocumentType["SouthAfricaDlBarcode"] = "southAfricaDlBarcode";
    IdDocumentType["SouthAfricaIdBarcode"] = "southAfricaIdBarcode";
    IdDocumentType["SwissDLMRZ"] = "swissDlMrz";
    IdDocumentType["USUSIdBarcode"] = "usUsIdBarcode";
    IdDocumentType["VisaMRZ"] = "visaMrz";
    IdDocumentType["ChinaMainlandTravelPermitMRZ"] = "chinaMainlandTravelPermitMrz";
    IdDocumentType["ChinaExitEntryPermitMRZ"] = "chinaExitEntryPermitMrz";
})(IdDocumentType = exports.IdDocumentType || (exports.IdDocumentType = {}));
var SupportedSides;
(function (SupportedSides) {
    SupportedSides["FrontOnly"] = "frontOnly";
    SupportedSides["FrontAndBack"] = "frontAndBack";
})(SupportedSides = exports.SupportedSides || (exports.SupportedSides = {}));
var IdImageType;
(function (IdImageType) {
    IdImageType["Face"] = "face";
    IdImageType["IdFront"] = "idFront";
    IdImageType["IdBack"] = "idBack";
})(IdImageType = exports.IdImageType || (exports.IdImageType = {}));
var IdLayout;
(function (IdLayout) {
    IdLayout["TD1"] = "td1";
    IdLayout["TD2"] = "td2";
    IdLayout["TD3"] = "td3";
    IdLayout["MRVa"] = "mrvA";
    IdLayout["VIZ"] = "viz";
    IdLayout["PDF417"] = "pdf417";
    IdLayout["Auto"] = "auto";
    IdLayout["None"] = "none";
})(IdLayout = exports.IdLayout || (exports.IdLayout = {}));
var IdLayoutStyle;
(function (IdLayoutStyle) {
    IdLayoutStyle["Rounded"] = "rounded";
    IdLayoutStyle["Square"] = "square";
})(IdLayoutStyle = exports.IdLayoutStyle || (exports.IdLayoutStyle = {}));
var IdLayoutLineStyle;
(function (IdLayoutLineStyle) {
    IdLayoutLineStyle["Light"] = "light";
    IdLayoutLineStyle["Bold"] = "bold";
})(IdLayoutLineStyle = exports.IdLayoutLineStyle || (exports.IdLayoutLineStyle = {}));
var ComparisonCheckResult;
(function (ComparisonCheckResult) {
    ComparisonCheckResult["Passed"] = "Passed";
    ComparisonCheckResult["Skipped"] = "Skipped";
    ComparisonCheckResult["Failed"] = "Failed";
})(ComparisonCheckResult = exports.ComparisonCheckResult || (exports.ComparisonCheckResult = {}));
//# sourceMappingURL=Enums.js.map