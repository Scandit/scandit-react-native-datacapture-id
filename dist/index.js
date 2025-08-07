import { FactoryMaker } from 'scandit-react-native-datacapture-core/dist/core';
import { NativeModules, NativeEventEmitter } from 'react-native';
import { loadIdDefaults, IdCaptureListenerEvents } from './id.js';
export { AamvaBarcodeVerificationResult, AamvaBarcodeVerificationStatus, AamvaBarcodeVerifier, BarcodeResult, CapturedId, CapturedSides, DateResult, DriverLicense, FullDocumentScanner, HealthInsuranceCard, IdAnonymizationMode, IdCapture, IdCaptureController, IdCaptureDocumentType, IdCaptureFeedback, IdCaptureListenerController, IdCaptureListenerEvents, IdCaptureOverlay, IdCaptureRegion, IdCaptureSettings, IdCard, IdImageType, IdImages, IdLayoutLineStyle, IdLayoutStyle, IdSide, MRZResult, Passport, ProfessionalDrivingPermit, RegionSpecific, RegionSpecificSubtype, RejectionReason, ResidencePermit, SingleSideScanner, TextHintPosition, VIZResult, VehicleRestriction, VisaIcao } from './id.js';
import { initCoreDefaults } from 'scandit-react-native-datacapture-core';

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
    updateIdCaptureOverlay(overlayJson) {
        return NativeModule$1.updateIdCaptureOverlay(overlayJson);
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
}

const dataCaptureId = NativeModules.ScanditDataCaptureId;
function initIdDefaults() {
    initCoreDefaults();
    loadIdDefaults(dataCaptureId.Defaults);
}

initIdDefaults();
initIdProxy();
