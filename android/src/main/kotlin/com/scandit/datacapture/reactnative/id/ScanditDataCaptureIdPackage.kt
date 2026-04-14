/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.id

import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import com.scandit.datacapture.frameworks.core.locator.DefaultServiceLocator
import com.scandit.datacapture.reactnative.core.ScanditReactPackageBase

class ScanditDataCaptureIdPackage : ScanditReactPackageBase() {
    private val serviceLocator = DefaultServiceLocator.getInstance()

    override fun createNativeModules(
        reactContext: ReactApplicationContext
    ): MutableList<NativeModule> {
        // Module sets up its own IdCaptureModule in init
        return mutableListOf(
            ScanditDataCaptureIdModule(reactContext, serviceLocator)
        )
    }

    override fun createViewManagers(
        reactContext: ReactApplicationContext
    ): MutableList<ViewManager<*, *>> = mutableListOf()

    override fun getModuleClasses(): List<Class<out NativeModule>> =
        listOf(ScanditDataCaptureIdModule::class.java)
}
