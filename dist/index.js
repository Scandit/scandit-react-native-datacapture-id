import { ScreenStateManager, FactoryMaker, createNativeProxy } from 'scandit-react-native-datacapture-core/dist/core';
import { NativeModules, NativeEventEmitter, AppState } from 'react-native';
import { IdCapture, IdCaptureSettings, loadIdDefaults, IdCaptureOverlay, IdCaptureListenerEvents } from './id.js';
export { AamvaBarcodeVerificationResult, AamvaBarcodeVerificationStatus, AamvaBarcodeVerifier, BarcodeResult, CapturedId, CapturedSides, DateResult, DriverLicense, Duration, FullDocumentScanner, HealthInsuranceCard, IdAnonymizationMode, IdCapture, IdCaptureController, IdCaptureDocumentType, IdCaptureFeedback, IdCaptureListenerController, IdCaptureListenerEvents, IdCaptureOverlay, IdCaptureRegion, IdCaptureSettings, IdCard, IdImageType, IdImages, IdLayoutLineStyle, IdLayoutStyle, IdSide, MRZResult, Passport, ProfessionalDrivingPermit, RegionSpecific, RegionSpecificSubtype, RejectionReason, ResidencePermit, SingleSideScanner, TextHintPosition, UsRealIdStatus, VIZResult, VehicleRestriction, VisaIcao } from './id.js';
import { FrameSourceState, Camera, CameraPosition, DataCaptureView, createRNNativeCaller, initCoreDefaults } from 'scandit-react-native-datacapture-core';
import React, { forwardRef, useImperativeHandle, useState, useEffect, useRef, useMemo } from 'react';

// tslint:disable:variable-name
const NativeModule$1 = NativeModules.ScanditDataCaptureId;
new NativeEventEmitter(NativeModule$1);
// tslint:enable:variable-name
class NativeIdCaptureProxy {
    resetMode() {
        return NativeModule$1.reset();
    }
    createContextForBarcodeVerification(contextJSON) {
        return NativeModule$1.createContextForBarcodeVerification(contextJSON);
    }
    verifyCapturedIdAsync(capturedId) {
        return NativeModule$1.verifyCapturedIdAsync(capturedId);
    }
    setModeEnabledState(enabled) {
        NativeModule$1.setModeEnabledState(enabled);
    }
    updateIdCaptureMode(modeJson) {
        return NativeModule$1.updateIdCaptureMode(modeJson);
    }
    applyIdCaptureModeSettings(newSettingsJson) {
        return NativeModule$1.applyIdCaptureModeSettings(newSettingsJson);
    }
    updateFeedback(feedbackJson) {
        return NativeModule$1.updateIdCaptureFeedback(feedbackJson);
    }
}

// tslint:disable:variable-name
const NativeModule = NativeModules.ScanditDataCaptureId;
const RNEventEmitter = new NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
class NativeIdCaptureListenerProxy {
    nativeListeners = [];
    eventEmitter;
    constructor() {
        this.eventEmitter = FactoryMaker.getInstance('EventEmitter');
    }
    isModeEnabled = () => false;
    subscribeDidCaptureListener() {
        const didCaptureListener = RNEventEmitter.addListener(IdCaptureListenerEvents.didCapture, (event) => {
            this.eventEmitter.emit(IdCaptureListenerEvents.didCapture, event.data);
        });
        this.nativeListeners.push(didCaptureListener);
    }
    subscribeDidRejectListener() {
        const didRejectListener = RNEventEmitter.addListener(IdCaptureListenerEvents.didReject, (event) => {
            this.eventEmitter.emit(IdCaptureListenerEvents.didReject, event.data);
        });
        this.nativeListeners.push(didRejectListener);
    }
    unregisterListenerForEvents() {
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
    }
    finishDidCaptureCallback(isEnabled) {
        NativeModule.finishDidCaptureCallback(isEnabled);
    }
    finishDidLocalizeCallback(isEnabled) {
        NativeModule.finishDidLocalizeCallback(isEnabled);
    }
    finishDidRejectCallback(isEnabled) {
        NativeModule.finishDidRejectCallback(isEnabled);
    }
    finishDidTimeOutCallback(isEnabled) {
        NativeModule.finishDidTimeOutCallback(isEnabled);
    }
}

