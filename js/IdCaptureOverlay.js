"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
exports.IdCaptureOverlay = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
var Defaults_1 = require("./private/Defaults");
var Enums_1 = require("./Enums");
var IdCaptureOverlay = /** @class */ (function (_super) {
    __extends(IdCaptureOverlay, _super);
    function IdCaptureOverlay() {
        var _this = _super.call(this) || this;
        _this.type = 'idCapture';
        _this._idLayout = Enums_1.IdLayout.Auto;
        _this._idLayoutStyle = Enums_1.IdLayoutStyle.Rounded;
        _this._idLayoutLineStyle = Enums_1.IdLayoutLineStyle.Light;
        _this._defaultCapturedBrush = new Common_1.Brush(Defaults_1.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.fillColor, Defaults_1.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeColor, Defaults_1.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultCapturedBrush.strokeWidth);
        _this._defaultLocalizedBrush = new Common_1.Brush(Defaults_1.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.fillColor, Defaults_1.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeColor, Defaults_1.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultLocalizedBrush.strokeWidth);
        _this._defaultRejectedBrush = new Common_1.Brush(Defaults_1.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.fillColor, Defaults_1.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeColor, Defaults_1.Defaults.IdCapture.IdCaptureOverlayDefaults.defaultRejectedBrush.strokeWidth);
        _this._capturedBrush = _this._defaultCapturedBrush;
        _this._localizedBrush = _this._defaultLocalizedBrush;
        _this._rejectedBrush = _this._defaultRejectedBrush;
        return _this;
    }
    IdCaptureOverlay.withIdCapture = function (idCapture) {
        return IdCaptureOverlay.withIdCaptureForView(idCapture, null);
    };
    IdCaptureOverlay.withIdCaptureForView = function (idCapture, view) {
        var overlay = new IdCaptureOverlay();
        overlay.idCapture = idCapture;
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    };
    IdCaptureOverlay.prototype.setIdLayout = function (idLayout) {
        this._idLayout = idLayout;
        this.idCapture.didChange();
    };
    Object.defineProperty(IdCaptureOverlay.prototype, "idLayoutStyle", {
        get: function () {
            return this._idLayoutStyle;
        },
        set: function (style) {
            this._idLayoutStyle = style;
            this.idCapture.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdCaptureOverlay.prototype, "idLayoutLineStyle", {
        get: function () {
            return this._idLayoutLineStyle;
        },
        set: function (lineStyle) {
            this._idLayoutLineStyle = lineStyle;
            this.idCapture.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdCaptureOverlay.prototype, "capturedBrush", {
        get: function () {
            return this._capturedBrush;
        },
        set: function (brush) {
            this._capturedBrush = brush;
            this.idCapture.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdCaptureOverlay.prototype, "localizedBrush", {
        get: function () {
            return this._localizedBrush;
        },
        set: function (brush) {
            this._localizedBrush = brush;
            this.idCapture.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdCaptureOverlay.prototype, "rejectedBrush", {
        get: function () {
            return this._rejectedBrush;
        },
        set: function (brush) {
            this._rejectedBrush = brush;
            this.idCapture.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdCaptureOverlay.prototype, "defaultCapturedBrush", {
        get: function () {
            return this._defaultCapturedBrush;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdCaptureOverlay.prototype, "defaultLocalizedBrush", {
        get: function () {
            return this._defaultLocalizedBrush;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdCaptureOverlay.prototype, "defaultRejectedBrush", {
        get: function () {
            return this._defaultRejectedBrush;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], IdCaptureOverlay.prototype, "idCapture", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], IdCaptureOverlay.prototype, "view", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('idLayout')
    ], IdCaptureOverlay.prototype, "_idLayout", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('idLayoutStyle')
    ], IdCaptureOverlay.prototype, "_idLayoutStyle", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('idLayoutLineStyle')
    ], IdCaptureOverlay.prototype, "_idLayoutLineStyle", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('capturedBrush')
    ], IdCaptureOverlay.prototype, "_capturedBrush", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('localizedBrush')
    ], IdCaptureOverlay.prototype, "_localizedBrush", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('rejectedBrush')
    ], IdCaptureOverlay.prototype, "_rejectedBrush", void 0);
    return IdCaptureOverlay;
}(Serializeable_1.DefaultSerializeable));
exports.IdCaptureOverlay = IdCaptureOverlay;
//# sourceMappingURL=IdCaptureOverlay.js.map