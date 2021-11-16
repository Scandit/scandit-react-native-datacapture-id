import { CapturedId } from './CapturedId';
import { LocalizedOnlyId, RejectedId } from './IdCapture+Related';
export declare class IdCaptureSession {
    private _newlyCapturedId;
    get newlyCapturedId(): CapturedId | null;
    private _frameSequenceId;
    get frameSequenceId(): number;
    private _localizedOnlyId;
    get localizedOnlyId(): LocalizedOnlyId | null;
    private _newlyRejectedId;
    get newlyRejectedId(): RejectedId | null;
    private _error;
    private static fromJSON;
}
