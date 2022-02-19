"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdCaptureListenerProxy = void 0;
var react_native_1 = require("react-native");
var CameraProxy_1 = require("scandit-react-native-datacapture-core/js/native/CameraProxy");
var IdCaptureSession_1 = require("../IdCaptureSession");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureId;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var IdCaptureListenerEventName;
(function (IdCaptureListenerEventName) {
    IdCaptureListenerEventName["didCapture"] = "idCaptureListener-didCapture";
    IdCaptureListenerEventName["didLocalize"] = "idCaptureListener-didLocalize";
    IdCaptureListenerEventName["didReject"] = "idCaptureListener-didReject";
    IdCaptureListenerEventName["didFail"] = "idCaptureListener-didFail";
})(IdCaptureListenerEventName || (IdCaptureListenerEventName = {}));
var IdCaptureListenerProxy = /** @class */ (function () {
    function IdCaptureListenerProxy() {
        this.nativeListeners = [];
    }
    IdCaptureListenerProxy.forIdCapture = function (textCapture) {
        var proxy = new IdCaptureListenerProxy();
        proxy.mode = textCapture;
        return proxy;
    };
    IdCaptureListenerProxy.prototype.subscribeListener = function () {
        var _this = this;
        var didCaptureListener = EventEmitter.addListener(IdCaptureListenerEventName.didCapture, function (body) {
            var session = IdCaptureSession_1.IdCaptureSession.fromJSON(JSON.parse(body.session));
            _this.notifyListenersOfDidCapture(session);
            NativeModule.finishDidCaptureCallback(_this.mode.isEnabled);
        });
        this.nativeListeners.push(didCaptureListener);
        var didLocalizeListener = EventEmitter.addListener(IdCaptureListenerEventName.didLocalize, function (body) {
            var session = IdCaptureSession_1.IdCaptureSession.fromJSON(JSON.parse(body.session));
            _this.notifyListenersOfDidLocalize(session);
            NativeModule.finishDidLocalizeCallback(_this.mode.isEnabled);
        });
        this.nativeListeners.push(didLocalizeListener);
        var didRejectListener = EventEmitter.addListener(IdCaptureListenerEventName.didReject, function (body) {
            var session = IdCaptureSession_1.IdCaptureSession.fromJSON(JSON.parse(body.session));
            _this.notifyListenersOfDidReject(session);
            NativeModule.finishDidRejectCallback(_this.mode.isEnabled);
        });
        this.nativeListeners.push(didRejectListener);
        var didFailListener = EventEmitter.addListener(IdCaptureListenerEventName.didFail, function (body) {
            var session = IdCaptureSession_1.IdCaptureSession.fromJSON(JSON.parse(body.session));
            _this.notifyListenersOfDidFail(session);
        });
        this.nativeListeners.push(didFailListener);
    };
    IdCaptureListenerProxy.prototype.unsubscribeListener = function () {
        this.nativeListeners.forEach(function (listener) { return listener.remove(); });
        this.nativeListeners = [];
    };
    IdCaptureListenerProxy.prototype.notifyListenersOfDidCapture = function (session) {
        var _this = this;
        var mode = this.mode;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(function (listener) {
            if (listener.didCaptureId) {
                listener.didCaptureId(_this.mode, session, CameraProxy_1.CameraProxy.getLastFrame);
            }
        });
        mode.isInListenerCallback = false;
    };
    IdCaptureListenerProxy.prototype.notifyListenersOfDidLocalize = function (session) {
        var _this = this;
        var mode = this.mode;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(function (listener) {
            if (listener.didLocalizeId) {
                listener.didLocalizeId(_this.mode, session, CameraProxy_1.CameraProxy.getLastFrame);
            }
        });
        mode.isInListenerCallback = false;
    };
    IdCaptureListenerProxy.prototype.notifyListenersOfDidReject = function (session) {
        var _this = this;
        var mode = this.mode;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(function (listener) {
            if (listener.didRejectId) {
                listener.didRejectId(_this.mode, session, CameraProxy_1.CameraProxy.getLastFrame);
            }
        });
        mode.isInListenerCallback = false;
    };
    IdCaptureListenerProxy.prototype.notifyListenersOfDidFail = function (session) {
        var _this = this;
        var mode = this.mode;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(function (listener) {
            if (listener.didFailWithError) {
                listener.didFailWithError(_this.mode, session._error, session, CameraProxy_1.CameraProxy.getLastFrame);
            }
        });
        mode.isInListenerCallback = false;
    };
    return IdCaptureListenerProxy;
}());
exports.IdCaptureListenerProxy = IdCaptureListenerProxy;
//# sourceMappingURL=IdCaptureListenerProxy.js.map