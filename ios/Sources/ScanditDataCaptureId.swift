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

    var context: DataCaptureContext?

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
    internal let didTimeOutIdLock =
        CallbackLock<Bool>(name: ScanditDataCaptureIdEvent.didReject.rawValue)

    @objc override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc override var methodQueue: DispatchQueue! {
        return sdcSharedMethodQueue
    }

    @objc override func invalidate() {
        super.invalidate()
        unlockLocks()
    }

    internal func unlockLocks() {
        didCaptureIdLock.reset()
        didLocalizeIdLock.reset()
        didRejectIdLock.reset()
        didTimeOutIdLock.reset()
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
        guard let context = self.context else {
            return reject("createContextForCloudVerification", "Data Capture Context not available", nil)
        }

        cloudVerifier = AamvaCloudVerifier(context: context)
        resolve(nil)
    }

    @objc(verifyCapturedIdAsync:capturedIdJSON:reject:)
    func verifyCapturedIdAsync(capturedIdJSON: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let capturedId = CapturedId(jsonString: capturedIdJSON)
        cloudVerifier?.verify(capturedId, completionHandler: { result, error in
          if (error != nil) {
              return reject("OnConnectionFailure", nil, error)
          }
          resolve(result?.jsonString)
        })
    }

    deinit {
        unregisterRNTContextListener()
    }
}

extension ScanditDataCaptureId: RNTDataCaptureContextListener {
    func didUpdate(dataCaptureContext: DataCaptureContext?) {
        context = dataCaptureContext
    }

    func registerRNTContextListener() {
        guard let coreModule = bridge.module(for: ScanditDataCaptureCore.self) as? ScanditDataCaptureCore else {
            return
        }
        coreModule.addRNTDataCaptureContextListener(self)
    }

    fileprivate func unregisterRNTContextListener() {
        guard let coreModule = bridge.module(for: ScanditDataCaptureCore.self) as? ScanditDataCaptureCore else {
            return
        }
        coreModule.removeRNTDataCaptureContextListener(self)
    }
}
