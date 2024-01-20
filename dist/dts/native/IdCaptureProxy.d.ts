import { IdCaptureProxy } from 'scandit-datacapture-frameworks-id';
export declare class NativeIdCaptureProxy implements IdCaptureProxy {
    resetMode(): Promise<void>;
    verifyCapturedId(capturedId: string): Promise<string | null>;
    createContextForBarcodeVerification(contextJSON: string): Promise<void>;
    verifyCapturedIdAsync(capturedId: string): Promise<string | null>;
    setModeEnabledState(enabled: boolean): void;
}
