import { IdCapture } from './IdCapture';
import { IdCaptureError } from './IdCapture+Related';
import { IdCaptureSession } from './IdCaptureSession';
export interface IdCaptureListener {
    didCaptureId?(idCapture: IdCapture, session: IdCaptureSession): void;
    didLocalizeId?(idCapture: IdCapture, session: IdCaptureSession): void;
    didRejectId?(idCapture: IdCapture, session: IdCaptureSession): void;
    didFailWithError?(idCapture: IdCapture, error: IdCaptureError, session: IdCaptureSession): void;
}
