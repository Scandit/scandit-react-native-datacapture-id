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
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.core.capture.DataCaptureContextListener
import com.scandit.datacapture.core.json.JsonValue
import com.scandit.datacapture.id.capture.IdCapture
import com.scandit.datacapture.id.capture.IdCaptureListener
import com.scandit.datacapture.id.capture.serialization.IdCaptureDeserializer
import com.scandit.datacapture.id.capture.serialization.IdCaptureDeserializerListener
import com.scandit.datacapture.id.ui.overlay.IdCaptureOverlay
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableCameraSettingsDefaults
import com.scandit.datacapture.reactnative.core.deserializers.Deserializers
import com.scandit.datacapture.reactnative.core.deserializers.TreeLifecycleObserver
import com.scandit.datacapture.reactnative.core.utils.LazyEventEmitter
import com.scandit.datacapture.reactnative.id.data.defaults.IdCaptureOverlayDefaults
import com.scandit.datacapture.reactnative.id.data.defaults.SerializableIdCaptureDefaults
import com.scandit.datacapture.reactnative.id.data.defaults.SerializableIdDefaults
import com.scandit.datacapture.reactnative.id.listener.RCTIdCaptureListener

class ScanditDataCaptureIdModule(
    reactContext: ReactApplicationContext,
    private val idCaptureDeserializer: IdCaptureDeserializer = IdCaptureDeserializer(),
    eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter = LazyEventEmitter(reactContext),
    private val idCaptureListener: RCTIdCaptureListener =
        RCTIdCaptureListener(eventEmitter)
) : ReactContextBaseJavaModule(reactContext),
    IdCaptureDeserializerListener,
    IdCaptureListener by idCaptureListener,
    DataCaptureContextListener,
    TreeLifecycleObserver.Callbacks {

    override fun getName(): String = "ScanditDataCaptureId"

    init {
        idCaptureDeserializer.listener = this
        Deserializers.Factory.addModeDeserializer(idCaptureDeserializer)
        TreeLifecycleObserver.callbacks += this
    }

    var idCapture: IdCapture? = null
        private set(value) {
            field?.removeListener(this)
            field = value?.also { it.addListener(this) }
        }

    private var dataCaptureContext: DataCaptureContext? = null
        private set(value) {
            field?.removeListener(this)
            field = value?.also { it.addListener(this) }
        }

    override fun onCatalystInstanceDestroy() {
        TreeLifecycleObserver.callbacks -= this
        Deserializers.Factory.removeModeDeserializer(idCaptureDeserializer)
        idCaptureDeserializer.listener = this
    }

    override fun onModeDeserializationFinished(
        deserializer: IdCaptureDeserializer,
        mode: IdCapture,
        json: JsonValue
    ) {
        idCapture = mode.also {
            if (json.contains("enabled")) {
                it.isEnabled = json.requireByKeyAsBoolean("enabled")
            }
        }
    }

    @ReactMethod
    fun reset() {
        idCapture?.reset()
    }

    @ReactMethod
    fun finishDidCaptureCallback(enabled: Boolean) {
        idCaptureListener.finishDidCaptureCallback(enabled)
    }

    @ReactMethod
    fun finishDidLocalizeCallback(enabled: Boolean) {
        idCaptureListener.finishDidLocalizeCallback(enabled)
    }

    @ReactMethod
    fun finishDidRejectCallback(enabled: Boolean) {
        idCaptureListener.finishDidRejectCallback(enabled)
    }

    @ReactMethod
    fun verifyCapturedId(capturedIdJSON: String, promise: Promise) {
        idCaptureListener.verifyCapturedId(capturedIdJSON, promise)
    }

    @Suppress("UNUSED_PARAMETER")
    @ReactMethod
    fun createContextForCloudVerification(contextJSON: String, promise: Promise) {
        idCaptureListener.createContextForCloudVerification(promise, dataCaptureContext)
    }

    @ReactMethod
    fun verifyCapturedIdAsync(capturedIdJSON: String, promise: Promise) {
        idCaptureListener.verifyCapturedIdAsync(capturedIdJSON, promise)
    }

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
        DEFAULTS_KEY to DEFAULTS.toWritableMap()
    )

    override fun onTreeDestroyed() {
        idCaptureListener.finishDidCaptureCallback(false)
        idCapture = null
        dataCaptureContext = null
    }

    override fun onTreeCreated(root: DataCaptureContext) {
        dataCaptureContext = root
    }

    companion object {
        private const val DEFAULTS_KEY = "Defaults"

        private val DEFAULTS: SerializableIdDefaults by lazy {
            SerializableIdDefaults(
                SerializableIdCaptureDefaults(
                    recommendedCameraSettings = SerializableCameraSettingsDefaults(
                        IdCapture.createRecommendedCameraSettings()
                    ),
                    idCaptureOverlayDefaults = IdCaptureOverlayDefaults(
                        IdCaptureOverlay.defaultCapturedBrush(),
                        IdCaptureOverlay.defaultLocalizedBrush(),
                        IdCaptureOverlay.defaultRejectedBrush(),
                    )
                )
            )
        }
    }
}
