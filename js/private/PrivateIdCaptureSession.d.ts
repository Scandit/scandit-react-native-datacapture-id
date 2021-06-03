import { IdCaptureError } from '../IdCapture+Related';
import { IdCaptureSession } from '../IdCaptureSession';
import { IdCaptureSessionJSON } from './SerializedTypes';
export interface PrivateIdCaptureSession {
    _error: IdCaptureError | null;
    fromJSON(json: IdCaptureSessionJSON): IdCaptureSession;
}
