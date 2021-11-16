"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RejectedId = exports.LocalizedOnlyId = exports.IdCaptureError = void 0;
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
var LocalizedOnlyId = /** @class */ (function () {
    function LocalizedOnlyId() {
    }
    Object.defineProperty(LocalizedOnlyId.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    return LocalizedOnlyId;
}());
exports.LocalizedOnlyId = LocalizedOnlyId;
var RejectedId = /** @class */ (function () {
    function RejectedId() {
    }
    Object.defineProperty(RejectedId.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    return RejectedId;
}());
exports.RejectedId = RejectedId;
//# sourceMappingURL=IdCapture+Related.js.map