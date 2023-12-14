import { DataCaptureContext } from 'scandit-react-native-datacapture-core/js/DataCaptureContext';
import { PrivateDataCaptureMode } from 'scandit-react-native-datacapture-core/js/private/PrivateDataCaptureContext';
import { IdCaptureError } from '../IdCapture+Related';
import { IdCaptureListener } from '../IdCaptureListener';
import { IdCaptureErrorJSON } from './SerializedTypes';
export interface PrivateIdCaptureError {
    fromJSON(json: IdCaptureErrorJSON): IdCaptureError;
}
export interface PrivateIdCapture extends PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
    isInListenerCallback: boolean;
    listeners: IdCaptureListener[];
    didChange: () => Promise<void>;
}
