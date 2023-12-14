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
        idModule.didStop()
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
    }

    @objc(finishDidCaptureCallback:)
    func finishDidCaptureCallback(enabled: Bool) {
        idModule.finishDidCaptureId(enabled: enabled)
    }

    @objc(finishDidLocalizeCallback:)
    func finishDidLocalizeCallback(enabled: Bool) {
        idModule.finishDidLocalizeId(enabled: enabled)
    }

    @objc(finishDidRejectCallback:)
    func finishDidRejectCallback(enabled: Bool) {
        idModule.finishDidRejectId(enabled: enabled)
    }

    @objc(finishDidTimeOutCallback:)
    func finishDidTimeOutCallback(enabled: Bool) {
        idModule.finishTimeout(enabled: enabled)
    }

    @objc(reset:reject:)
    func reset(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        idModule.resetMode()
        resolve(nil)
    }

    @objc(verifyCapturedId:capturedIdJSON:reject:)
    func verifyCapturedId(capturedIdJSON: String,
                          resolve: @escaping RCTPromiseResolveBlock,
                          reject: @escaping RCTPromiseRejectBlock) {
        idModule.verifyCapturedIdAamvaViz(jsonString: capturedIdJSON,
                                          result: ReactNativeResult(resolve, reject))
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
}
