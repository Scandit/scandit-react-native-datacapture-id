"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdCaptureSession = void 0;
var CapturedId_1 = require("./CapturedId");
var IdCapture_Related_1 = require("./IdCapture+Related");
var IdCaptureSession = /** @class */ (function () {
    function IdCaptureSession() {
    }
    Object.defineProperty(IdCaptureSession.prototype, "newlyCapturedId", {
        get: function () {
            return this._newlyCapturedId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdCaptureSession.prototype, "frameSequenceId", {
        get: function () {
            return this._frameSequenceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdCaptureSession.prototype, "localizedOnlyId", {
        get: function () {
            return this._localizedOnlyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdCaptureSession.prototype, "newlyRejectedId", {
        get: function () {
            return this._newlyRejectedId;
        },
        enumerable: false,
        configurable: true
    });
    IdCaptureSession.fromJSON = function (json) {
        var session = new IdCaptureSession();
        if (json.newlyCapturedId) {
            session._newlyCapturedId = CapturedId_1.CapturedId.fromJSON(json.newlyCapturedId);
        }
        session._frameSequenceId = json.frameSequenceId;
        session._error = json.error ? IdCapture_Related_1.IdCaptureError.fromJSON(json.error) : null;
        return session;
    };
    return IdCaptureSession;
}());
exports.IdCaptureSession = IdCaptureSession;
//# sourceMappingURL=IdCaptureSession.js.map