import { QuadrilateralJSON } from 'scandit-react-native-datacapture-core/js/private/PrivateCommon';
import { ComparisonCheckResult } from '../Enums';
export interface DateResultJSON {
    day: number;
    month: number;
    year: number;
}
export interface ProfessionalDrivingPermitJSON {
    dateOfExpiry: DateResultJSON;
    codes: string[];
}
export interface VehicleRestrictionJSON {
    vehicleCode: string;
    vehicleRestriction: string;
    dateOfIssue: DateResultJSON;
}
export interface CommonCapturedIdFieldsJSON {
    firstName: string | null;
    lastName: string | null;
    fullName: string;
    sex: string | null;
    dateOfBirth: DateResultJSON | null;
    age: number | null;
    isExpired: boolean | null;
    nationality: string | null;
    address: string | null;
    documentType: string | null;
    documentNumber: string | null;
    issuingCountry: string | null;
    issuingCountryIso: string | null;
    dateOfExpiry: DateResultJSON | null;
    dateOfIssue: DateResultJSON | null;
}
export interface ImageInfoJSON {
    face: string;
    idFront: string;
    idBack: string;
}
export interface CapturedIdJSON {
    capturedResultType: string;
    capturedResultTypes: string[];
    firstName: string | null;
    lastName: string | null;
    fullName: string;
    sex: string | null;
    dateOfBirth: DateResultJSON | null;
    age: number | null;
    isExpired: boolean | null;
    nationality: string | null;
    address: string | null;
    documentType: string;
    issuingCountryIso: string | null;
    issuingCountry: string | null;
    documentNumber: string | null;
    dateOfExpiry: DateResultJSON | null;
    dateOfIssue: DateResultJSON | null;
    imageInfo: ImageInfoJSON | null;
    aamvaBarcodeResult: AAMVABarcodeResultJSON | null;
    argentinaIdBarcodeResult: ArgentinaIdBarcodeResultJSON | null;
    colombiaIdBarcodeResult: ColombiaIdBarcodeResultJSON | null;
    colombiaDlBarcodeResult: ColombiaDlBarcodeResultJSON | null;
    mrzResult: MRZResultJSON | null;
    southAfricaDlBarcodeResult: SouthAfricaDlBarcodeResultJSON | null;
    southAfricaIdBarcodeResult: SouthAfricaIdBarcodeResultJSON | null;
    usUniformedServicesBarcodeResult: USUniformedServicesBarcodeResultJSON | null;
    vizResult: VIZResultJSON | null;
    chinaMainlandTravelPermitMrzResult: ChinaMainlandTravelPermitMRZResultJSON | null;
    chinaExitEntryPermitMrzResult: ChinaExitEntryPermitMRZResultJSON | null;
    chinaOneWayPermitBackMrzResult: ChinaOneWayPermitBackMrzResultJSON | null;
    chinaOneWayPermitFrontMrzResult: ChinaOneWayPermitFrontMrzResultJSON | null;
    apecBusinessTravelCardMrzResult: ApecBusinessTravelCardMrzResultJSON | null;
}
export interface AAMVABarcodeResultJSON {
    aamvaVersion: number;
    isRealId: boolean;
    aliasFamilyName: string | null;
    aliasGivenName: string | null;
    aliasSuffixName: string | null;
    cardRevisionDate: DateResultJSON | null;
    documentDiscriminatorNumber: string | null;
    driverNamePrefix: string | null;
    driverNameSuffix: string | null;
    endorsementsCode: string | null;
    eyeColor: string | null;
    firstNameTruncation: string | null;
    hairColor: string | null;
    heightCm: number | null;
    heightInch: number | null;
    iin: string;
    issuingJurisdiction: string;
    issuingJurisdictionIso: string;
    jurisdictionVersion: number;
    lastNameTruncation: string | null;
    middleName: string | null;
    middleNameTruncation: string | null;
    placeOfBirth: string | null;
    race: string | null;
    restrictionsCode: string | null;
    vehicleClass: string | null;
    weightKg: number | null;
    weightLbs: number | null;
    barcodeDataElements: {
        [key: string]: string;
    };
}
export interface AamvaCloudVerificationResultJSON {
    allChecksPassed: boolean;
}
export interface ArgentinaIdBarcodeResultJSON {
    documentCopy: string;
    personalIdNumber: string;
}
export interface ColombiaIdBarcodeResultJSON {
    bloodType: string;
}
export interface ColombiaDlBarcodeResultJSON {
    categories: string[];
    identificationType: string;
}
export interface MRZResultJSON {
    documentCode: string;
    namesAreTruncated: boolean;
    optional: string | null;
    optional1: string | null;
    capturedMrz: string;
}
export interface SouthAfricaDlBarcodeResultJSON {
    version: number;
    licenseCountryOfIssue: string;
    personalIdNumber: string;
    personalIdNumberType: string;
    documentCopy: number;
    driverRestrictionCodes: number[];
    professionalDrivingPermit: ProfessionalDrivingPermitJSON | null;
    vehicleRestrictions: VehicleRestrictionJSON[];
}
export interface SouthAfricaIdBarcodeResultJSON {
    countryOfBirth: string;
    countryOfBirthIso: string;
    citizenshipStatus: string;
    personalIdNumber: string;
}
export interface USUniformedServicesBarcodeResultJSON {
    bloodType: string | null;
    branchOfService: string;
    champusEffectiveDate: DateResultJSON | null;
    champusExpiryDate: DateResultJSON | null;
    civilianHealthCareFlagCode: string;
    civilianHealthCareFlagDescription: string;
    commissaryFlagCode: string;
    commissaryFlagDescription: string;
    deersDependentSuffixCode: number;
    deersDependentSuffixDescription: string;
    directCareFlagCode: string;
    directCareFlagDescription: string;
    exchangeFlagCode: string;
    exchangeFlagDescription: string;
    eyeColor: string;
    familySequenceNumber: number;
    formNumber: string;
    genevaConventionCategory: string | null;
    hairColor: string;
    height: number;
    jpegData: string;
    mwrFlagCode: string;
    mwrFlagDescription: string;
    payGrade: string | null;
    personDesignatorDocument: number;
    rank: string;
    relationshipCode: string | null;
    relationshipDescription: string | null;
    securityCode: string;
    serviceCode: string;
    sponsorFlag: string;
    sponsorPersonDesignatorIdentifier: number | null;
    sponsorName: string | null;
    statusCode: string;
    statusCodeDescription: string;
    version: number;
    weight: number;
}
export interface VIZResultJSON {
    additionalAddressInformation: string | null;
    additionalNameInformation: string | null;
    documentAdditionalNumber: string | null;
    employer: string | null;
    issuingAuthority: string | null;
    issuingJurisdiction: string;
    issuingJurisdictionIso: string;
    maritalStatus: string | null;
    personalIdNumber: string | null;
    placeOfBirth: string | null;
    profession: string | null;
    race: string | null;
    religion: string | null;
    residentialStatus: string | null;
    capturedSides: string;
    isBackSideCaptureSupported: boolean;
}
export interface LocalizedIdJSON {
    location: QuadrilateralJSON;
}
export interface RejectedIdJSON {
    location: QuadrilateralJSON;
}
export interface IdCaptureErrorJSON {
    type: string;
    message: string;
}
export interface IdCaptureSessionJSON {
    newlyCapturedId: CapturedIdJSON | null;
    localizedOnlyId: LocalizedIdJSON;
    newlyRejectedId: RejectedIdJSON;
    frameSequenceId: number;
    error: IdCaptureErrorJSON;
}
export interface ComparisonCheckJSON {
    checkResult: ComparisonCheckResult;
    resultDescription: string;
}
export interface StringComparisonCheckJSON extends ComparisonCheckJSON {
    vizValue: string | null;
    aamvaBarcodeValue: string | null;
}
export interface DateComparisonCheckJSON extends ComparisonCheckJSON {
    vizValue: DateResultJSON | null;
    aamvaBarcodeValue: DateResultJSON | null;
}
export interface AamvaVizBarcodeComparisonResultJSON {
    checksPassed: boolean;
    resultDescription: string;
    issuingCountryIsoMatch: StringComparisonCheckJSON;
    issuingJurisdictionIsoMatch: StringComparisonCheckJSON;
    documentNumbersMatch: StringComparisonCheckJSON;
    fullNamesMatch: StringComparisonCheckJSON;
    datesOfBirth: DateComparisonCheckJSON;
    datesOfExpiry: DateComparisonCheckJSON;
    datesOfIssue: DateComparisonCheckJSON;
}
export interface ChinaMainlandTravelPermitMRZResultJSON {
    documentCode: string;
    capturedMrz: string;
    personalIdNumber: string;
    renewalTimes: number;
    fullNameSimplifiedChinese: string;
    omittedCharacterCountInGBKName: number;
    omittedNameCount: number;
    issuingAuthorityCode: string | null;
}
export interface ChinaExitEntryPermitMRZResultJSON {
    documentCode: string;
    capturedMrz: string;
}
export interface ChinaOneWayPermitBackMrzResultJSON {
    documentCode: string;
    capturedMrz: string;
    namesAreTruncated: boolean;
}
export interface ChinaOneWayPermitFrontMrzResultJSON {
    documentCode: string;
    capturedMrz: string;
    fullNameSimplifiedChinese: string;
}
export interface ApecBusinessTravelCardMrzResultJSON {
    documentCode: string;
    capturedMrz: string;
    passportIssuerIso: string;
    passportNumber: string;
    passportDateOfExpiry: DateResultJSON | null;
}
