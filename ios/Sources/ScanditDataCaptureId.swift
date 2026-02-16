/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

import Foundation
import React
import ScanditDataCaptureCore
import ScanditFrameworksCore
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
            "Defaults": idModule.getDefaults()
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

    @objc(executeId:resolve:reject:)
    func executeId(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {

        let coreModuleName = String(describing: CoreModule.self)
        guard let coreModule = DefaultServiceLocator.shared.resolve(clazzName: coreModuleName) as? CoreModule else {
            reject("-1", "Unable to retrieve the CoreModule from the locator.", nil)
            return
        }

        let result = ReactNativeResult(resolve, reject)
        let handled = coreModule.execute(
            ReactNativeMethodCall(data),
            result: result,
            module: idModule
        )

        if !handled {
            let methodName = data["methodName"] as? String ?? "unknown"
            reject("METHOD_NOT_FOUND", "Unknown Core method: \(methodName)", nil)
        }
    }
}
