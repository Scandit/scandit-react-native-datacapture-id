"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdCaptureError = void 0;
var IdCaptureError = /** @class */ (function () {
    function IdCaptureError() {
    }
    Object.defineProperty(IdCaptureError.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdCaptureError.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: false,
        configurable: true
    });
    IdCaptureError.fromJSON = function (json) {
        var error = new IdCaptureError();
        error._type = json.type;
        error._message = json.message;
        return error;
    };
    return IdCaptureError;
}());
exports.IdCaptureError = IdCaptureError;
//# sourceMappingURL=IdCapture+Related.js.map