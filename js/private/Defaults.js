"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Defaults = void 0;
var react_native_1 = require("react-native");
var Camera_Related_1 = require("scandit-react-native-datacapture-core/js/Camera+Related");
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
// tslint:disable-next-line:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureId;
// tslint:disable-next-line:variable-name
exports.Defaults = {
    IdCapture: {
        RecommendedCameraSettings: Camera_Related_1.CameraSettings
            .fromJSON(NativeModule.Defaults.IdCapture.RecommendedCameraSettings),
        IdCaptureOverlayDefaults: {
            defaultCapturedBrush: {
                fillColor: Common_1.Color
                    .fromJSON(NativeModule.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.fillColor),
                strokeColor: Common_1.Color
                    .fromJSON(NativeModule.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeColor),
                strokeWidth: NativeModule.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeWidth,
            },
            defaultLocalizedBrush: {
                fillColor: Common_1.Color
                    .fromJSON(NativeModule.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.fillColor),
                strokeColor: Common_1.Color
                    .fromJSON(NativeModule.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeColor),
                strokeWidth: NativeModule.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeWidth,
            },
            defaultRejectedBrush: {
                fillColor: Common_1.Color
                    .fromJSON(NativeModule.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.fillColor),
                strokeColor: Common_1.Color
                    .fromJSON(NativeModule.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeColor),
                strokeWidth: NativeModule.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeWidth,
            },
        },
    },
};
//# sourceMappingURL=Defaults.js.map