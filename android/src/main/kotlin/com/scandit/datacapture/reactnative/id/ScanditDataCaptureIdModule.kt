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
import com.scandit.datacapture.frameworks.core.errors.ParameterNullError
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
    fun finishDidRejectCallback(enabled: Boolean) {
        idCaptureModule.finishDidRejectId(enabled)
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

    @ReactMethod
    fun updateIdCaptureOverlay(readableMap: ReadableMap, promise: Promise) {
        val overlayJson = readableMap.getString("overlayJson") ?: return promise.reject(
            ParameterNullError("overlayJson")
        )
        idCaptureModule.updateOverlay(overlayJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateIdCaptureMode(modeJson: String, promise: Promise) {
        idCaptureModule.updateModeFromJson(modeJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun applyIdCaptureModeSettings(modeSettingsJson: String, promise: Promise) {
        idCaptureModule.applyModeSettings(modeSettingsJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateIdCaptureFeedback(feedbackJson: String, promise: Promise) {
        idCaptureModule.updateFeedback(feedbackJson, ReactNativeResult(promise))
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
        private const val DEFAULTS_KEY = "Defaults"
    }
}
