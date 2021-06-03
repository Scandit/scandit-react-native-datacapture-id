/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditIdCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureId {
    func registerDeserializer() {
        let deserializer = IdCaptureDeserializer()
        deserializer.delegate = self
        ScanditDataCaptureCore.register(modeDeserializer: deserializer)
    }
}

extension ScanditDataCaptureId: IdCaptureDeserializerDelegate {
    func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                               didStartDeserializingMode mode: IdCapture,
                               from JSONValue: JSONValue) {

    }

    func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                               didFinishDeserializingMode mode: IdCapture,
                               from JSONValue: JSONValue) {
        captureMode = mode

        if JSONValue.containsKey("enabled") {
            mode.isEnabled = JSONValue.bool(forKey: "enabled")
        }

         mode.addListener(self)
    }

    func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                               didStartDeserializingSettings settings: IdCaptureSettings,
                               from JSONValue: JSONValue) {
    }

    func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                               didFinishDeserializingSettings settings: IdCaptureSettings,
                               from JSONValue: JSONValue) {
    }

    func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                               didStartDeserializingOverlay overlay: IdCaptureOverlay,
                               from JSONValue: JSONValue) {
    }

    func idCaptureDeserializer(_ deserializer: IdCaptureDeserializer,
                               didFinishDeserializingOverlay overlay: IdCaptureOverlay,
                               from JSONValue: JSONValue) {
    }
}
