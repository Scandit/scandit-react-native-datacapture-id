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

/// Swift implementation for the Id native module.
/// This class contains all business logic and is used by the Obj-C++ adapter (NativeScanditDataCaptureId).
/// Following the Adapter Pattern from React Native's TurboModule Swift guide.
@objcMembers
public class ScanditDataCaptureIdImpl: NSObject {
    var idModule: IdCaptureModule!

    /// Reference to the RCTEventEmitter adapter.
    weak var emitter: RCTEventEmitter?

    public override init() {
        super.init()
    }

    /// Called by the Obj-C++ adapter to set up the emitter reference and initialize modules (old architecture).
    public func setup(with emitter: RCTEventEmitter) {
        self.emitter = emitter
        guard let reactEmitter = ScanditDataCaptureCore.ReactNativeEmitterFactory.create(emitter: emitter) else {
            fatalError("Failed to create ReactNativeEmitter")
        }
        idModule = IdCaptureModule(emitter: reactEmitter)
        idModule.didStart()
    }

    /// Called by the Obj-C++ adapter to set up the emitter reference and initialize modules (new architecture).
    /// - Parameters:
    ///   - emitter: The RCTEventEmitter (nil in new arch since we don't inherit from RCTEventEmitter).
    ///   - turboEmitter: TurboModule emitter block for new architecture.
    @objc(setupWith:turboEmitter:)
    public func setup(with emitter: RCTEventEmitter?, turboEmitter: SDCEventEmitBlock?) {
        self.emitter = emitter
        guard
            let reactEmitter = ScanditDataCaptureCore.ReactNativeEmitterFactory.create(
                emitter: emitter,
                turboEmitter: turboEmitter
            )
        else {
            fatalError("Failed to create ReactNativeEmitter")
        }
        idModule = IdCaptureModule(emitter: reactEmitter)
        idModule.didStart()
    }

    public func supportedEvents() -> [String] {
        FrameworksIdCaptureEvent.allCases.map { $0.rawValue }
    }

    public func getConstants() -> [AnyHashable: Any] {
        guard let module = idModule else {
            return [:]
        }
        return [
            "Defaults": module.getDefaults()
        ]
    }

    public func invalidate() {
        idModule?.didStop()
    }

    public func executeId(
        data: [String: Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        guard let module = idModule else {
            reject("MODULE_NOT_INITIALIZED", "IdModule is not initialized. setup() may not have been called.", nil)
            return
        }

        let coreModuleName = String(describing: CoreModule.self)
        guard let coreModule = DefaultServiceLocator.shared.resolve(clazzName: coreModuleName) as? CoreModule else {
            reject("-1", "Unable to retrieve the CoreModule from the locator.", nil)
            return
        }

        let result = ReactNativeResult(resolve, reject)
        let handled = coreModule.execute(
            ReactNativeMethodCall(data),
            result: result,
            module: module
        )

        if !handled {
            let methodName = data["methodName"] as? String ?? "unknown"
            reject("METHOD_NOT_FOUND", "Unknown Core method: \(methodName)", nil)
        }
    }
}
