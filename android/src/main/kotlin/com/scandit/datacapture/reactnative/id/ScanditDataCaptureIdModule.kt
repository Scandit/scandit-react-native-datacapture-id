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
import com.scandit.datacapture.frameworks.id.IdCaptureModule
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureIdModule(
    reactContext: ReactApplicationContext,
    private val idCaptureModule: IdCaptureModule,
) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "ScanditDataCaptureId"

    init {
        // automatically register listeners
        idCaptureModule.addListener()
    }

    override fun invalidate() {
        idCaptureModule.onDestroy()
        super.invalidate()
    }

    @ReactMethod
    fun reset() {
        idCaptureModule.resetMode()
    }

    @ReactMethod
    fun finishDidCaptureCallback(enabled: Boolean) {
        idCaptureModule.finishDidCaptureId(enabled)
    }

    @ReactMethod
    fun finishDidLocalizeCallback(enabled: Boolean) {
        idCaptureModule.finishDidLocalizeId(enabled)
    }

    @ReactMethod
    fun finishDidRejectCallback(enabled: Boolean) {
        idCaptureModule.finishDidRejectId(enabled)
    }

    @ReactMethod
    fun finishDidTimeOutCallback(enabled: Boolean) {
        idCaptureModule.finishDidTimeout(enabled)
    }

    @ReactMethod
    fun verifyCapturedId(capturedIdJSON: String, promise: Promise) {
        idCaptureModule.verifyCaptureId(capturedIdJSON, ReactNativeResult(promise))
    }

    @Suppress("UNUSED_PARAMETER")
    @ReactMethod
    fun createContextForBarcodeVerification(contextJSON: String, promise: Promise) {
        idCaptureModule.createContextForBarcodeVerification(ReactNativeResult(promise))
    }

    @ReactMethod
    fun verifyCapturedIdAsync(capturedIdJSON: String, promise: Promise) {
        idCaptureModule.verifyCapturedIdBarcode(capturedIdJSON, ReactNativeResult(promise))
    }

    @ReactMethod
    fun setModeEnabledState(enabled: Boolean) {
        idCaptureModule.setModeEnabled(enabled)
    }

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
        DEFAULTS_KEY to idCaptureModule.getDefaults()
    )

    companion object {
        private const val DEFAULTS_KEY = "Defaults"
    }
}
