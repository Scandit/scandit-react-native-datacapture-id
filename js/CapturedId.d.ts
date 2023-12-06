import { CapturedResultType, DocumentType, IdImageType, SupportedSides } from './Enums';
import { Quadrilateral } from 'scandit-react-native-datacapture-core/js/Common';
import { ComparisonCheckResult } from './Enums';
import { DataCaptureContext } from 'scandit-react-native-datacapture-core';
export declare class DateResult {
    private json;
    get day(): number;
    get month(): number;
    get year(): number;
    private static fromJSON;
}
export declare class ProfessionalDrivingPermit {
    private json;
    get dateOfExpiry(): DateResult;
    get codes(): string[];
    private static fromJSON;
}
export declare class VehicleRestriction {
    private json;
    get vehicleCode(): string;
    get vehicleRestriction(): string;
    get dateOfIssue(): DateResult;
    private static fromJSON;
}
export declare class CapturedId {
    private json;
    private commonCapturedFields;
    get firstName(): string | null;
    get lastName(): string | null;
    get fullName(): string;
    get sex(): string | null;
    get dateOfBirth(): DateResult | null;
    get age(): number | null;
    get isExpired(): boolean | null;
    get nationality(): string | null;
    get address(): string | null;
    get capturedResultType(): CapturedResultType;
    get capturedResultTypes(): CapturedResultType[];
    get documentType(): DocumentType;
    get issuingCountryIso(): string | null;
    get issuingCountry(): string | null;
    get documentNumber(): string | null;
    get dateOfExpiry(): DateResult | null;
    get dateOfIssue(): DateResult | null;
    private _aamvaBarcodeResult;
    get aamvaBarcodeResult(): AAMVABarcodeResult | null;
    private _argentinaIdBarcodeResult;
    get argentinaIdBarcodeResult(): ArgentinaIdBarcodeResult | null;
    private _colombiaIdBarcodeResult;
    get colombiaIdBarcodeResult(): ColombiaIdBarcodeResult | null;
    private _colombiaDlBarcodeResult;
    get colombiaDlBarcodeResult(): ColombiaDlBarcodeResult | null;
    private _mrzResult;
    get mrzResult(): MRZResult | null;
    private _southAfricaIdBarcodeResult;
    get southAfricaIdBarcodeResult(): SouthAfricaIdBarcodeResult | null;
    private _southAfricaDlBarcodeResult;
    get southAfricaDlBarcodeResult(): SouthAfricaDlBarcodeResult | null;
    private _usUniformedServicesBarcodeResult;
    get usUniformedServicesBarcodeResult(): USUniformedServicesBarcodeResult | null;
    private _vizResult;
    get vizResult(): VIZResult | null;
    private _chinaMainlandTravelPermitMRZResult;
    get chinaMainlandTravelPermitMRZResult(): ChinaMainlandTravelPermitMRZResult | null;
    private _chinaExitEntryPermitMRZResult;
    get chinaExitEntryPermitMRZResult(): ChinaExitEntryPermitMRZResult | null;
    private _chinaOneWayPermitBackMrzResult;
    get chinaOneWayPermitBackMrzResult(): ChinaOneWayPermitBackMrzResult | null;
    private _chinaOneWayPermitFrontMrzResult;
    get chinaOneWayPermitFrontMrzResult(): ChinaOneWayPermitFrontMrzResult | null;
    private _apecBusinessTravelCardMrzResult;
    get apecBusinessTravelCardMrzResult(): ApecBusinessTravelCardMrzResult | null;
    private static fromJSON;
    idImageOfType(type: IdImageType): string | null;
}
export declare class AAMVABarcodeResult {
    private json;
    get aamvaVersion(): number;
    get aliasFamilyName(): string | null;
    get aliasGivenName(): string | null;
    get aliasSuffixName(): string | null;
    get isRealId(): boolean;
    get driverNamePrefix(): string | null;
    get driverNameSuffix(): string | null;
    get endorsementsCode(): string | null;
    get eyeColor(): string | null;
    get firstNameTruncation(): string | null;
    get hairColor(): string | null;
    get heightCm(): number | null;
    get heightInch(): number | null;
    get iIN(): string;
    get issuingJurisdiction(): string;
    get issuingJurisdictionIso(): string;
    get jurisdictionVersion(): number;
    get lastNameTruncation(): string | null;
    get middleName(): string | null;
    get middleNameTruncation(): string | null;
    get placeOfBirth(): string | null;
    get race(): string | null;
    get restrictionsCode(): string | null;
    get vehicleClass(): string | null;
    get weightKg(): number | null;
    get weightLbs(): number | null;
    get cardRevisionDate(): DateResult | null;
    get documentDiscriminatorNumber(): string | null;
    get barcodeDataElements(): {
        [key: string]: string;
    };
    private static fromJSON;
}
export declare class MRZResult {
    private json;
    get documentCode(): string;
    get namesAreTruncated(): boolean;
    get optional(): string | null;
    get optional1(): string | null;
    get capturedMrz(): string;
    private static fromJSON;
}
export declare class USUniformedServicesBarcodeResult {
    private json;
    get bloodType(): string | null;
    get branchOfService(): string;
    get champusEffectiveDate(): DateResult | null;
    get champusExpiryDate(): DateResult | null;
    get civilianHealthCareFlagCode(): string;
    get civilianHealthCareFlagDescription(): string;
    get commissaryFlagCode(): string;
    get commissaryFlagDescription(): string;
    get deersDependentSuffixCode(): number;
    get deersDependentSuffixDescription(): string;
    get directCareFlagCode(): string;
    get directCareFlagDescription(): string;
    get exchangeFlagCode(): string;
    get exchangeFlagDescription(): string;
    get eyeColor(): string;
    get familySequenceNumber(): number;
    get formNumber(): string;
    get genevaConventionCategory(): string | null;
    get hairColor(): string;
    get height(): number;
    get jpegData(): string | null;
    get mwrFlagCode(): string;
    get mwrFlagDescription(): string;
    get payGrade(): string | null;
    get personDesignatorDocument(): number;
    get rank(): string;
    get relationshipCode(): string | null;
    get relationshipDescription(): string | null;
    get securityCode(): string;
    get serviceCode(): string;
    get sponsorFlag(): string;
    get sponsorName(): string | null;
    get sponsorPersonDesignatorIdentifier(): number | null;
    get statusCode(): string;
    get statusCodeDescription(): string;
    get version(): number;
    get weight(): number;
    private static fromJSON;
}
export declare class VIZResult {
    private json;
    get additionalAddressInformation(): string | null;
    get additionalNameInformation(): string | null;
    get documentAdditionalNumber(): string | null;
    get employer(): string | null;
    get issuingAuthority(): string | null;
    get issuingJurisdiction(): string | null;
    get issuingJurisdictionIso(): string | null;
    get maritalStatus(): string | null;
    get personalIdNumber(): string | null;
    get placeOfBirth(): string | null;
    get profession(): string | null;
    get race(): string | null;
    get religion(): string | null;
    get residentialStatus(): string | null;
    get capturedSides(): SupportedSides;
    get isBackSideCaptureSupported(): boolean;
    private static fromJSON;
}
export declare class ArgentinaIdBarcodeResult {
    private json;
    get personalIdNumber(): string;
    get documentCopy(): string;
    private static fromJSON;
}
export declare class ColombiaIdBarcodeResult {
    private json;
    get bloodType(): string;
    private static fromJSON;
}
export declare class ColombiaDlBarcodeResult {
    private json;
    get categories(): string[];
    get identificationType(): string;
    private static fromJSON;
}
export declare class SouthAfricaIdBarcodeResult {
    private json;
    get countryOfBirth(): string;
    get countryOfBirthIso(): string;
    get citizenshipStatus(): string;
    get personalIdNumber(): string;
    private static fromJSON;
}
export declare class SouthAfricaDlBarcodeResult {
    private json;
    get version(): number;
    get licenseCountryOfIssue(): string;
    get personalIdNumber(): string;
    get personalIdNumberType(): string;
    get documentCopy(): number;
    get driverRestrictionCodes(): number[];
    get professionalDrivingPermit(): ProfessionalDrivingPermit | null;
    get vehicleRestrictions(): VehicleRestriction[];
    private static fromJSON;
}
export declare class ChinaMainlandTravelPermitMRZResult {
    private json;
    get documentCode(): string;
    get capturedMrz(): string;
    get personalIdNumber(): string;
    get renewalTimes(): number;
    get fullNameSimplifiedChinese(): string;
    get omittedCharacterCountInGBKName(): number;
    get omittedNameCount(): number;
    get issuingAuthorityCode(): string | null;
    private static fromJSON;
}
export declare class ChinaExitEntryPermitMRZResult {
    private json;
    get documentCode(): string;
    get capturedMrz(): string;
    private static fromJSON;
}
export declare class ChinaOneWayPermitBackMrzResult {
    private json;
    get documentCode(): string;
    get namesAreTruncated(): boolean;
    get capturedMrz(): string;
    private static fromJSON;
}
export declare class ChinaOneWayPermitFrontMrzResult {
    private json;
    get documentCode(): string;
    get capturedMrz(): string;
    get fullNameSimplifiedChinese(): string;
    private static fromJSON;
}
export declare class ApecBusinessTravelCardMrzResult {
    private json;
    get documentCode(): string;
    get capturedMrz(): string;
    get passportIssuerIso(): string;
    get passportNumber(): string;
    get passportDateOfExpiry(): DateResult | null;
    private static fromJSON;
}
export declare class LocalizedOnlyId {
    private _location;
    get location(): Quadrilateral;
    private static fromJSON;
}
export declare class RejectedId {
    private _location;
    get location(): Quadrilateral;
    private static fromJSON;
}
export interface ComparisonCheck<T> {
    readonly aamvaBarcodeValue: T | null;
    readonly checkResult: ComparisonCheckResult;
    readonly resultDescription: string;
    readonly vizValue: T | null;
}
export declare class AamvaVizBarcodeComparisonResult {
    private json;
    get checksPassed(): boolean;
    get resultDescription(): string;
    get issuingCountryIsoMatch(): ComparisonCheck<string>;
    get issuingJurisdictionIsoMatch(): ComparisonCheck<string>;
    get documentNumbersMatch(): ComparisonCheck<string>;
    get fullNamesMatch(): ComparisonCheck<string>;
    get datesOfBirthMatch(): ComparisonCheck<DateResult>;
    get datesOfExpiryMatch(): ComparisonCheck<DateResult>;
    get datesOfIssueMatch(): ComparisonCheck<DateResult>;
    private static fromJSON;
}
export declare class AamvaVizBarcodeComparisonVerifier {
    private proxy;
    static create(): AamvaVizBarcodeComparisonVerifier;
    verify(capturedId: CapturedId): Promise<AamvaVizBarcodeComparisonResult>;
}
export declare class AamvaCloudVerificationResult {
    private json;
    get allChecksPassed(): boolean;
    private static fromJSON;
}
export declare class AamvaCloudVerifier {
    private proxy;
    private context;
    static create(context: DataCaptureContext): Promise<AamvaCloudVerifier>;
    verify(capturedId: CapturedId): Promise<AamvaCloudVerificationResult>;
}
