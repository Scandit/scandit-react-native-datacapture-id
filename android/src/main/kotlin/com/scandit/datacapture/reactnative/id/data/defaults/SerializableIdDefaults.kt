/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.id.data.defaults

import com.scandit.datacapture.reactnative.core.data.SerializableData
import com.scandit.datacapture.reactnative.core.utils.writableMap

class SerializableIdDefaults(
    private val serializableIdCaptureDefaults: SerializableIdCaptureDefaults
) : SerializableData {

    override fun toWritableMap() = writableMap {
        putMap(FIELD_ID_CAPTURE_DEFAULTS, serializableIdCaptureDefaults.toWritableMap())
    }

    private companion object {
        const val FIELD_ID_CAPTURE_DEFAULTS = "IdCapture"
    }
}
