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
        idModule = IdCaptureModule(emitter: emitter)
        idModule.didStart()
    }

    override func supportedEvents() -> [String]! {
        FrameworksIdCaptureEvent.allCases.map { $0.rawValue }
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
        [
            "Defaults": idModule.defaults.toEncodable()
        ]
    }

    @objc override class func requiresMainQueueSetup() -> Bool {
        true
    }

    @objc override var methodQueue: DispatchQueue! {
        sdcSharedMethodQueue
    }

    @objc override func invalidate() {
        super.invalidate()
        idModule.didStop()
    }

    deinit {
        invalidate()
    }

    @objc(finishDidCaptureCallback:resolve:reject:)
    func finishDidCaptureCallback(data: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        guard let enabled = data["enabled"] as? Bool else {
            reject("-1", "Missing enabled parameter", nil)
            return
        }
        idModule.finishDidCaptureId(modeId: data.modeId, enabled: enabled)
        resolve(nil)
    }

    @objc(finishDidRejectCallback:resolve:reject:)
    func finishDidRejectCallback(data: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        guard let enabled = data["enabled"] as? Bool else {
            reject("-1", "Missing enabled parameter", nil)
            return
        }
        idModule.finishDidRejectId(modeId: data.modeId, enabled: enabled)
        resolve(nil)
    }

    @objc(resetIdCaptureMode:)
    func resetIdCaptureMode(data: [String: Any]) {
        idModule.resetMode(modeId: data.modeId)
    }

    @objc(addIdCaptureListener:)
    func addIdCaptureListener(data: [String: Any]) {
        idModule.addListener(modeId: data.modeId)
    }

    @objc(removeIdCaptureListener:)
    func removeIdCaptureListener(data: [String: Any]) {
        idModule.removeListener(modeId: data.modeId)
    }

    @objc(setModeEnabledState:resolve:reject:)
    func setModeEnabledState(data: [String: Any], resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        guard let enabled = data["enabled"] as? Bool else {
            reject("-1", "Missing enabled parameter", nil)
            return
        }
        idModule.setModeEnabled(modeId: data.modeId, enabled: enabled)
        resolve(nil)
    }

    @objc(updateIdCaptureOverlay:resolve:reject:)
    func updateIdCaptureOverlay(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let overlayJson = data["overlayJson"] as? String else {
            reject("-1", "Missing overlayJson parameter", nil)
            return
        }
        idModule.updateOverlay(overlayJson: overlayJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateIdCaptureMode:resolve:reject:)
    func updateIdCaptureMode(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let modeJson = data["modeJson"] as? String else {
            reject("-1", "Missing modeJson parameter", nil)
            return
        }
        idModule.updateModeFromJson(modeId: data.modeId, modeJson: modeJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(applyIdCaptureModeSettings:resolve:reject:)
    func applyIdCaptureModeSettings(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let settingsJson = data["settingsJson"] as? String else {
            reject("-1", "Missing settingsJson parameter", nil)
            return
        }
        idModule.applyModeSettings(
            modeId: data.modeId,
            modeSettingsJson: settingsJson,
            result: ReactNativeResult(resolve, reject)
        )
    }

    @objc(updateIdCaptureFeedback:resolve:reject:)
    func updateIdCaptureFeedback(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let feedbackJson = data["feedbackJson"] as? String else {
            reject("-1", "Missing feedbackJson parameter", nil)
            return
        }
        idModule.updateFeedback(
            modeId: data.modeId,
            feedbackJson: feedbackJson,
            result: ReactNativeResult(resolve, reject)
        )
    }
}
