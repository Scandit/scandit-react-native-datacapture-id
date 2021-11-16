import { IdCapture } from '../IdCapture';
export declare class IdCaptureListenerProxy {
    private mode;
    private nativeListeners;
    static forIdCapture(textCapture: IdCapture): IdCaptureListenerProxy;
    subscribeListener(): void;
    unsubscribeListener(): void;
    private notifyListenersOfDidCapture;
    private notifyListenersOfDidLocalize;
    private notifyListenersOfDidReject;
    private notifyListenersOfDidFail;
}
