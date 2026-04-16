/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksId

@objc(ScanditDataCaptureId)
class ScanditDataCaptureId: RCTEventEmitter {
    var idModule: IdCaptureModule!

    override init() {
        super.init()
        let emitter = ReactNativeEmitter(emitter: self)
        let idCaptureListener = FrameworksIdCaptureListener(emitter: emitter)
        idModule = IdCaptureModule(idCaptureListener: idCaptureListener)
        idModule.didStart()
    }

    override func startObserving() {
        super.startObserving()
        idModule.addListener()
    }

    override func stopObserving() {
        idModule.removeListener()
        super.stopObserving()
    }

    override func supportedEvents() -> [String]! {
        FrameworksIdCaptureEvent.allCases.map { $0.rawValue }
    }

    override func constantsToExport() -> [AnyHashable : Any]! {
        [
            "Defaults": idModule.defaults.toEncodable()
        ]
    }

    @objc override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc override var methodQueue: DispatchQueue! {
        return sdcSharedMethodQueue
    }

    @objc override func invalidate() {
        super.invalidate()
        idModule.didStop()
    }

    deinit {
        invalidate()
    }

    @objc(finishDidCaptureCallback:)
    func finishDidCaptureCallback(enabled: Bool) {
        idModule.finishDidCaptureId(enabled: enabled)
    }

    @objc(finishDidRejectCallback:)
    func finishDidRejectCallback(enabled: Bool) {
        idModule.finishDidRejectId(enabled: enabled)
    }

    @objc(reset:reject:)
    func reset(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        idModule.resetMode()
        resolve(nil)
    }

    @objc(createContextForBarcodeVerification:context:reject:)
    func createContextForBarcodeVerification(context: String,
                                             resolve: @escaping RCTPromiseResolveBlock,
                                             reject: @escaping RCTPromiseRejectBlock) {
        idModule.createAamvaBarcodeVerifier(result: ReactNativeResult(resolve, reject))
    }

    @objc(verifyCapturedIdAsync:capturedIdJSON:reject:)
    func verifyCapturedIdAsync(capturedIdJSON: String,
                               resolve: @escaping RCTPromiseResolveBlock,
                               reject: @escaping RCTPromiseRejectBlock) {
        idModule.verifyCapturedIdWithCloud(jsonString: capturedIdJSON,
                                           result: ReactNativeResult(resolve, reject))
    }

    @objc(setModeEnabledState:)
    func setModeEnabledState(enabled: Bool) {
        idModule.setModeEnabled(enabled: enabled)
    }

    @objc(updateIdCaptureOverlay:resolve:reject:)
    func updateIdCaptureOverlay(data: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        guard let overlayJson = data["overlayJson"] as? String else {
            reject("-1", "Missing overlayJson parameter", nil)
            return
        }
        idModule.updateOverlay(overlayJson: overlayJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateIdCaptureMode:resolve:reject:)
    func updateIdCaptureMode(modeJson: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        idModule.updateModeFromJson(modeJson: modeJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(applyIdCaptureModeSettings:resolve:reject:)
    func applyIdCaptureModeSettings(modeSettingsJson: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        idModule.applyModeSettings(modeSettingsJson: modeSettingsJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateIdCaptureFeedback:resolve:reject:)
    func updateIdCaptureFeedback(feedbackJson: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        idModule.updateFeedback(feedbackJson: feedbackJson, result: ReactNativeResult(resolve, reject))
    }
}
