/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.id.listener

import com.facebook.react.modules.core.DeviceEventManagerModule
import com.scandit.datacapture.core.data.FrameData
import com.scandit.datacapture.id.capture.IdCapture
import com.scandit.datacapture.id.capture.IdCaptureListener
import com.scandit.datacapture.id.capture.IdCaptureSession
import com.scandit.datacapture.reactnative.core.ScanditDataCaptureCoreModule
import com.scandit.datacapture.reactnative.core.utils.EventWithResult
import com.scandit.datacapture.reactnative.core.utils.writableMap

class RCTIdCaptureListener(
    private val eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter
) : IdCaptureListener {

    private val onIdCaptured =
        EventWithResult<Boolean>(ID_CAPTURE_DID_CAPTURE, eventEmitter)
    private val onIdLocalized =
        EventWithResult<Boolean>(ID_CAPTURE_DID_LOCALIZE, eventEmitter)
    private val onIdRejected =
        EventWithResult<Boolean>(ID_CAPTURE_DID_REJECT, eventEmitter)

    override fun onIdCaptured(mode: IdCapture, session: IdCaptureSession, data: FrameData) {
        ScanditDataCaptureCoreModule.lastFrame = data
        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }
        val enabled = onIdCaptured.emitForResult(params, mode.isEnabled)
        mode.isEnabled = enabled
        ScanditDataCaptureCoreModule.lastFrame = null
    }

    override fun onIdLocalized(mode: IdCapture, session: IdCaptureSession, data: FrameData) {
        ScanditDataCaptureCoreModule.lastFrame = data
        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }
        val enabled = onIdLocalized.emitForResult(params, mode.isEnabled)
        mode.isEnabled = enabled
        ScanditDataCaptureCoreModule.lastFrame = null
    }

    override fun onIdRejected(mode: IdCapture, session: IdCaptureSession, data: FrameData) {
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

    companion object {
        const val ID_CAPTURE_DID_CAPTURE = "idCaptureListener-didCapture"
        const val ID_CAPTURE_DID_LOCALIZE = "idCaptureListener-didLocalize"
        const val ID_CAPTURE_DID_REJECT = "idCaptureListener-didReject"
        const val ID_CAPTURE_DID_FAIL = "idCaptureListener-didFail"
        const val FIELD_SESSION = "session"
    }
}
