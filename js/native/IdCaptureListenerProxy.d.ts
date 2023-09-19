import { IdCapture } from '../IdCapture';
export declare class IdCaptureListenerProxy {
    private mode;
    private nativeListeners;
    static forIdCapture(idCapture: IdCapture): IdCaptureListenerProxy;
    subscribeListener(): void;
    unsubscribeListener(): void;
    private notifyListenersOfDidCapture;
    private notifyListenersOfDidLocalize;
    private notifyListenersOfDidReject;
    private notifyListenersOfDidTimeOut;
}
