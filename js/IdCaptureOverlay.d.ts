import { DataCaptureOverlay, DataCaptureView } from 'scandit-react-native-datacapture-core/js/DataCaptureView';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { IdLayout, IdLayoutLineStyle, IdLayoutStyle } from './Enums';
import { IdCapture } from './IdCapture';
export declare class IdCaptureOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private idCapture;
    private view;
    private _idLayout;
    private _idLayoutStyle;
    private _idLayoutLineStyle;
    static withIdCapture(idCapture: IdCapture): IdCaptureOverlay;
    static withIdCaptureForView(idCapture: IdCapture, view: DataCaptureView | null): IdCaptureOverlay;
    private constructor();
    setIdLayout(idLayout: IdLayout): void;
    get idLayoutStyle(): IdLayoutStyle;
    set idLayoutStyle(style: IdLayoutStyle);
    get idLayoutLineStyle(): IdLayoutLineStyle;
    set idLayoutLineStyle(lineStyle: IdLayoutLineStyle);
}
