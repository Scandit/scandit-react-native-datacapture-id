import { CameraOwnershipHelper, FactoryMaker, createNativeProxy } from 'scandit-react-native-datacapture-core/dist/core';
import { FrameSourceState, CameraPosition, DataCaptureView, createRNNativeCaller, initCoreDefaults } from 'scandit-react-native-datacapture-core';
import { NativeModules, AppState } from 'react-native';
import { IdCapture, IdCaptureSettings, IdCaptureOverlay, loadIdDefaults } from './id.js';
export { AamvaBarcodeVerificationResult, AamvaBarcodeVerificationStatus, BarcodeResult, CapturedId, CapturedSides, DataConsistencyCheck, DataConsistencyResult, DateResult, DriverLicense, DrivingLicenseCategory, DrivingLicenseDetails, Duration, FullDocumentScanner, HealthInsuranceCard, IdAnonymizationMode, IdCapture, IdCaptureController, IdCaptureDocumentType, IdCaptureFeedback, IdCaptureListenerController, IdCaptureListenerEvents, IdCaptureOverlay, IdCaptureRegion, IdCaptureScanner, IdCaptureSettings, IdCard, IdFieldType, IdImageType, IdImages, IdLayoutLineStyle, IdLayoutStyle, IdSide, MRZResult, MobileDocumentDataElement, MobileDocumentOCRResult, MobileDocumentResult, MobileDocumentScanner, Passport, ProfessionalDrivingPermit, RegionSpecific, RegionSpecificSubtype, RejectionReason, ResidencePermit, Sex, SingleSideScanner, TextHintPosition, UsRealIdStatus, VIZResult, VehicleRestriction, VerificationResult, VisaIcao } from './id.js';
import React, { forwardRef, useImperativeHandle, useState, useMemo, useCallback, useEffect, useRef } from 'react';

