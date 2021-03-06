import { IdCapture } from '../IdCapture';
export declare class IdCaptureProxy {
    private mode;
    static forIdCapture(idCapture: IdCapture): IdCaptureProxy;
    reset(): Promise<void>;
    verifyCapturedId(capturedId: string): Promise<string | null>;
}
