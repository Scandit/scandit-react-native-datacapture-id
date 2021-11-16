import { Quadrilateral } from 'scandit-react-native-datacapture-core/js/Common';
export declare class IdCaptureError {
    private _type;
    get type(): string;
    private _message;
    get message(): string;
    private static fromJSON;
}
export declare class LocalizedOnlyId {
    private _location;
    get location(): Quadrilateral;
}
export declare class RejectedId {
    private _location;
    get location(): Quadrilateral;
}
