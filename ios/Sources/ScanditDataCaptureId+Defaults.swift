/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2021- Scandit AG. All rights reserved.
*/

import Foundation
import ScanditIdCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureId {
    override func constantsToExport() -> [AnyHashable: Any]! {
        return ["Defaults": idCaptureDefaults]
    }

    var idCaptureDefaults: [String: Any] {
        return [
            "RecommendedCameraSettings": recommendedCameraSettings,
            "IdCaptureOverlay": idCaptureOverlayDefaults
        ]
    }

    var recommendedCameraSettings: [AnyHashable: Any] {
        return IdCapture.recommendedCameraSettings.rntsdc_dictionary
    }

    var idCaptureOverlayDefaults: [AnyHashable: Any] {
        return [
            "DefaultCapturedBrush": IdCaptureOverlay.defaultCapturedBrush.rntsdc_dictionary,
            "DefaultLocalizedBrush": IdCaptureOverlay.defaultLocalizedBrush.rntsdc_dictionary,
            "DefaultRejectedBrush": IdCaptureOverlay.defaultRejectedBrush.rntsdc_dictionary
        ]
    }
}
