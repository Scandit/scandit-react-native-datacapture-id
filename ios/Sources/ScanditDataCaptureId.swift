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
        return false
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
}