function initIdProxy() {
    FactoryMaker.bindLazyInstance('IdCaptureProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureId);
        return createNativeProxy(caller);
    });
    FactoryMaker.bindLazyInstance('IdCaptureListenerProxy', () => {
        const caller = createRNNativeCaller(NativeModules.ScanditDataCaptureId);
        return createNativeProxy(caller);
    });
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
    }), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    /* STATE VARIABLES */
    const [isEnabledState, setIsEnabledState] = useState(false);
    const [frameSourceState, setFrameSourceState] = useState(FrameSourceState.Off);
    const [viewId] = useState(() => Math.floor(Math.random() * 1000000));
    const [isCameraSetup, setIsCameraSetup] = useState(false);
    // Create camera owner using viewId
    const cameraOwner = useMemo(() => ({
        id: `id-capture-view-${viewId}`,
    }), [viewId]);
    /* STATE HANDLERS */
    const getMode = useCallback(() => {
        if (idCaptureModeRef.current !== null) {
            return idCaptureModeRef.current;
        }
        idCaptureModeRef.current = new IdCapture(props.idCaptureSettings || new IdCaptureSettings());
        idCaptureModeRef.current.parentId = viewId;
        return idCaptureModeRef.current;
    }, [props.idCaptureSettings, viewId]);
    useEffect(() => {
        getMode().isEnabled = isEnabledState;
    }, [isEnabledState, getMode]);
    useEffect(() => {
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.switchToDesiredState(frameSourceState);
        });
    }, [frameSourceState, props.desiredCameraPosition, cameraOwner]);
    const viewRef = useRef(null);
    const componentIsSetUp = useRef(false);
    const idCaptureModeRef = useRef(null);
    const idCaptureOverlayRef = useRef(null);
    const getIdCaptureOverlay = useCallback(() => {
        if (idCaptureOverlayRef.current !== null) {
            return idCaptureOverlayRef.current;
        }
        idCaptureOverlayRef.current = new IdCaptureOverlay(getMode());
        return idCaptureOverlayRef.current;
    }, [getMode]);
    // Remove getCamera function as we'll use CameraOwnershipHelper
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
            doDestroy();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const setupCamera = useCallback(async () => {
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        // Request ownership and set up camera
        await CameraOwnershipHelper.withCameraWhenAvailable(position, cameraOwner, async (camera) => {
            const settings = props.cameraSettings || IdCapture.createRecommendedCameraSettings();
            await camera.applySettings(settings);
            await props.context.setFrameSource(camera);
            await camera.switchToDesiredState(props.desiredCameraState || FrameSourceState.On);
            // Mark camera as set up
            setIsCameraSetup(true);
        });
    }, [props.desiredCameraPosition, cameraOwner, props.cameraSettings, props.context, props.desiredCameraState]);
    const doSetup = useCallback(() => {
        if (componentIsSetUp.current)
            return;
        componentIsSetUp.current = true;
        /* Setup camera with ownership - WAIT for completion */
        setupCamera();
        /* Only proceed after camera is ready */
        props.context.removeAllModes();
        props.context.addMode(getMode());
        /* Adding ID Capture Overlay */
        if (viewRef.current) {
            viewRef.current.addOverlay(getIdCaptureOverlay());
        }
    }, [setupCamera, props.context, getMode, getIdCaptureOverlay]);
    const doDestroy = () => {
        doCleanup();
        idCaptureModeRef.current = null;
        torchSwitchControl.current = null;
        zoomSwitchControl.current = null;
        idCaptureOverlayRef.current = null;
    };
    const doCleanup = useCallback(() => {
        if (!componentIsSetUp.current)
            return;
        componentIsSetUp.current = false;
        // Reset camera setup state
        setIsCameraSetup(false);
        /* Remove the torch control */
        if (torchSwitchControl.current) {
            viewRef.current?.removeControl(torchSwitchControl.current);
        }
        /* Remove the zoom control */
        if (zoomSwitchControl.current) {
            viewRef.current?.removeControl(zoomSwitchControl.current);
        }
        /* Cleaning Data Capture Context */
        if (idCaptureModeRef.current) {
            props.context.removeMode(idCaptureModeRef.current);
        }
        /* Cleaning Overlays */
        if (viewRef.current) {
            viewRef.current.view?.overlays?.forEach((overlay) => viewRef.current?.view?.removeOverlay(overlay));
        }
        /* Turn off camera and release ownership */
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.switchToDesiredState(FrameSourceState.Off);
            await props.context.setFrameSource(null);
        }).finally(() => {
            // Release camera ownership
            CameraOwnershipHelper.releaseOwnership(position, cameraOwner);
        });
    }, [props.desiredCameraPosition, cameraOwner, props.context]);
    /* ID CAPTURE MODE */
    useEffect(() => {
        if (props.idCaptureSettings) {
            getMode().applySettings(props.idCaptureSettings);
        }
    }, [props.idCaptureSettings, getMode]);
    useEffect(() => {
        setIsEnabledState(props.isEnabled);
        setFrameSourceState(props.desiredCameraState || FrameSourceState.On);
    }, [props.isEnabled, props.desiredCameraState]);
    const listenerRef = useRef(null);
    const callbacksRef = useRef({ didCaptureId: props.didCaptureId, didRejectId: props.didRejectId });
    // Update callback references when props change
    useEffect(() => {
        callbacksRef.current = { didCaptureId: props.didCaptureId, didRejectId: props.didRejectId };
    }, [props.didCaptureId, props.didRejectId]);
    // Add/remove listener only when needed
    useEffect(() => {
        const setupListeners = async () => {
            const shouldHaveListener = props.didCaptureId || props.didRejectId;
            const hasListener = listenerRef.current !== null;
            if (shouldHaveListener && !hasListener) {
                // Add listener
                listenerRef.current = {
                    didCaptureId: (idCapture, capturedId) => callbacksRef.current.didCaptureId?.(idCapture, capturedId),
                    didRejectId: (idCapture, rejectedId, reason) => callbacksRef.current.didRejectId?.(idCapture, rejectedId, reason),
                };
                await getMode().addListener(listenerRef.current);
            }
            else if (!shouldHaveListener && hasListener && listenerRef.current) {
                // Remove listener
                await getMode().removeListener(listenerRef.current);
                listenerRef.current = null;
            }
        };
        setupListeners();
    }, [props.didCaptureId, props.didRejectId, getMode, listenerRef, callbacksRef]);
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
    }, [props.capturedBrush, props.rejectedBrush, props.localizedBrush, getIdCaptureOverlay]);
    /* CAMERA */
    useEffect(() => {
        if (!isCameraSetup)
            return; // Don't run until camera is ready
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        const settings = props.cameraSettings || IdCapture.createRecommendedCameraSettings();
        CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.applySettings(settings);
        });
    }, [props.cameraSettings, props.desiredCameraPosition, cameraOwner, isCameraSetup]);
    useEffect(() => {
        if (props.desiredCameraState) {
            setFrameSourceState(props.desiredCameraState);
        }
    }, [props.desiredCameraState]);
    useEffect(() => {
        if (props.desiredCameraPosition) {
            // Handle camera position change with ownership
            const currentOwnedPosition = CameraOwnershipHelper.getOwnedPosition(cameraOwner);
            const newPosition = props.desiredCameraPosition;
            if (currentOwnedPosition && currentOwnedPosition !== newPosition) {
                // Release old camera ownership
                CameraOwnershipHelper.releaseOwnership(currentOwnedPosition, cameraOwner);
                // Set up new camera
                setupCamera();
            }
            else if (!currentOwnedPosition) {
                // No camera owned yet, set up new camera
                setupCamera();
            }
        }
    }, [props.desiredCameraPosition, cameraOwner, setupCamera]);
    /* CONTROLS */
    useEffect(() => {
        if (props.desiredTorchState) {
            const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
            CameraOwnershipHelper.withCameraWhenAvailable(position, cameraOwner, async (camera) => {
                camera.desiredTorchState = props.desiredTorchState;
            });
        }
    }, [props.desiredTorchState, props.desiredCameraPosition, cameraOwner]);
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
    }, [props.feedback, getMode]);
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
    }, [props.navigation, doSetup, doCleanup]);
    return React.createElement(DataCaptureView, { context: props.context, parentId: viewId, style: { flex: 1 }, ref: viewRef });
});

initIdDefaults();
initIdProxy();

export { IdCaptureView };
