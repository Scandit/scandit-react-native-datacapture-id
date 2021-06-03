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
import com.scandit.datacapture.reactnative.core.utils.EventWithResult
import com.scandit.datacapture.reactnative.core.utils.writableMap

class RCTIdCaptureListener(
    private val eventEmitter: DeviceEventManagerModule.RCTDeviceEventEmitter
) : IdCaptureListener {

    private val onIdCaptured =
        EventWithResult<Boolean>(ID_CAPTURE_DID_CAPTURE, eventEmitter)

    override fun onIdCaptured(mode: IdCapture, session: IdCaptureSession, data: FrameData) {
        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }
        val enabled = onIdCaptured.emitForResult(params, mode.isEnabled)
        mode.isEnabled = enabled
    }

    override fun onErrorEncountered(
        mode: IdCapture,
        error: Throwable,
        session: IdCaptureSession,
        data: FrameData
    ) {
        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }
        eventEmitter.emit(ID_CAPTURE_DID_FAIL, params)
    }

    fun finishDidCaptureCallback(enabled: Boolean) {
        onIdCaptured.onResult(enabled)
    }

    companion object {
        const val ID_CAPTURE_DID_CAPTURE = "idCaptureListener-didCapture"
        const val ID_CAPTURE_DID_FAIL = "idCaptureListener-didFail"
        const val FIELD_SESSION = "session"
    }
}
