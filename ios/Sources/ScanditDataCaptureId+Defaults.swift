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
        return ["Defaults": defaults]
    }

    var defaults: [String: Any] {
        return ["IdCapture": idCaptureDefaults]
    }

    var idCaptureDefaults: [String: Any] {
        return [
            "RecommendedCameraSettings": recommendedCameraSettings,
            "IdCaptureOverlayDefaults": idCaptureOverlayDefaults
        ]
    }

    var recommendedCameraSettings: [AnyHashable: Any] {
        return IdCapture.recommendedCameraSettings.rntsdc_dictionary
    }

    var idCaptureOverlayDefaults: [AnyHashable: Any] {
        return [
            "defaultCapturedBrush": IdCaptureOverlay.defaultCapturedBrush.rntsdc_dictionary,
            "defaultLocalizedBrush": IdCaptureOverlay.defaultLocalizedBrush.rntsdc_dictionary,
            "defaultRejectedBrush": IdCaptureOverlay.defaultRejectedBrush.rntsdc_dictionary
        ]
    }
}