function initIdProxy() {
    FactoryMaker.bindInstance('IdCaptureProxy', new NativeIdCaptureProxy());
    FactoryMaker.bindInstance('IdCaptureListenerProxy', new NativeIdCaptureListenerProxy());
    FactoryMaker.bindLazyInstance('IdCaptureOverlayProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureId);
        return createNativeProxy(caller);
    });
}

const dataCaptureId = NativeModules.ScanditDataCaptureId;
function initIdDefaults() {
    initCoreDefaults();
    loadIdDefaults(dataCaptureId.Defaults);
}

// tslint:disable-next-line
const IdCaptureView = forwardRef(function IdCaptureView(props, ref) {
    useImperativeHandle(ref, () => ({
        reset() {
            getMode().reset();
        },
    }), []);
    /* STATE VARIABLES */
    const [isEnabledState, setIsEnabledState] = useState(false);
    const [frameSourceState, setFrameSourceState] = useState(FrameSourceState.Off);
    /* STATE HANDLERS */
    useEffect(() => {
        getMode().isEnabled = isEnabledState;
    }, [isEnabledState]);
    useEffect(() => {
        if (screenStateManager.isScreenActive(viewId.current)) {
            getCamera()?.switchToDesiredState(frameSourceState);
        }
    }, [frameSourceState]);
    const viewRef = useRef(null);
    const componentIsSetUp = useRef(false);
    const viewId = useRef(Math.floor(Math.random() * 1000000));
    const screenStateManager = useMemo(() => {
        return ScreenStateManager.getInstance();
    }, []);
    const idCaptureModeRef = useRef(null);
    function getMode() {
        if (idCaptureModeRef.current !== null) {
            return idCaptureModeRef.current;
        }
        idCaptureModeRef.current = IdCapture.forContext(null, props.idCaptureSettings || new IdCaptureSettings());
        return idCaptureModeRef.current;
    }
    const idCaptureOverlayRef = useRef(null);
    function getIdCaptureOverlay() {
        if (idCaptureOverlayRef.current !== null) {
            return idCaptureOverlayRef.current;
        }
        idCaptureOverlayRef.current = new IdCaptureOverlay(getMode());
        return idCaptureOverlayRef.current;
    }
    const cameraRef = useRef(null);
    function getCamera() {
        if (cameraRef.current !== null) {
            return cameraRef.current;
        }
        cameraRef.current = Camera.asPositionWithSettings(props.desiredCameraPosition || CameraPosition.WorldFacing, props.cameraSettings || IdCapture.recommendedCameraSettings);
        return cameraRef.current;
    }
    const torchSwitchControl = useRef(null);
    const zoomSwitchControl = useRef(null);
    const appState = useRef(AppState.currentState);
    /* SETUP */
    useEffect(() => {
        doSetup();
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
                setIsEnabledState(props.isEnabled);
                setFrameSourceState(props.desiredCameraState || FrameSourceState.On);
            }
            else {
                setIsEnabledState(false);
                setFrameSourceState(FrameSourceState.Off);
            }
            appState.current = nextAppState;
        });
        return () => {
            subscription.remove();
            doCleanup();
        };
    }, []);
    const doSetup = () => {
        screenStateManager.setActiveScreen(viewId.current);
        if (componentIsSetUp.current)
            return;
        componentIsSetUp.current = true;
        /* Handling Data Capture Context */
        props.context.setFrameSource(getCamera());
        props.context.removeAllModes();
        props.context.addMode(getMode());
        /* Adding ID Capture Overlay */
        if (viewRef.current) {
            viewRef.current.addOverlay(getIdCaptureOverlay());
        }
    };
    const doCleanup = () => {
        if (!componentIsSetUp.current)
            return;
        componentIsSetUp.current = false;
        /* Remove the torch control */
        if (torchSwitchControl.current) {
            viewRef.current?.removeControl(torchSwitchControl.current);
        }
        /* Remove the zoom control */
        if (zoomSwitchControl.current) {
            viewRef.current?.removeControl(zoomSwitchControl.current);
        }
        /* Closing the camera if camera is active */
        if (screenStateManager.isScreenActive(viewId.current)) {
            getCamera()?.switchToDesiredState(FrameSourceState.Off);
            props.context.setFrameSource(null);
        }
        /* Cleaning Data Capture Context */
        if (idCaptureModeRef.current) {
            props.context.removeMode(idCaptureModeRef.current);
        }
        idCaptureModeRef.current = null;
        /* Cleaning Overlays */
        if (viewRef.current) {
            viewRef.current.view?.overlays?.forEach((overlay) => viewRef.current?.view?.removeOverlay(overlay));
        }
    };
    /* ID CAPTURE MODE */
    useEffect(() => {
        if (props.idCaptureSettings) {
            getMode().applySettings(props.idCaptureSettings);
        }
    }, [props.idCaptureSettings]);
    useEffect(() => {
        setIsEnabledState(props.isEnabled);
        setFrameSourceState(props.desiredCameraState || FrameSourceState.On);
    }, [props.isEnabled]);
    useEffect(() => {
        const listeners = [...getMode().listeners];
        listeners.forEach((listener) => {
            getMode().removeListener(listener);
        });
        if (props.didCaptureId || props.didRejectId) {
            getMode().addListener({
                didCaptureId: props.didCaptureId,
                didRejectId: props.didRejectId,
            });
        }
    }, [props.didCaptureId, props.didRejectId]);
    /* OVERLAYS */
    useEffect(() => {
        if (props.capturedBrush) {
            getIdCaptureOverlay().capturedBrush = props.capturedBrush;
        }
        if (props.rejectedBrush) {
            getIdCaptureOverlay().rejectedBrush = props.rejectedBrush;
        }
        if (props.localizedBrush) {
            getIdCaptureOverlay().localizedBrush = props.localizedBrush;
        }
    }, [props.capturedBrush, props.rejectedBrush, props.localizedBrush]);
    /* CAMERA */
    useEffect(() => {
        getCamera()?.applySettings(props.cameraSettings || IdCapture.recommendedCameraSettings);
    }, [props.cameraSettings]);
    useEffect(() => {
        if (props.desiredCameraState && screenStateManager.isScreenActive(viewId.current)) {
            setFrameSourceState(props.desiredCameraState);
        }
    }, [props.desiredCameraState]);
    useEffect(() => {
        if (props.desiredCameraPosition) {
            setFrameSourceState(FrameSourceState.Off);
            props.context.setFrameSource(null).then(() => {
                cameraRef.current = Camera.asPositionWithSettings(props.desiredCameraPosition || CameraPosition.WorldFacing, props.cameraSettings || IdCapture.recommendedCameraSettings);
                props.context.setFrameSource(getCamera()).then(() => {
                    setFrameSourceState(props.desiredCameraState || FrameSourceState.On);
                });
            });
        }
    }, [props.desiredCameraPosition]);
    /* CONTROLS */
    useEffect(() => {
        if (props.desiredTorchState) {
            getCamera().desiredTorchState = props.desiredTorchState;
        }
    }, [props.desiredTorchState]);
    useEffect(() => {
        if (!viewRef.current)
            return;
        if (torchSwitchControl.current) {
            viewRef.current?.removeControl(torchSwitchControl.current);
        }
        if (!props.torchSwitchControl)
            return;
        torchSwitchControl.current = props.torchSwitchControl;
        viewRef.current.addControl(torchSwitchControl.current);
    }, [props.torchSwitchControl]);
    useEffect(() => {
        if (!viewRef.current)
            return;
        if (zoomSwitchControl.current) {
            viewRef.current?.removeControl(zoomSwitchControl.current);
        }
        if (!props.zoomSwitchControl)
            return;
        zoomSwitchControl.current = props.zoomSwitchControl;
        viewRef.current.addControl(zoomSwitchControl.current);
    }, [props.zoomSwitchControl]);
    /* MISC */
    useEffect(() => {
        if (props.feedback) {
            getMode().feedback = props.feedback;
        }
    }, [props.feedback]);
    useEffect(() => {
        if (!props.navigation)
            return;
        try {
            const unsubscribeFromFocus = props.navigation.addListener('focus', () => {
                doSetup();
            });
            const unsubscribeFromBlur = props.navigation.addListener('blur', () => {
                doCleanup();
            });
            return () => {
                unsubscribeFromFocus();
                unsubscribeFromBlur();
            };
        }
        catch (e) {
            // tslint:disable-next-line:no-console
            console.error(e);
        }
    }, [props.navigation]);
    return React.createElement(DataCaptureView, { context: props.context, style: { flex: 1 }, ref: viewRef });
});

initIdDefaults();
initIdProxy();

export { IdCaptureView };
