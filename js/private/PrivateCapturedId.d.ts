import { AAMVABarcodeResult, ArgentinaIdBarcodeResult, CapturedId, ColombiaIdBarcodeResult, DateResult, MRZResult, ProfessionalDrivingPermit, SouthAfricaDlBarcodeResult, SouthAfricaIdBarcodeResult, USUniformedServicesBarcodeResult, VehicleRestriction, VIZResult } from '../CapturedId';
import { AAMVABarcodeResultJSON, ArgentinaIdBarcodeResultJSON, CapturedIdJSON, ColombiaIdBarcodeResultJSON, DateResultJSON, MRZResultJSON, ProfessionalDrivingPermitJSON, SouthAfricaDlBarcodeResultJSON, SouthAfricaIdBarcodeResultJSON, USUniformedServicesBarcodeResultJSON, VehicleRestrictionJSON, VIZResultJSON } from './SerializedTypes';
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
