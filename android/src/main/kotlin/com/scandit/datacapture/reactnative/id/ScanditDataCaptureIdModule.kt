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
import com.scandit.datacapture.reactnative.core.utils.modeId

class ScanditDataCaptureIdModule(
    reactContext: ReactApplicationContext,
    private val idCaptureModule: IdCaptureModule,
) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "ScanditDataCaptureId"

    override fun invalidate() {
        idCaptureModule.onDestroy()
        super.invalidate()
    }

    @ReactMethod
    fun addIdCaptureListener(readableMap: ReadableMap) {
        idCaptureModule.addListener(readableMap.modeId)
    }

    @ReactMethod
    fun removeIdCaptureListener(readableMap: ReadableMap) {
        idCaptureModule.removeListener(readableMap.modeId)
    }

    @ReactMethod
    fun resetIdCaptureMode(readableMap: ReadableMap) {
        idCaptureModule.resetMode(readableMap.modeId)
    }

    @ReactMethod
    fun finishDidCaptureCallback(readableMap: ReadableMap) {
        idCaptureModule.finishDidCaptureId(readableMap.modeId, readableMap.getBoolean("enabled"))
    }

    @ReactMethod
    fun finishDidRejectCallback(readableMap: ReadableMap) {
        idCaptureModule.finishDidRejectId(readableMap.modeId, readableMap.getBoolean("enabled"))
    }

    @ReactMethod
    fun setModeEnabledState(readableMap: ReadableMap) {
        idCaptureModule.setModeEnabled(readableMap.modeId, readableMap.getBoolean("enabled"))
    }

    @ReactMethod
    fun updateIdCaptureOverlay(readableMap: ReadableMap, promise: Promise) {
        val overlayJson = readableMap.getString("overlayJson") ?: return promise.reject(
            ParameterNullError("overlayJson")
        )
        idCaptureModule.updateOverlay(overlayJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateIdCaptureMode(readableMap: ReadableMap, promise: Promise) {
        val modeJson = readableMap.getString("modeJson")
        if (modeJson == null) {
            promise.reject(ParameterNullError("modeJson"))
            return
        }
        idCaptureModule.updateModeFromJson(readableMap.modeId, modeJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun applyIdCaptureModeSettings(readableMap: ReadableMap, promise: Promise) {
        val settingsJson = readableMap.getString("settingsJson")
        if (settingsJson == null) {
            promise.reject(ParameterNullError("settingsJson"))
            return
        }
        idCaptureModule.applyModeSettings(
            readableMap.modeId,
            settingsJson,
            ReactNativeResult(promise)
        )
    }

    @ReactMethod
    fun updateIdCaptureFeedback(readableMap: ReadableMap, promise: Promise) {
        val feedbackJson = readableMap.getString("feedbackJson")
        if (feedbackJson == null) {
            promise.reject(ParameterNullError("feedbackJson"))
            return
        }
        idCaptureModule.updateFeedback(readableMap.modeId, feedbackJson, ReactNativeResult(promise))
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
