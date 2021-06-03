import { CameraSettings } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { DataCaptureContext, DataCaptureMode } from 'scandit-react-native-datacapture-core/js/DataCaptureContext';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { IdCaptureListener } from './IdCaptureListener';
import { IdCaptureSettings } from './IdCaptureSettings';
export declare class IdCapture extends DefaultSerializeable implements DataCaptureMode {
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    private isInListenerCallback;
    get context(): DataCaptureContext | null;
    static get recommendedCameraSettings(): CameraSettings;
    private type;
    private _isEnabled;
    private settings;
    private privateContext;
    private get _context();
    private set _context(value);
    private listeners;
    private listenerProxy;
    private proxy;
    static forContext(context: DataCaptureContext | null, settings: IdCaptureSettings): IdCapture;
    private constructor();
    addListener(listener: IdCaptureListener): void;
    removeListener(listener: IdCaptureListener): void;
    reset(): Promise<void>;
    private didChange;
}
