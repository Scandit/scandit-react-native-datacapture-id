/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.id.data.defaults

import com.scandit.datacapture.reactnative.core.data.SerializableData
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableCameraSettingsDefaults
import com.scandit.datacapture.reactnative.core.utils.putData
import com.scandit.datacapture.reactnative.core.utils.writableMap

class SerializableIdCaptureDefaults(
    private val recommendedCameraSettings: SerializableCameraSettingsDefaults,
    private val idCaptureOverlayDefaults: IdCaptureOverlayDefaults,
) : SerializableData {

    override fun toWritableMap() = writableMap {
        putMap(FIELD_RECOMMENDED_CAMERA_SETTINGS, recommendedCameraSettings.toWritableMap())
        putData(FIELD_ID_CAPTURE_OVERLAY_DEFAULTS, idCaptureOverlayDefaults.defaultsMap())
    }

    private companion object {
        const val FIELD_RECOMMENDED_CAMERA_SETTINGS = "RecommendedCameraSettings"
        const val FIELD_ID_CAPTURE_OVERLAY_DEFAULTS = "IdCaptureOverlayDefaults"
    }
}
