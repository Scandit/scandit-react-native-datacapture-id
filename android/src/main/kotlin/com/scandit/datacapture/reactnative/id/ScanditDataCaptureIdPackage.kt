/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.id

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import com.scandit.datacapture.frameworks.id.IdCaptureModule
import com.scandit.datacapture.reactnative.core.utils.ReactNativeEventEmitter

class ScanditDataCaptureIdPackage : ReactPackage {
    override fun createNativeModules(
        reactContext: ReactApplicationContext
    ): MutableList<NativeModule> =
        mutableListOf(ScanditDataCaptureIdModule(reactContext, getIdCaptureModule(reactContext)))

    override fun createViewManagers(
        reactContext: ReactApplicationContext
    ): MutableList<ViewManager<*, *>> = mutableListOf()

    private fun getIdCaptureModule(reactContext: ReactApplicationContext): IdCaptureModule {
        val emitter = ReactNativeEventEmitter(reactContext)
        return IdCaptureModule(emitter).also {
            it.onCreate(reactContext)
        }
    }
}
