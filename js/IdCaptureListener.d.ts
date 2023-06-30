import { FrameData } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { IdCapture } from './IdCapture';
import { IdCaptureError } from './IdCapture+Related';
import { IdCaptureSession } from './IdCaptureSession';
export interface IdCaptureListener {
    didCaptureId?(idCapture: IdCapture, session: IdCaptureSession, getFrameData: () => Promise<FrameData>): void;
    didLocalizeId?(idCapture: IdCapture, session: IdCaptureSession, getFrameData: () => Promise<FrameData>): void;
    didRejectId?(idCapture: IdCapture, session: IdCaptureSession, getFrameData: () => Promise<FrameData>): void;
    /**
     * @deprecated This method is no longer executed by the listener.
     * See didRejectId and didTimeoutInSession for scenarios previously reported by this callback.
     */
    didFailWithError?(idCapture: IdCapture, error: IdCaptureError, session: IdCaptureSession, getFrameData: () => Promise<FrameData>): void;
    didTimeoutInSession?(idCapture: IdCapture, session: IdCaptureSession, getFrameData: () => Promise<FrameData>): void;
}
