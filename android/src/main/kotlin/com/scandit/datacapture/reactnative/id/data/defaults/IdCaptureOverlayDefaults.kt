/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.id.data.defaults

import com.scandit.datacapture.core.ui.style.Brush
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableBrushDefaults
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableWritableMap
import org.json.JSONObject

class IdCaptureOverlayDefaults(
    private val defaultCapturedBrush: Brush,
    private val defaultLocalizedBrush: Brush,
    private val defaultRejectedBrush: Brush,
) {

    fun defaultsMap(): SerializableWritableMap {
        val map = mutableMapOf<String, JSONObject>()

        map[FIELD_DEFAULT_CAPTURED_BRUSH] = SerializableBrushDefaults(
            defaultCapturedBrush
        ).toJSONObject()
        map[FIELD_DEFAULT_LOCALIZED_BRUSH] = SerializableBrushDefaults(
            defaultLocalizedBrush
        ).toJSONObject()
        map[FIELD_DEFAULT_REJECTED_BRUSH] = SerializableBrushDefaults(
            defaultRejectedBrush
        ).toJSONObject()

        return SerializableWritableMap(JSONObject(map as Map<String, JSONObject>))
    }

    private companion object {
        private const val FIELD_DEFAULT_CAPTURED_BRUSH = "defaultCapturedBrush"
        private const val FIELD_DEFAULT_LOCALIZED_BRUSH = "defaultLocalizedBrush"
        private const val FIELD_DEFAULT_REJECTED_BRUSH = "defaultRejectedBrush"
    }
}
