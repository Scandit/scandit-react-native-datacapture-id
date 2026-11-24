import { setIdDefaultsLoader, IdCaptureOverlay, IdCapture, registerIdProxies, buildStaticIdDefaultsJson, loadIdDefaults, IdCaptureSettings, ID_PROXY_TYPE_NAMES } from './id.js';
export { AamvaBarcodeVerificationResult, AamvaBarcodeVerificationStatus, ApplicationStatus, BarcodeResult, CapturedId, CapturedSides, DataConsistencyCheck, DataConsistencyResult, DateResult, DriverLicense, DrivingLicenseCategory, DrivingLicenseDetails, Duration, FullDocumentScanner, HealthInsuranceCard, IdAnonymizationMode, IdCapture, IdCaptureDocumentType, IdCaptureFeedback, IdCaptureOverlay, IdCaptureRegion, IdCaptureScanner, IdCaptureSettings, IdCard, IdFieldType, IdImageType, IdImages, IdLayoutLineStyle, IdLayoutStyle, IdSide, MRZResult, MobileDocumentDataElement, MobileDocumentOCRResult, MobileDocumentResult, MobileDocumentScanner, Passport, PassportType, ProfessionalDrivingPermit, RegionSpecific, RegionSpecificSubtype, RejectionReason, ResidencePermit, Sex, SingleSideScanner, TextHintPosition, UsRealIdStatus, VIZResult, VehicleRestriction, VerificationResult, VisaDetails, VisaIcao, VisaLetter } from './id.js';
import { _internal, DataCaptureView, initCoreDefaults, getModuleDynamicDefaults, getNativeModule, createRNNativeCaller } from 'scandit-react-native-datacapture-core';
import { Platform } from 'react-native';
import { FactoryMaker } from 'scandit-react-native-datacapture-core/dist/core';
import React, { forwardRef, useState, useCallback, useImperativeHandle } from 'react';

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

// RN has no plugin-init gate: user code can construct IdCapture immediately at import time, so
// the dynamic residual must be read synchronously here, not via an async round-trip.
function initIdDefaults() {
    initCoreDefaults();
    const platform = Platform.OS === 'ios' ? 'ios' : 'android';
    // Merge raw JSON into raw JSON, then let loadIdDefaults produce the typed object — never merge
    // into the already-parsed one.
    const merged = buildStaticIdDefaultsJson(platform);
    deepMerge(merged, getModuleDynamicDefaults('ScanditDataCaptureId'));
    // bindInstanceIfNotExists would no-op on a second load, so drop the binding first.
    FactoryMaker.instances.delete('IdDefaults');
    loadIdDefaults(merged);
}
// Keys whose assignment would mutate the prototype chain instead of setting a data property.
// The payload comes from our own native code, but JSON.parse can produce an own "__proto__" key
// and Object.keys lists it, so the bracket assignment below is guarded.
const UNSAFE_MERGE_KEYS = ['__proto__', 'constructor', 'prototype'];
function deepMerge(target, source) {
    for (const key of Object.keys(source)) {
        if (UNSAFE_MERGE_KEYS.includes(key)) {
            continue;
        }
        const sourceValue = source[key];
        const targetValue = target[key];
        // Both sides must be plain objects to recurse: an array on either side is replaced wholesale,
        // never merged key-by-key (which would leave numeric-index pollution behind).
        if (sourceValue &&
            targetValue &&
            typeof sourceValue === 'object' &&
            typeof targetValue === 'object' &&
            !Array.isArray(sourceValue) &&
            !Array.isArray(targetValue)) {
            // Copy-on-write: buildStatic*DefaultsJson hands out REFERENCES to module-level generated
            // constants, so recursing straight into targetValue would write the dynamic value into the
            // generated constant and corrupt it process-wide for every later caller. Descend into a
            // shallow copy instead.
            const branch = { ...targetValue };
            target[key] = branch;
            deepMerge(branch, sourceValue);
        }
        else {
            target[key] = sourceValue;
        }
    }
}
setIdDefaultsLoader(initIdDefaults);

function buildSettings(settings) {
    return settings ?? new IdCaptureSettings();
}
/**
 * An all-in-one React component for scanning personal identification documents. Rendering this single element replaces the manual assembly of a {@link DataCaptureContext}, an {@link IdCapture} mode, a {@link DataCaptureView} and an {@link IdCaptureOverlay} — the component owns all four, along with its camera claim and its lifecycle.
 *
 * The component must be rendered inside a [ScanditProvider](#), which supplies the {@link DataCaptureContext} and the shared camera. Scanning starts once the component is mounted and enabled, and stops when it unmounts.
 *
 * Configuration is passed through {@link IdCaptureAioViewProps}. To gain manual control over the component, attach a React `ref` typed as {@link IdCaptureAioViewHandle}.
 *
 * @since 8.7.0
 */
const IdCaptureAioView = forwardRef(function IdCaptureAioView(props, ref) {
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
    useImperativeHandle(ref, () => ({
        reset: () => getMode().reset() ?? Promise.resolve(),
        enable,
        disable,
    }), [getMode, enable, disable]);
    return (React.createElement(DataCaptureView, { context: context, parentId: viewId, style: props.style ?? { flex: 1 }, ref: viewRefCallback, onNativeDispose: teardown => cameraClaim.release(teardown) }));
});

var internal = /*#__PURE__*/Object.freeze({
    __proto__: null
});

initIdDefaults();
initIdProxy();

export { IdCaptureAioView, internal as _internal };
