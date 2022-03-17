import { AAMVABarcodeResult, AamvaVizBarcodeComparisonResult, ArgentinaIdBarcodeResult, CapturedId, ColombiaIdBarcodeResult, ComparisonCheck, DateResult, LocalizedOnlyId, MRZResult, ProfessionalDrivingPermit, RejectedId, SouthAfricaDlBarcodeResult, SouthAfricaIdBarcodeResult, USUniformedServicesBarcodeResult, VehicleRestriction, VIZResult } from '../CapturedId';
import { AAMVABarcodeResultJSON, AamvaVizBarcodeComparisonResultJSON, ArgentinaIdBarcodeResultJSON, CapturedIdJSON, ColombiaIdBarcodeResultJSON, DateComparisonCheckJSON, DateResultJSON, LocalizedIdJSON, MRZResultJSON, ProfessionalDrivingPermitJSON, RejectedIdJSON, SouthAfricaDlBarcodeResultJSON, SouthAfricaIdBarcodeResultJSON, StringComparisonCheckJSON, USUniformedServicesBarcodeResultJSON, VehicleRestrictionJSON, VIZResultJSON } from './SerializedTypes';
import { ComparisonCheckResult } from 'Enums';
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
export interface PrivateArgentinaIdBarcodeResult {
    fromJSON(json: ArgentinaIdBarcodeResultJSON): ArgentinaIdBarcodeResult;
}
export interface PrivateColombiaIdBarcodeResult {
    fromJSON(json: ColombiaIdBarcodeResultJSON): ColombiaIdBarcodeResult;
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
