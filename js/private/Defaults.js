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
            .fromJSON(NativeModule.Defaults.RecommendedCameraSettings),
        IdCaptureOverlayDefaults: {
            defaultCapturedBrush: {
                fillColor: Common_1.Color
                    .fromJSON(NativeModule.Defaults.IdCaptureOverlay.DefaultCapturedBrush.fillColor),
                strokeColor: Common_1.Color
                    .fromJSON(NativeModule.Defaults.IdCaptureOverlay.DefaultCapturedBrush.strokeColor),
                strokeWidth: NativeModule.Defaults.IdCaptureOverlay.DefaultCapturedBrush.strokeWidth,
            },
            defaultLocalizedBrush: {
                fillColor: Common_1.Color
                    .fromJSON(NativeModule.Defaults.IdCaptureOverlay.DefaultLocalizedBrush.fillColor),
                strokeColor: Common_1.Color
                    .fromJSON(NativeModule.Defaults.IdCaptureOverlay.DefaultLocalizedBrush.strokeColor),
                strokeWidth: NativeModule.Defaults.IdCaptureOverlay.DefaultLocalizedBrush.strokeWidth,
            },
            defaultRejectedBrush: {
                fillColor: Common_1.Color
                    .fromJSON(NativeModule.Defaults.IdCaptureOverlay.DefaultRejectedBrush.fillColor),
                strokeColor: Common_1.Color
                    .fromJSON(NativeModule.Defaults.IdCaptureOverlay.DefaultRejectedBrush.strokeColor),
                strokeWidth: NativeModule.Defaults.IdCaptureOverlay.DefaultRejectedBrush.strokeWidth,
            },
        },
    },
};
//# sourceMappingURL=Defaults.js.map