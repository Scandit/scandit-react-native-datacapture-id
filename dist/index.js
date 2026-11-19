import { setIdDefaultsLoader, IdCapture, IdCaptureSettings, IdCaptureOverlay, registerIdProxies, loadIdDefaults, ID_PROXY_TYPE_NAMES } from './id.js';
export { AamvaBarcodeVerificationResult, AamvaBarcodeVerificationStatus, BarcodeResult, CapturedId, CapturedSides, DataConsistencyCheck, DataConsistencyResult, DateResult, DriverLicense, DrivingLicenseCategory, DrivingLicenseDetails, Duration, FullDocumentScanner, HealthInsuranceCard, IdAnonymizationMode, IdCapture, IdCaptureDocumentType, IdCaptureFeedback, IdCaptureOverlay, IdCaptureRegion, IdCaptureScanner, IdCaptureSettings, IdCard, IdFieldType, IdImageType, IdImages, IdLayoutLineStyle, IdLayoutStyle, IdSide, MRZResult, MobileDocumentDataElement, MobileDocumentOCRResult, MobileDocumentResult, MobileDocumentScanner, Passport, ProfessionalDrivingPermit, RegionSpecific, RegionSpecificSubtype, RejectionReason, ResidencePermit, Sex, SingleSideScanner, TextHintPosition, UsRealIdStatus, VIZResult, VehicleRestriction, VerificationResult, VisaIcao } from './id.js';
import { FrameSourceState, CameraPosition, DataCaptureView, _internal, initCoreDefaults, getModuleDefaults, getNativeModule, createRNNativeCaller } from 'scandit-react-native-datacapture-core';
import React, { forwardRef, useImperativeHandle, useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { CameraOwnershipHelper } from 'scandit-react-native-datacapture-core/dist/core';

class RNIdNativeCallerProvider {
    getNativeCaller(proxyType) {
        if (!ID_PROXY_TYPE_NAMES.includes(proxyType)) {
            throw new Error(`No native module mapped for proxy type: ${proxyType}`);
        }
        // Use getNativeModule which handles both TurboModules and legacy modules
        const nativeModule = getNativeModule('ScanditDataCaptureId');
        return createRNNativeCaller(nativeModule);
    }
}

function initIdProxy() {
    registerIdProxies(new RNIdNativeCallerProvider());
}

function initIdDefaults() {
    initCoreDefaults();
    loadIdDefaults(getModuleDefaults('ScanditDataCaptureId'));
}
setIdDefaultsLoader(initIdDefaults);

// tslint:disable-next-line
const IdCaptureView$1 = forwardRef(function IdCaptureView(props, ref) {
    useImperativeHandle(ref, () => ({
        reset() {
            void getMode().reset();
        },
    }), []);
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
        idCaptureModeRef.current['parentId'] = viewId;
        return idCaptureModeRef.current;
    }, [props.idCaptureSettings, viewId]);
    useEffect(() => {
        getMode().isEnabled = isEnabledState;
    }, [isEnabledState, getMode]);
    useEffect(() => {
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
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
        /* Setup camera with ownership - Fire-and-forget */
        void setupCamera();
        /* Only proceed after camera is ready - these operations are async but errors are handled internally */
        void props.context.removeAllModes();
        void props.context.addMode(getMode());
        /* Adding ID Capture Overlay */
        if (viewRef.current) {
            void viewRef.current.addOverlay(getIdCaptureOverlay());
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
            void props.context.removeMode(idCaptureModeRef.current);
        }
        /* Cleaning Overlays */
        if (viewRef.current) {
            viewRef.current['view']?.overlays?.forEach(overlay => {
                void viewRef.current?.['view']?.removeOverlay(overlay);
            });
        }
        /* Turn off camera and release ownership - Fire-and-forget cleanup */
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
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
            void getMode().applySettings(props.idCaptureSettings);
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
        void (async () => {
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
        })();
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
    useEffect(() => {
        const overlay = getIdCaptureOverlay();
        if (props.idLayoutStyle != null)
            overlay.idLayoutStyle = props.idLayoutStyle;
        if (props.idLayoutLineStyle != null)
            overlay.idLayoutLineStyle = props.idLayoutLineStyle;
        if (props.showTextHints != null)
            overlay.showTextHints = props.showTextHints;
        if (props.textHintPosition != null)
            overlay.textHintPosition = props.textHintPosition;
        if (props.frontSideTextHint)
            overlay.setFrontSideTextHint(props.frontSideTextHint);
        if (props.backSideTextHint)
            overlay.setBackSideTextHint(props.backSideTextHint);
    }, [
        props.idLayoutStyle,
        props.idLayoutLineStyle,
        props.showTextHints,
        props.textHintPosition,
        props.frontSideTextHint,
        props.backSideTextHint,
        getIdCaptureOverlay,
    ]);
    useEffect(() => {
        if (props.externalTransactionId !== undefined) {
            getMode().externalTransactionId = props.externalTransactionId || null;
        }
    }, [props.externalTransactionId, getMode]);
    /* CAMERA */
    useEffect(() => {
        if (!isCameraSetup)
            return; // Don't run until camera is ready
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        const settings = props.cameraSettings || IdCapture.createRecommendedCameraSettings();
        void CameraOwnershipHelper.withCamera(position, cameraOwner, async (camera) => {
            await camera.applySettings(settings);
        });
    }, [props.cameraSettings, props.desiredCameraPosition, cameraOwner, isCameraSetup]);
    useEffect(() => {
        if (props.desiredCameraState) {
            setFrameSourceState(props.desiredCameraState);
        }
    }, [props.desiredCameraState]);
    useEffect(() => {
        if (!props.desiredCameraPosition)
            return;
        void (async () => {
            // Handle camera position change with ownership
            const currentOwnedPosition = CameraOwnershipHelper.getOwnedPosition(cameraOwner);
            const newPosition = props.desiredCameraPosition;
            if (currentOwnedPosition && currentOwnedPosition !== newPosition) {
                // Release old camera ownership
                CameraOwnershipHelper.releaseOwnership(currentOwnedPosition, cameraOwner);
                // Set up new camera
                await setupCamera();
            }
            else if (!currentOwnedPosition) {
                // No camera owned yet, set up new camera
                await setupCamera();
            }
        })();
    }, [props.desiredCameraPosition, cameraOwner, setupCamera]);
    /* CONTROLS */
    useEffect(() => {
        if (!props.desiredTorchState)
            return;
        const position = props.desiredCameraPosition || CameraPosition.WorldFacing;
        void CameraOwnershipHelper.withCameraWhenAvailable(position, cameraOwner, camera => {
            camera.desiredTorchState = props.desiredTorchState;
        });
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
        void viewRef.current.addControl(torchSwitchControl.current);
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
        void viewRef.current.addControl(zoomSwitchControl.current);
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

function buildSettings(settings) {
    return settings ?? new IdCaptureSettings();
}
const IdCaptureView = forwardRef(function IdCaptureView(props, ref) {
    const idCaptureSettings = _internal.useStableProp(props.idCaptureSettings);
    const basicOverlayCapturedBrush = _internal.useStableProp(props.basicOverlay?.capturedBrush);
    const basicOverlayRejectedBrush = _internal.useStableProp(props.basicOverlay?.rejectedBrush);
    const basicOverlayLocalizedBrush = _internal.useStableProp(props.basicOverlay?.localizedBrush);
    const torchSwitchControl = _internal.useStableProp(props.torchSwitchControl);
    const zoomSwitchControl = _internal.useStableProp(props.zoomSwitchControl);
    const feedback = _internal.useStableProp(props.feedback);
    const context = _internal.useDataCaptureContextInternal();
    // Provider-camera view: a shared claim keeps the provider camera on while
    // this view is enabled; the claim engine coexists with other shared views
    // and yields to exclusive (own-camera) views. Replaces the deleted
    // useCameraControl/setFrameSourceState surface.
    const [cameraActive, setCameraActive] = useState(false);
    const viewHandle = _internal.useViewHandle();
    const cameraClaim = _internal.useCameraClaim({
        mode: 'shared',
        active: cameraActive,
        nativeViewRef: viewHandle.mutableRef,
    });
    const viewRef = viewHandle.mutableRef;
    const viewState = viewHandle.current;
    const viewRefCallback = viewHandle.ref;
    const viewId = viewHandle.id;
    const resolveSettings = useCallback(() => buildSettings(idCaptureSettings), [idCaptureSettings]);
    const basicOverlayIdLayoutStyle = props.basicOverlay?.idLayoutStyle;
    const basicOverlayIdLayoutLineStyle = props.basicOverlay?.idLayoutLineStyle;
    const basicOverlayShowTextHints = props.basicOverlay?.showTextHints;
    const basicOverlayTextHintPosition = props.basicOverlay?.textHintPosition;
    const basicOverlayFrontSideTextHint = props.basicOverlay?.frontSideTextHint;
    const basicOverlayBackSideTextHint = props.basicOverlay?.backSideTextHint;
    const basicOverlay = _internal.useOverlay({
        view: viewRef,
        enabled: props.basicOverlay?.enabled !== false,
        factory: () => new IdCaptureOverlay(getMode()),
        factoryDeps: [],
        update: overlay => {
            if (basicOverlayCapturedBrush !== undefined)
                overlay.capturedBrush = basicOverlayCapturedBrush;
            if (basicOverlayRejectedBrush !== undefined)
                overlay.rejectedBrush = basicOverlayRejectedBrush;
            if (basicOverlayLocalizedBrush !== undefined)
                overlay.localizedBrush = basicOverlayLocalizedBrush;
            if (basicOverlayIdLayoutStyle !== undefined)
                overlay.idLayoutStyle = basicOverlayIdLayoutStyle;
            if (basicOverlayIdLayoutLineStyle !== undefined)
                overlay.idLayoutLineStyle = basicOverlayIdLayoutLineStyle;
            if (basicOverlayShowTextHints !== undefined)
                overlay.showTextHints = basicOverlayShowTextHints;
            if (basicOverlayTextHintPosition !== undefined)
                overlay.textHintPosition = basicOverlayTextHintPosition;
            if (basicOverlayFrontSideTextHint !== undefined)
                overlay.setFrontSideTextHint(basicOverlayFrontSideTextHint);
            if (basicOverlayBackSideTextHint !== undefined)
                overlay.setBackSideTextHint(basicOverlayBackSideTextHint);
        },
        updateDeps: [
            basicOverlayCapturedBrush,
            basicOverlayRejectedBrush,
            basicOverlayLocalizedBrush,
            basicOverlayIdLayoutStyle,
            basicOverlayIdLayoutLineStyle,
            basicOverlayShowTextHints,
            basicOverlayTextHintPosition,
            basicOverlayFrontSideTextHint,
            basicOverlayBackSideTextHint,
        ],
    });
    const { getMode, enable: enableMode, disable: disableMode, } = _internal.useMode({
        disabled: props.disabled,
        createMode: () => {
            const mode = new IdCapture(resolveSettings());
            mode['parentId'] = viewId;
            return mode;
        },
        applySettings: mode => {
            if (feedback !== undefined)
                mode.feedback = feedback;
            return mode.applySettings(resolveSettings());
        },
        setEnabled: (mode, enabled) => {
            if (mode.isEnabled !== enabled)
                mode.isEnabled = enabled;
        },
        attach: mode => context.addMode(mode),
        detach: mode => context.removeMode(mode),
        attachables: [basicOverlay],
        settingsDeps: [resolveSettings, feedback],
    });
    _internal.useModeListener({
        mode: getMode(),
        listenerFns: {
            didCaptureId: props.didCaptureId
                ? (_mode, id) => {
                    props.didCaptureId(id);
                }
                : undefined,
            didRejectId: props.didRejectId ? (_mode, id, reason) => props.didRejectId(id, reason) : undefined,
        },
        addListener: (m, l) => void m.addListener(l),
        removeListener: (m, l) => void m.removeListener(l),
    });
    // Enable/disable scanning (mode + camera), shared by the navigation prop and
    // the imperative `enable()`/`disable()` handle. The mode side goes through
    // `useMode` (single authority on `isEnabled`); we add the camera here.
    const enable = useCallback(async () => {
        await enableMode();
        setCameraActive(true);
        await cameraClaim.granted();
    }, [enableMode, cameraClaim]);
    const disable = useCallback(async () => {
        await disableMode();
        setCameraActive(false);
    }, [disableMode]);
    // Lifecycle: focus/blur + app foreground/background + the `disabled` veto,
    // resolved to a single enable/disable.
    _internal.useLifecycleHook({
        navigation: props.navigation,
        disabled: props.disabled,
        appStateHandlingDisabled: props.appStateHandlingDisabled,
        onEnable: enable,
        onDisable: disable,
    });
    _internal.useNativeControl(viewState, torchSwitchControl);
    _internal.useNativeControl(viewState, zoomSwitchControl);
    _internal.useModeListener({
        mode: viewState,
        listenerFns: {
            didChangeSize: props.onDidChangeSize ?? undefined,
        },
        addListener: (v, l) => v.addListener(l),
        removeListener: (v, l) => v.removeListener(l),
    });
    useImperativeHandle(ref, () => ({
        reset: () => getMode().reset() ?? Promise.resolve(),
        enable,
        disable,
    }), [getMode, enable, disable]);
    return (React.createElement(DataCaptureView, { context: context, parentId: viewId, style: props.style ?? { flex: 1 }, ref: viewRefCallback, onNativeDispose: teardown => cameraClaim.release(teardown) }));
});

// Internal-only exports for AIO views and other not-yet-public APIs.
// Exposed at the package level via `import { _internal } from 'scandit-react-native-datacapture-id'`.

var internal = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IdCaptureView: IdCaptureView
});

initIdDefaults();
initIdProxy();

export { IdCaptureView$1 as IdCaptureView, internal as _internal };
