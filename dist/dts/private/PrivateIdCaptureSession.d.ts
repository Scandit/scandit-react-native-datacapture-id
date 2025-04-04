import { IdCaptureError, IdCaptureSession, IdCaptureSessionJSON } from 'scandit-datacapture-frameworks-id';
export interface PrivateIdCaptureSession {
    _error: IdCaptureError | null;
    fromJSON(json: IdCaptureSessionJSON): IdCaptureSession;
}
export interface PrivateIdCaptureSessionEventPayload {
    session: string;
}
