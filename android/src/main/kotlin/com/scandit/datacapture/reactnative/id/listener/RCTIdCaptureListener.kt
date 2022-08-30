/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.id.listener

import com.facebook.react.bridge.Promise
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.core.data.FrameData
import com.scandit.datacapture.id.capture.IdCapture
import com.scandit.datacapture.id.capture.IdCaptureListener
import com.scandit.datacapture.id.capture.IdCaptureSession
import com.scandit.datacapture.id.data.CapturedId
import com.scandit.datacapture.id.verification.aamvacloud.AamvaCloudVerifier
import com.scandit.datacapture.id.verification.aamvavizbarcode.AamvaVizBarcodeComparisonVerifier
import com.scandit.datacapture.reactnative.core.ScanditDataCaptureCoreModule
import com.scandit.datacapture.reactnative.core.utils.EventWithResult
import com.scandit.datacapture.reactnative.core.utils.writableMap
import java.util.concurrent.atomic.AtomicReference

class RCTIdCaptureListener(
    private val eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter
) : IdCaptureListener {

    private val latestSession: AtomicReference<IdCaptureSession?> = AtomicReference()
    private var cloudVerifier: AamvaCloudVerifier? = null

    private val onIdCaptured =
        EventWithResult<Boolean>(ID_CAPTURE_DID_CAPTURE, eventEmitter)
    private val onIdLocalized =
        EventWithResult<Boolean>(ID_CAPTURE_DID_LOCALIZE, eventEmitter)
    private val onIdRejected =
        EventWithResult<Boolean>(ID_CAPTURE_DID_REJECT, eventEmitter)

    override fun onIdCaptured(mode: IdCapture, session: IdCaptureSession, data: FrameData) {
        latestSession.set(session)
        ScanditDataCaptureCoreModule.lastFrame = data
        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }
        val enabled = onIdCaptured.emitForResult(params, mode.isEnabled)
        mode.isEnabled = enabled
        ScanditDataCaptureCoreModule.lastFrame = null
    }

    override fun onIdLocalized(mode: IdCapture, session: IdCaptureSession, data: FrameData) {
        latestSession.set(session)
        ScanditDataCaptureCoreModule.lastFrame = data
        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }
        val enabled = onIdLocalized.emitForResult(params, mode.isEnabled)
        mode.isEnabled = enabled
        ScanditDataCaptureCoreModule.lastFrame = null
    }

    override fun onIdRejected(mode: IdCapture, session: IdCaptureSession, data: FrameData) {
        latestSession.set(session)
        ScanditDataCaptureCoreModule.lastFrame = data
        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }
        val enabled = onIdRejected.emitForResult(params, mode.isEnabled)
        mode.isEnabled = enabled
        ScanditDataCaptureCoreModule.lastFrame = null
    }

    override fun onErrorEncountered(
        mode: IdCapture,
        error: Throwable,
        session: IdCaptureSession,
        data: FrameData
    ) {
        latestSession.set(session)
        ScanditDataCaptureCoreModule.lastFrame = data
        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }
        eventEmitter.emit(ID_CAPTURE_DID_FAIL, params)
        ScanditDataCaptureCoreModule.lastFrame = null
    }

    fun finishDidCaptureCallback(enabled: Boolean) {
        onIdCaptured.onResult(enabled)
    }

    fun finishDidLocalizeCallback(enabled: Boolean) {
        onIdLocalized.onResult(enabled)
    }

    fun finishDidRejectCallback(enabled: Boolean) {
        onIdRejected.onResult(enabled)
    }

    fun verifyCapturedId(capturedIdJSON: String, promise: Promise) {
        val capturedId = CapturedId.fromJson(capturedIdJSON)
        promise.resolve(AamvaVizBarcodeComparisonVerifier.create().verify(capturedId).toJson())
    }

    fun createContextForCloudVerification(promise: Promise) {
        if (ScanditDataCaptureCoreModule.context == null) {
            return promise.reject(
                "createContextForCloudVerification",
                "Data Capture Context not available"
            )
        }

        cloudVerifier = AamvaCloudVerifier.create(
            ScanditDataCaptureCoreModule.context as DataCaptureContext
        )
        promise.resolve(null)
    }

    fun verifyCapturedIdAsync(capturedIdJSON: String, promise: Promise) {
        val capturedId = CapturedId.fromJson(capturedIdJSON)
        val verificationTask = cloudVerifier?.verify(capturedId)

        verificationTask?.doOnVerificationResult { cloudResult ->
            promise.resolve(cloudResult.toJson())
        }

        verificationTask?.doOnConnectionFailure { error ->
            promise.reject("OnConnectionFailure", error.message)
        }
    }

    companion object {
        const val ID_CAPTURE_DID_CAPTURE = "idCaptureListener-didCapture"
        const val ID_CAPTURE_DID_LOCALIZE = "idCaptureListener-didLocalize"
        const val ID_CAPTURE_DID_REJECT = "idCaptureListener-didReject"
        const val ID_CAPTURE_DID_FAIL = "idCaptureListener-didFail"
        const val FIELD_SESSION = "session"
    }
}
