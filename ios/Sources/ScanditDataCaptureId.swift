/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditIdCapture
import ScanditDataCaptureCore

@objc(ScanditDataCaptureId)
class ScanditDataCaptureId: RCTEventEmitter {
    var captureMode: IdCapture?
    var cloudVerifier: AamvaCloudVerifier?

    override init() {
        super.init()
        registerDeserializer()
    }

    var hasListeners = false
    internal let didCaptureIdLock =
        CallbackLock<Bool>(name: ScanditDataCaptureIdEvent.didCapture.rawValue)
    internal let didLocalizeIdLock =
        CallbackLock<Bool>(name: ScanditDataCaptureIdEvent.didLocalize.rawValue)
    internal let didRejectIdLock =
        CallbackLock<Bool>(name: ScanditDataCaptureIdEvent.didReject.rawValue)

    @objc override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc override var methodQueue: DispatchQueue! {
        return SDCSharedMethodQeueue
    }

    @objc override func invalidate() {
        super.invalidate()
        unlockLocks()
    }

    internal func unlockLocks() {
        didCaptureIdLock.reset()
        didLocalizeIdLock.reset()
        didRejectIdLock.reset()
    }

    @objc(reset:reject:)
    func reset(resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        captureMode?.reset()
        resolve(nil)
    }

    @objc(verifyCapturedId:capturedIdJSON:reject:)
    func verifyCapturedId(capturedIdJSON: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        let capturedId = CapturedId(jsonString: capturedIdJSON)
        resolve(AAMVAVizBarcodeComparisonVerifier.init().verify(capturedId).jsonString)
    }

    @objc(createContextForCloudVerification:context:reject:)
    func createContextForCloudVerification(context: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        if (ScanditDataCaptureCore.dataCaptureContext == nil) {
            return reject("createContextForCloudVerification", "Data Capture Context not available", nil)
        }

        cloudVerifier = AamvaCloudVerifier.init(context: ScanditDataCaptureCore.dataCaptureContext!)
        resolve(nil)
    }

    @objc(verifyCapturedIdAsync:capturedIdJSON:reject:)
    func verifyCapturedIdAsync(capturedIdJSON: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let capturedId = CapturedId(jsonString: capturedIdJSON)
        do {
          try cloudVerifier?.verify(capturedId, completionHandler: { result, error in
            if (error != nil) {
                return reject("OnConnectionFailure", nil, error)
            }
            resolve(result?.jsonString)
          })
        } catch let error as NSError {
          return reject("OnConnectionFailure", error.localizedDescription, error)
        }
    }
}
