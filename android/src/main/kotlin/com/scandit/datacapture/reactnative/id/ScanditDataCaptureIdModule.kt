/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.id

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.module.annotations.ReactModule
import com.scandit.datacapture.frameworks.core.CoreModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.frameworks.id.IdCaptureModule
import com.scandit.datacapture.reactnative.core.utils.ReactNativeMethodCall
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

@ReactModule(name = ScanditDataCaptureIdModule.NAME)
open class ScanditDataCaptureIdModule(
    reactContext: ReactApplicationContext,
    private val idCaptureModule: IdCaptureModule,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = NAME

    override fun invalidate() {
        idCaptureModule.onDestroy()
        super.invalidate()
    }

    @ReactMethod
    fun executeId(data: ReadableMap, promise: Promise) {
        val coreModule = serviceLocator.resolve(
            CoreModule::class.java.simpleName
        ) as? CoreModule ?: return run {
            promise.reject("-1", "Unable to retrieve the CoreModule from the locator.")
        }

        val result = coreModule.execute(
            ReactNativeMethodCall(data),
            ReactNativeResult(promise),
            idCaptureModule
        )

        if (!result) {
            val methodName = data.getString("methodName") ?: "unknown"
            promise.reject(
                "METHOD_NOT_FOUND",
                "Unknown Core method: $methodName"
            )
        }
    }

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
        DEFAULTS_KEY to idCaptureModule.getDefaults()
    )

    @ReactMethod
    fun addListener(@Suppress("UNUSED_PARAMETER") eventName: String?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    @ReactMethod
    fun removeListeners(@Suppress("UNUSED_PARAMETER") count: Int?) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    companion object {
        const val NAME = "ScanditDataCaptureId"
        private const val DEFAULTS_KEY = "Defaults"
    }
}
