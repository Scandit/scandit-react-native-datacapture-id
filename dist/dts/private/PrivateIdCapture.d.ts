import { DataCaptureContext, PrivateDataCaptureMode } from 'scandit-datacapture-frameworks-core';
import { IdCaptureError, IdCaptureErrorJSON, IdCaptureListener } from 'scandit-datacapture-frameworks-id';
export interface PrivateIdCaptureError {
    fromJSON(json: IdCaptureErrorJSON): IdCaptureError;
}
export interface PrivateIdCapture extends PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
    isInListenerCallback: boolean;
    listeners: IdCaptureListener[];
    didChange: () => Promise<void>;
}
