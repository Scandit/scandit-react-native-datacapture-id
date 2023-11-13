import { IdCapture } from '../IdCapture';
import { DataCaptureContext } from 'scandit-react-native-datacapture-core';
export declare class IdCaptureProxy {
    private mode;
    static forIdCapture(idCapture: IdCapture): IdCaptureProxy;
    reset(): Promise<void>;
    verifyCapturedId(capturedId: string): Promise<string | null>;
    createContextForCloudVerification(context: DataCaptureContext): Promise<string | null>;
    verifyCapturedIdAsync(capturedId: string): Promise<string | null>;
}
