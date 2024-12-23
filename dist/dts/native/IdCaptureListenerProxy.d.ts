import { IdCaptureListenerProxy } from 'scandit-datacapture-frameworks-id';
export declare class NativeIdCaptureListenerProxy implements IdCaptureListenerProxy {
    private nativeListeners;
    private eventEmitter;
    constructor();
    isModeEnabled: () => boolean;
    subscribeDidCaptureListener(): void;
    subscribeDidLocalizeListener(): void;
    subscribeDidRejectListener(): void;
    subscribeDidTimeOutListener(): void;
    unregisterListenerForEvents(): void;
    finishDidCaptureCallback(isEnabled: boolean): void;
    finishDidLocalizeCallback(isEnabled: boolean): void;
    finishDidRejectCallback(isEnabled: boolean): void;
    finishDidTimeOutCallback(isEnabled: boolean): void;
}
