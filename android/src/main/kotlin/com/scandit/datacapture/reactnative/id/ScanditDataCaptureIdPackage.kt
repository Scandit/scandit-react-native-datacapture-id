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

class ScanditDataCaptureIdPackage : ReactPackage {
    override fun createNativeModules(
        reactContext: ReactApplicationContext
    ): MutableList<NativeModule> = mutableListOf(ScanditDataCaptureIdModule(reactContext))

    override fun createViewManagers(
        reactContext: ReactApplicationContext
    ): MutableList<ViewManager<*, *>> = mutableListOf()
}
