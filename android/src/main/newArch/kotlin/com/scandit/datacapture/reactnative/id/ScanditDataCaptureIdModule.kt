/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.id

import com.facebook.fbreact.specs.NativeScanditDataCaptureIdSpec
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.module.annotations.ReactModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.frameworks.id.IdCaptureModule
import com.scandit.datacapture.reactnative.core.utils.ReactNativeEventEmitter

@ReactModule(name = ScanditDataCaptureIdModuleBase.NAME)
class ScanditDataCaptureIdModule(
    reactContext: ReactApplicationContext,
    serviceLocator: ServiceLocator<FrameworkModule>,
) : NativeScanditDataCaptureIdSpec(reactContext) {

    private val moduleBase: ScanditDataCaptureIdModuleBase

    init {
        // Create emitter with JSI-based emit handler and set up IdCaptureModule
        val emitter = ReactNativeEventEmitter { payload ->
            emitOnScanditEvent(payload)
        }
        val idCaptureModule = IdCaptureModule(emitter).also {
            it.onCreate(reactContext)
        }
        moduleBase = ScanditDataCaptureIdModuleBase(idCaptureModule, serviceLocator)
    }

    companion object {
        const val NAME = ScanditDataCaptureIdModuleBase.NAME
    }

    override fun getName(): String = NAME

    override fun getTypedExportedConstants(): MutableMap<String, Any> = moduleBase.getDefaults()

    override fun invalidate() {
        moduleBase.onInvalidate()
        super.invalidate()
    }

    override fun executeId(data: ReadableMap, promise: Promise) =
        moduleBase.executeId(data, promise)
}
