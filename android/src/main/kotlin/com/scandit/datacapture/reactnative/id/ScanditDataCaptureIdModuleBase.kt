/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.id

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReadableMap
import com.scandit.datacapture.frameworks.core.CoreModule
import com.scandit.datacapture.frameworks.core.FrameworkModule
import com.scandit.datacapture.frameworks.core.locator.ServiceLocator
import com.scandit.datacapture.frameworks.id.IdCaptureModule
import com.scandit.datacapture.reactnative.core.utils.ReactNativeMethodCall
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

/**
 * Base implementation for the Scandit Data Capture ID module.
 * Contains all shared business logic used by both old and new architecture modules.
 */
class ScanditDataCaptureIdModuleBase(
    private val idCaptureModule: IdCaptureModule,
    private val serviceLocator: ServiceLocator<FrameworkModule>,
) {
    companion object {
        const val NAME = "ScanditDataCaptureId"
        private const val DEFAULTS_KEY = "Defaults"
    }

    fun getDefaults(): MutableMap<String, Any> = mutableMapOf(
        DEFAULTS_KEY to idCaptureModule.getDefaults()
    )

    fun onInvalidate() {
        idCaptureModule.onDestroy()
    }

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
}
