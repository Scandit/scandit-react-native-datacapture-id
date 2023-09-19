"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdCapture = void 0;
var Camera_Related_1 = require("scandit-react-native-datacapture-core/js/Camera+Related");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var IdCaptureListenerProxy_1 = require("./native/IdCaptureListenerProxy");
var IdCaptureProxy_1 = require("./native/IdCaptureProxy");
var Defaults_1 = require("./private/Defaults");
var IdCapture = /** @class */ (function (_super) {
    __extends(IdCapture, _super);
    function IdCapture() {
        var _this = _super.call(this) || this;
        _this.isInListenerCallback = false;
        _this.type = 'idCapture';
        _this._isEnabled = true;
        _this.privateContext = null;
        _this.listeners = [];
        _this.listenerProxy = IdCaptureListenerProxy_1.IdCaptureListenerProxy.forIdCapture(_this);
        _this.proxy = IdCaptureProxy_1.IdCaptureProxy.forIdCapture(_this);
        return _this;
    }
    Object.defineProperty(IdCapture.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (isEnabled) {
            this._isEnabled = isEnabled;
            if (!this.isInListenerCallback) {
                // If we're "in" a listener callback, we don't want to deserialize the context to update the enabled state,
                // but rather pass that back to be applied in the native callback.
                this.didChange();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdCapture.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdCapture, "recommendedCameraSettings", {
        get: function () {
            return new Camera_Related_1.CameraSettings(Defaults_1.Defaults.IdCapture.RecommendedCameraSettings);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdCapture.prototype, "_context", {
        get: function () {
            return this.privateContext;
        },
        set: function (newContext) {
            if (newContext == null) {
                this.listenerProxy.unsubscribeListener();
            }
            else if (this.privateContext == null) {
                this.listenerProxy.subscribeListener();
            }
            this.privateContext = newContext;
        },
        enumerable: false,
        configurable: true
    });
    IdCapture.forContext = function (context, settings) {
        var mode = new IdCapture();
        mode.settings = settings;
        if (context) {
            context.addMode(mode);
        }
        return mode;
    };
    IdCapture.prototype.addListener = function (listener) {
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    };
    IdCapture.prototype.removeListener = function (listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    };
    IdCapture.prototype.reset = function () {
        return this.proxy.reset();
    };
    IdCapture.prototype.didChange = function () {
        if (this.context) {
            return this.context.update();
        }
        else {
            return Promise.resolve();
        }
    };
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], IdCapture.prototype, "isInListenerCallback", void 0);
    __decorate([
        (0, Serializeable_1.nameForSerialization)('enabled')
    ], IdCapture.prototype, "_isEnabled", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], IdCapture.prototype, "privateContext", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], IdCapture.prototype, "listeners", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], IdCapture.prototype, "listenerProxy", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], IdCapture.prototype, "proxy", void 0);
    return IdCapture;
}(Serializeable_1.DefaultSerializeable));
exports.IdCapture = IdCapture;
//# sourceMappingURL=IdCapture.js.map