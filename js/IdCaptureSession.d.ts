import { CapturedId } from './CapturedId';
export declare class IdCaptureSession {
    private _newlyCapturedId;
    get newlyCapturedId(): CapturedId | null;
    private _frameSequenceId;
    get frameSequenceId(): number;
    private _error;
    private static fromJSON;
}
