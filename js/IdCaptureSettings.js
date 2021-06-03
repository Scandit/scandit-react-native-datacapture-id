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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdCaptureSettings = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var Enums_1 = require("./Enums");
var IdCaptureSettings = /** @class */ (function (_super) {
    __extends(IdCaptureSettings, _super);
    function IdCaptureSettings() {
        var _this = _super.call(this) || this;
        _this.properties = {};
        _this.imageToResult = {};
        _this.supportedDocuments = [];
        _this.supportedSides = Enums_1.SupportedSides.FrontOnly;
        return _this;
    }
    IdCaptureSettings.prototype.setProperty = function (name, value) {
        this.properties[name] = value;
    };
    IdCaptureSettings.prototype.getProperty = function (name) {
        return this.properties[name];
    };
    IdCaptureSettings.prototype.setShouldPassImageTypeToResult = function (type, shouldPass) {
        this.imageToResult[type] = shouldPass;
    };
    IdCaptureSettings.prototype.getShouldPassImageTypeToResult = function (type) {
        return this.imageToResult[type] || false;
    };
    return IdCaptureSettings;
}(Serializeable_1.DefaultSerializeable));
exports.IdCaptureSettings = IdCaptureSettings;
//# sourceMappingURL=IdCaptureSettings.js.map