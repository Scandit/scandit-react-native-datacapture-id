"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Defaults = void 0;
var react_native_1 = require("react-native");
var Camera_Related_1 = require("scandit-react-native-datacapture-core/js/Camera+Related");
// tslint:disable-next-line:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureId;
// tslint:disable-next-line:variable-name
exports.Defaults = {
    IdCapture: {
        RecommendedCameraSettings: Camera_Related_1.CameraSettings
            .fromJSON(NativeModule.Defaults.IdCapture.RecommendedCameraSettings),
    },
};
//# sourceMappingURL=Defaults.js.map