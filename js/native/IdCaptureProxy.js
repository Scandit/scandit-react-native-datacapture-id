"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdCaptureProxy = void 0;
var react_native_1 = require("react-native");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureId;
// tslint:enable:variable-name
var IdCaptureProxy = /** @class */ (function () {
    function IdCaptureProxy() {
    }
    IdCaptureProxy.forIdCapture = function (idCapture) {
        var proxy = new IdCaptureProxy();
        proxy.mode = idCapture;
        return proxy;
    };
    IdCaptureProxy.prototype.reset = function () {
        return NativeModule.reset();
    };
    return IdCaptureProxy;
}());
exports.IdCaptureProxy = IdCaptureProxy;
//# sourceMappingURL=IdCaptureProxy.js.map