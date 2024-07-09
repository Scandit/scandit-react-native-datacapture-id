import { FactoryMaker } from 'scandit-react-native-datacapture-core/dist/core';
import { NativeModules, NativeEventEmitter } from 'react-native';
import { loadIdDefaults, IdCaptureListenerEvents } from './id.js';
export { AAMVABarcodeResult, AamvaBarcodeVerificationResult, AamvaBarcodeVerifier, AamvaVizBarcodeComparisonResult, AamvaVizBarcodeComparisonVerifier, ApecBusinessTravelCardMrzResult, ArgentinaIdBarcodeResult, CapturedId, CapturedResultType, ChinaExitEntryPermitMRZResult, ChinaMainlandTravelPermitMRZResult, ChinaOneWayPermitBackMrzResult, ChinaOneWayPermitFrontMrzResult, ColombiaDlBarcodeResult, ColombiaIdBarcodeResult, CommonAccessCardBarcodeResult, ComparisonCheckResult, DateResult, DocumentType, IdAnonymizationMode, IdCapture, IdCaptureController, IdCaptureError, IdCaptureFeedback, IdCaptureListenerController, IdCaptureListenerEvents, IdCaptureOverlay, IdCaptureSession, IdCaptureSettings, IdDocumentType, IdImageType, IdLayout, IdLayoutLineStyle, IdLayoutStyle, LocalizedOnlyId, MRZResult, ProfessionalDrivingPermit, RejectedId, SouthAfricaDlBarcodeResult, SouthAfricaIdBarcodeResult, SupportedSides, USUniformedServicesBarcodeResult, USVisaVIZResult, VIZResult, VehicleRestriction } from './id.js';
import { initCoreDefaults } from 'scandit-react-native-datacapture-core';

// tslint:disable:variable-name
const NativeModule$1 = NativeModules.ScanditDataCaptureId;
new NativeEventEmitter(NativeModule$1);
// tslint:enable:variable-name
class NativeIdCaptureProxy {
    resetMode() {
        return NativeModule$1.reset();
    }
    verifyCapturedId(capturedId) {
        return NativeModule$1.verifyCapturedId(capturedId);
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
    updateIdCaptureOverlay(overlayJson) {
        return NativeModule$1.updateIdCaptureOverlay(overlayJson);
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
        const didCaptureListener = RNEventEmitter.addListener(IdCaptureListenerEvents.didCapture, (body) => {
            this.eventEmitter.emit(IdCaptureListenerEvents.didCapture, body);
        });
        this.nativeListeners.push(didCaptureListener);
    }
    subscribeDidLocalizeListener() {
        const didLocalizeListener = RNEventEmitter.addListener(IdCaptureListenerEvents.didLocalize, (body) => {
            this.eventEmitter.emit(IdCaptureListenerEvents.didLocalize, body);
        });
        this.nativeListeners.push(didLocalizeListener);
    }
    subscribeDidRejectListener() {
        const didRejectListener = RNEventEmitter.addListener(IdCaptureListenerEvents.didReject, (body) => {
            this.eventEmitter.emit(IdCaptureListenerEvents.didReject, body);
        });
        this.nativeListeners.push(didRejectListener);
    }
    subscribeDidTimeOutListener() {
        // perhaps rename this to a token
        const didTimeOutListener = RNEventEmitter.addListener(IdCaptureListenerEvents.didTimeOut, (body) => {
            this.eventEmitter.emit(IdCaptureListenerEvents.didTimeOut, body);
        });
        this.nativeListeners.push(didTimeOutListener);
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
}

const dataCaptureId = NativeModules.ScanditDataCaptureId;
function initIdDefaults() {
    initCoreDefaults();
    loadIdDefaults(dataCaptureId.Defaults);
}

initIdDefaults();
initIdProxy();
