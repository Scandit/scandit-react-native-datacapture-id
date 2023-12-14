import { AAMVABarcodeResult, AamvaBarcodeVerificationResult, AamvaVizBarcodeComparisonResult, ArgentinaIdBarcodeResult, CapturedId, ChinaExitEntryPermitMRZResult, ChinaMainlandTravelPermitMRZResult, ColombiaIdBarcodeResult, ColombiaDlBarcodeResult, ComparisonCheck, DateResult, LocalizedOnlyId, MRZResult, ProfessionalDrivingPermit, RejectedId, SouthAfricaDlBarcodeResult, SouthAfricaIdBarcodeResult, USUniformedServicesBarcodeResult, VehicleRestriction, VIZResult, ChinaOneWayPermitBackMrzResult, ChinaOneWayPermitFrontMrzResult, ApecBusinessTravelCardMrzResult } from '../CapturedId';
import { ApecBusinessTravelCardMrzResultJSON, AAMVABarcodeResultJSON, AamvaBarcodeVerificationResultJSON, AamvaVizBarcodeComparisonResultJSON, ArgentinaIdBarcodeResultJSON, CapturedIdJSON, ChinaExitEntryPermitMRZResultJSON, ChinaOneWayPermitBackMrzResultJSON, ChinaOneWayPermitFrontMrzResultJSON, ChinaMainlandTravelPermitMRZResultJSON, ColombiaIdBarcodeResultJSON, ColombiaDlBarcodeResultJSON, CommonCapturedIdFieldsJSON, DateComparisonCheckJSON, DateResultJSON, LocalizedIdJSON, MRZResultJSON, ProfessionalDrivingPermitJSON, RejectedIdJSON, SouthAfricaDlBarcodeResultJSON, SouthAfricaIdBarcodeResultJSON, StringComparisonCheckJSON, USUniformedServicesBarcodeResultJSON, VehicleRestrictionJSON, VIZResultJSON } from './SerializedTypes';
import { ComparisonCheckResult } from 'Enums';
export interface PrivateCommonCapturedIdFields {
    fromJSON(json: CommonCapturedIdFieldsJSON | null): CommonCapturedIdFields;
}
export interface PrivateDateResult {
    fromJSON(json: DateResultJSON | null): DateResult;
}
export interface PrivateProfessionalDrivingPermit {
    fromJSON(json: ProfessionalDrivingPermitJSON | null): ProfessionalDrivingPermit;
}
export interface PrivateVehicleRestriction {
    fromJSON(json: VehicleRestrictionJSON | null): VehicleRestriction;
}
export interface PrivateAAMVABarcodeResult {
    fromJSON(json: AAMVABarcodeResultJSON): AAMVABarcodeResult;
}
export interface PrivateAamvaBarcodeVerificationResult {
    fromJSON(json: AamvaBarcodeVerificationResultJSON): AamvaBarcodeVerificationResult;
}
export interface PrivateArgentinaIdBarcodeResult {
    fromJSON(json: ArgentinaIdBarcodeResultJSON): ArgentinaIdBarcodeResult;
}
export interface PrivateColombiaIdBarcodeResult {
    fromJSON(json: ColombiaIdBarcodeResultJSON): ColombiaIdBarcodeResult;
}
export interface PrivateColombiaDlBarcodeResult {
    fromJSON(json: ColombiaDlBarcodeResultJSON): ColombiaDlBarcodeResult;
}
export interface PrivateMRZResult {
    fromJSON(json: MRZResultJSON): MRZResult;
}
export interface PrivateUSUniformedServicesBarcodeResult {
    fromJSON(json: USUniformedServicesBarcodeResultJSON): USUniformedServicesBarcodeResult;
}
export interface PrivateVIZResult {
    fromJSON(json: VIZResultJSON): VIZResult;
}
export interface PrivateSouthAfricaIdBarcodeResult {
    fromJSON(json: SouthAfricaIdBarcodeResultJSON): SouthAfricaIdBarcodeResult;
}
export interface PrivateSouthAfricaDlBarcodeResult {
    fromJSON(json: SouthAfricaDlBarcodeResultJSON): SouthAfricaDlBarcodeResult;
}
export interface PrivateCapturedId {
    fromJSON(json: CapturedIdJSON): CapturedId;
}
export interface PrivateLocalizedId {
    fromJSON(json: LocalizedIdJSON): LocalizedOnlyId;
}
export interface PrivateRejectedId {
    fromJSON(json: RejectedIdJSON): RejectedId;
}
export interface PrivateStringComparisonCheck {
    fromJSON(json: StringComparisonCheckJSON): StringComparisonCheck;
}
export interface PrivateDateComparisonCheck {
    fromJSON(json: DateComparisonCheckJSON): DateComparisonCheck;
}
export interface PrivateAamvaVizBarcodeComparisonResult {
    fromJSON(json: AamvaVizBarcodeComparisonResultJSON): AamvaVizBarcodeComparisonResult;
}
export interface PrivateChinaMainlandTravelPermitMrzResult {
    fromJSON(json: ChinaMainlandTravelPermitMRZResultJSON): ChinaMainlandTravelPermitMRZResult;
}
export interface PrivateChinaExitEntryPermitMRZResult {
    fromJSON(json: ChinaExitEntryPermitMRZResultJSON): ChinaExitEntryPermitMRZResult;
}
export interface PrivateChinaOneWayPermitBackMrzResult {
    fromJSON(json: ChinaOneWayPermitBackMrzResultJSON): ChinaOneWayPermitBackMrzResult;
}
export interface PrivateChinaOneWayPermitFrontMrzResult {
    fromJSON(json: ChinaOneWayPermitFrontMrzResultJSON): ChinaOneWayPermitFrontMrzResult;
}
export interface PrivateApecBusinessTravelCardMrzResult {
    fromJSON(json: ApecBusinessTravelCardMrzResultJSON): ApecBusinessTravelCardMrzResult;
}
export declare class StringComparisonCheck implements ComparisonCheck<string> {
    private json;
    get vizValue(): string | null;
    get aamvaBarcodeValue(): string | null;
    get checkResult(): ComparisonCheckResult;
    get resultDescription(): string;
    private static fromJSON;
}
export declare class DateComparisonCheck implements ComparisonCheck<DateResult> {
    private json;
    get vizValue(): DateResult | null;
    get aamvaBarcodeValue(): DateResult | null;
    get checkResult(): ComparisonCheckResult;
    get resultDescription(): string;
    private static fromJSON;
}
export declare class CommonCapturedIdFields {
    private json;
    get firstName(): string | null;
    get lastName(): string | null;
    get fullName(): string;
    get sex(): string | null;
    get dateOfBirth(): DateResult | null;
    get age(): number | null;
    get isExpired(): boolean | null;
    get nationality(): string | null;
    get address(): string | null;
    get documentType(): string | null;
    get documentNumber(): string | null;
    get issuingCountry(): string | null;
    get issuingCountryIso(): string | null;
    get dateOfExpiry(): DateResult | null;
    get dateOfIssue(): DateResult | null;
    private static fromJSON;
}
