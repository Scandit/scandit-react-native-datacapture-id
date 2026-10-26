import { IdCaptureSettings, IdLayoutStyle, IdLayoutLineStyle, TextHintPosition, IdCaptureFeedback, IdCapture, CapturedId, RejectionReason } from './id';
export { AamvaBarcodeVerificationResult, AamvaBarcodeVerificationStatus, BarcodeResult, CapturedId, CapturedSides, DataConsistencyCheck, DataConsistencyResult, DateResult, DriverLicense, DrivingLicenseCategory, DrivingLicenseDetails, Duration, FullDocumentScanner, HealthInsuranceCard, IdAnonymizationMode, IdCapture, IdCaptureDocument, IdCaptureDocumentType, IdCaptureFeedback, IdCaptureListener, IdCaptureOverlay, IdCaptureRegion, IdCaptureScanner, IdCaptureSettings, IdCard, IdFieldType, IdImageType, IdImages, IdLayoutLineStyle, IdLayoutStyle, IdSide, MRZResult, MobileDocumentDataElement, MobileDocumentOCRResult, MobileDocumentResult, MobileDocumentScanner, Passport, PhysicalDocumentScanner, ProfessionalDrivingPermit, RegionSpecific, RegionSpecificSubtype, RejectionReason, ResidencePermit, Sex, SingleSideScanner, TextHintPosition, UsRealIdStatus, VIZResult, VehicleRestriction, VerificationResult, VisaIcao } from './id';
import React from 'react';
import { DataCaptureContext, Brush, CameraSettings, FrameSourceState, CameraPosition, TorchState, TorchSwitchControl, ZoomSwitchControl, _internal, DataCaptureView, Size, Orientation } from 'scandit-react-native-datacapture-core';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { ViewProps } from 'react-native';

interface IdCaptureViewProps$1 {
    context: DataCaptureContext;
    isEnabled: boolean;
    idCaptureSettings?: IdCaptureSettings | null;
    externalTransactionId?: string | null;
    capturedBrush?: Brush | null;
    rejectedBrush?: Brush | null;
    localizedBrush?: Brush | null;
    idLayoutStyle?: IdLayoutStyle | null;
    idLayoutLineStyle?: IdLayoutLineStyle | null;
    showTextHints?: boolean | null;
    textHintPosition?: TextHintPosition | null;
    frontSideTextHint?: string | null;
    backSideTextHint?: string | null;
    cameraSettings?: CameraSettings | null;
    desiredCameraState?: FrameSourceState | null;
    desiredCameraPosition?: CameraPosition | null;
    desiredTorchState?: TorchState | null;
    torchSwitchControl?: TorchSwitchControl | null;
    zoomSwitchControl?: ZoomSwitchControl | null;
    feedback?: IdCaptureFeedback;
    navigation?: NavigationProp<ParamListBase>;
    didCaptureId?(idCapture: IdCapture, capturedId: CapturedId): void;
    didRejectId?(idCapture: IdCapture, rejectedId: CapturedId | null, reason: RejectionReason): void;
}
interface IdCaptureViewHandle$1 {
    reset(): void;
}
declare const IdCaptureView$1: React.ForwardRefExoticComponent<IdCaptureViewProps$1 & React.RefAttributes<IdCaptureViewHandle$1>>;

/**
 * Basic-overlay configuration. The overlay is attached by default; pass
 * `{ enabled: false }` to skip it.
 */
interface IdCaptureBasicOverlayProps {
    /** Whether to attach the basic overlay. Defaults to `true`. */
    enabled?: boolean;
    /** Brush applied to captured ID documents. */
    capturedBrush?: Brush;
    /** Brush applied to rejected ID documents. */
    rejectedBrush?: Brush;
    /** Brush applied to localized but not yet captured ID documents. */
    localizedBrush?: Brush;
    /** Layout style for the ID viewfinder frame. */
    idLayoutStyle?: IdLayoutStyle;
    /** Line style for the ID viewfinder frame. */
    idLayoutLineStyle?: IdLayoutLineStyle;
    /** Whether to show scanning hint text. */
    showTextHints?: boolean;
    /** Position of the hint text relative to the viewfinder. */
    textHintPosition?: TextHintPosition;
    /** Hint text shown when scanning the front side of a document. */
    frontSideTextHint?: string;
    /** Hint text shown when scanning the back side of a document. */
    backSideTextHint?: string;
}
interface IdCaptureViewProps extends ViewProps {
    /**
     * Optional navigation object (e.g. React Navigation's `navigation` prop).
     * When provided, scanning is suspended (mode + camera off) while the screen
     * is blurred or the app is backgrounded, and resumed when it returns —
     * unless `disabled` is set.
     */
    navigation?: _internal.ScanditNavigationProp;
    /**
     * Disable the mode. When set, scanning is kept off regardless of whether
     * automatic navigation-event handling and/or AppState handling is turned on.
     * You can also use the view handle methods `enable()` / `disable()` to
     * enable/disable once, but when using those this prop might go out of sync
     * with the actual state of the component. Setting this to `false` does not
     * guarantee that scanning is constantly running — automatic event handling
     * might still turn the mode on and off.
     */
    disabled?: boolean;
    /**
     * Disable the automatic enabling and disabling of the mode based on AppState.
     */
    appStateHandlingDisabled?: boolean;
    didCaptureId?: (capturedId: CapturedId) => void;
    didRejectId?: (rejectedId: CapturedId | null, reason: RejectionReason) => void;
    /** Full settings object. */
    idCaptureSettings?: IdCaptureSettings | null;
    /**
     * Basic overlay configuration. Omit (or pass `undefined`) to use defaults.
     * Pass `{ enabled: false }` to skip the overlay entirely.
     */
    basicOverlay?: IdCaptureBasicOverlayProps;
    /** Called when the view's size or orientation changes. */
    onDidChangeSize?: (view: DataCaptureView, size: Size, orientation: Orientation) => void;
    /** Native on-view torch toggle control. */
    torchSwitchControl?: TorchSwitchControl | null;
    /** Native on-view zoom toggle control. */
    zoomSwitchControl?: ZoomSwitchControl | null;
    /** Feedback configuration for capture and reject events. */
    feedback?: IdCaptureFeedback;
}
interface IdCaptureViewHandle {
    /** Reset the current capture session. */
    reset(): Promise<void>;
    /** Turn scanning on now (enable the mode, turn the camera on). */
    enable(): Promise<void>;
    /** Turn scanning off now (disable the mode, turn the camera off). */
    disable(): Promise<void>;
}
declare const IdCaptureView: React.ForwardRefExoticComponent<IdCaptureViewProps & React.RefAttributes<IdCaptureViewHandle>>;




type internal_d_IdCaptureBasicOverlayProps = IdCaptureBasicOverlayProps;
declare const internal_d_IdCaptureView: typeof IdCaptureView;
type internal_d_IdCaptureViewHandle = IdCaptureViewHandle;
declare namespace internal_d {
  export { internal_d_IdCaptureView as IdCaptureView };
  export type { internal_d_IdCaptureBasicOverlayProps as IdCaptureBasicOverlayProps, internal_d_IdCaptureViewHandle as IdCaptureViewHandle };
}

export { IdCaptureView$1 as IdCaptureView, internal_d as _internal };
export type { IdCaptureViewHandle$1 as IdCaptureViewHandle };
