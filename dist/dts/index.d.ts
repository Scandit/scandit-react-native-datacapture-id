import { IdLayoutStyle, IdLayoutLineStyle, TextHintPosition, CapturedId, RejectionReason, IdCaptureSettings, IdCaptureFeedback } from './id';
export { AamvaBarcodeVerificationResult, AamvaBarcodeVerificationStatus, ApplicationStatus, BarcodeResult, CapturedId, CapturedSides, DataConsistencyCheck, DataConsistencyResult, DateResult, DriverLicense, DrivingLicenseCategory, DrivingLicenseDetails, Duration, FullDocumentScanner, HealthInsuranceCard, IdAnonymizationMode, IdCapture, IdCaptureDocument, IdCaptureDocumentType, IdCaptureFeedback, IdCaptureListener, IdCaptureOverlay, IdCaptureRegion, IdCaptureScanner, IdCaptureSettings, IdCard, IdFieldType, IdImageType, IdImages, IdLayoutLineStyle, IdLayoutStyle, IdSide, MRZResult, MobileDocumentDataElement, MobileDocumentOCRResult, MobileDocumentResult, MobileDocumentScanner, Passport, PassportType, PhysicalDocumentScanner, ProfessionalDrivingPermit, RegionSpecific, RegionSpecificSubtype, RejectionReason, ResidencePermit, Sex, SingleSideScanner, TextHintPosition, UsRealIdStatus, VIZResult, VehicleRestriction, VerificationResult, VisaDetails, VisaIcao, VisaLetter } from './id';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Brush, TorchSwitchControl, ZoomSwitchControl } from 'scandit-react-native-datacapture-core';
import type { ScanditNavigationProp } from 'scandit-react-native-datacapture-core';



/**
 * Configuration for the {@link IdCaptureOverlay} that {@link IdCaptureAioView} attaches by default. Every member is optional; omitted members keep the overlay’s own default.
 *
 * @since 8.7.0
 */
interface IdCaptureAioBasicOverlayProps {
    /**
     * Whether to attach the basic overlay at all. Defaults to *true*; pass *false* to render the camera preview without an overlay.
     *
     * @since 8.7.0
     */
    enabled?: boolean;
    /**
     * Brush used to draw documents that were captured.
     *
     * @since 8.7.0
     */
    capturedBrush?: Brush;
    /**
     * Brush used to draw documents that were rejected.
     *
     * @since 8.7.0
     */
    rejectedBrush?: Brush;
    /**
     * Brush used to draw documents that were localized but not yet captured.
     *
     * @since 8.7.0
     */
    localizedBrush?: Brush;
    /**
     * Layout style of the viewfinder frame drawn for the document.
     *
     * @since 8.7.0
     */
    idLayoutStyle?: IdLayoutStyle;
    /**
     * Line style of the viewfinder frame drawn for the document.
     *
     * @since 8.7.0
     */
    idLayoutLineStyle?: IdLayoutLineStyle;
    /**
     * Whether the overlay shows scanning hint text.
     *
     * @since 8.7.0
     */
    showTextHints?: boolean;
    /**
     * Position of the hint text relative to the viewfinder.
     *
     * @since 8.7.0
     */
    textHintPosition?: TextHintPosition;
    /**
     * Hint text shown while the front side of a document is being scanned.
     *
     * @since 8.7.0
     */
    frontSideTextHint?: string;
    /**
     * Hint text shown while the back side of a document is being scanned.
     *
     * @since 8.7.0
     */
    backSideTextHint?: string;
}
/**
 * Configuration for {@link IdCaptureAioView}. {@link IdCaptureAioViewProps.idCaptureSettings} is required; every other member is optional.
 *
 * @since 8.7.0
 */
interface IdCaptureAioViewProps {
    /**
     * Style applied to the view, defaulting to `{ flex: 1 }`. This is the only React Native `View` prop the component forwards — it renders its own {@link DataCaptureView} and passes nothing else through.
     *
     * @since 8.7.0
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Navigation object for the screen the component is rendered on, for example React Navigation’s `navigation` prop (typed as [ScanditNavigationProp](#)). When it is provided, scanning is suspended — the mode is disabled and the camera turned off — while the screen is blurred or the application is backgrounded, and resumed when the screen regains focus. Ignored while {@link IdCaptureAioViewProps.disabled} is set.
     *
     * @since 8.7.0
     */
    navigation?: ScanditNavigationProp;
    /**
     * Set to *true* to keep scanning off. Leaving it *false* does not keep scanning on — navigation and app-state handling still turn the mode on and off on their own.
     *
     * {@link IdCaptureAioViewHandle.enable} and {@link IdCaptureAioViewHandle.disable} change the same state directly. If you call those, this prop no longer reflects whether the component is actually scanning.
     *
     * @since 8.7.0
     */
    disabled?: boolean;
    /**
     * Turns off the automatic enabling and disabling of the mode in response to the application moving between foreground and background.
     *
     * @since 8.7.0
     */
    appStateHandlingDisabled?: boolean;
    /**
     * Called whenever a document is recognized and parsed.
     *
     * @since 8.7.0
     */
    didCaptureId?(capturedId: CapturedId): void;
    /**
     * Called whenever a document or one of its parts is recognized in a frame but rejected, with the {@link RejectionReason} explaining why.
     *
     * @since 8.7.0
     */
    didRejectId?(rejectedId: CapturedId | null, reason: RejectionReason): void;
    /**
     * The settings applied to the underlying {@link IdCapture} mode. **Required** — the default {@link IdCaptureSettings} accept no documents, so a view without explicit settings would never scan anything. Omitting it is a compile error.
     *
     * @since 8.7.0
     */
    idCaptureSettings: IdCaptureSettings;
    /**
     * Configuration for the basic overlay, described by {@link IdCaptureAioBasicOverlayProps}. The overlay is attached by default, so omitting this prop yields the default overlay. To skip it entirely:
     *
     * ```jsx
     * <IdCaptureAioView
     *   idCaptureSettings={settings}
     *   basicOverlay={{ enabled: false }}
     * />
     * ```
     *
     * @since 8.7.0
     */
    basicOverlay?: IdCaptureAioBasicOverlayProps;
    /**
     * Adds a torch toggle control drawn on top of the camera preview.
     *
     * @since 8.7.0
     */
    torchSwitchControl?: TorchSwitchControl | null;
    /**
     * Adds a zoom toggle control drawn on top of the camera preview.
     *
     * @since 8.7.0
     */
    zoomSwitchControl?: ZoomSwitchControl | null;
    /**
     * Sound and vibration feedback emitted on capture and rejection. Omit to use the SDK default.
     *
     * @since 8.7.0
     */
    feedback?: IdCaptureFeedback;
}
/**
 * Imperative operations on an {@link IdCaptureAioView}, reached through a `ref` on the component.
 *
 * @since 8.7.0
 */
interface IdCaptureAioViewHandle {
    /**
     * Resets the underlying {@link IdCapture} mode’s capture session, discarding the documents captured so far.
     *
     * @since 8.7.0
     */
    reset(): Promise<void>;
    /**
     * Turns scanning on now: enables the mode and turns the camera on. Automatic navigation and application-state handling may subsequently turn it off again.
     *
     * @since 8.7.0
     */
    enable(): Promise<void>;
    /**
     * Turns scanning off now: disables the mode and turns the camera off.
     *
     * @since 8.7.0
     */
    disable(): Promise<void>;
}
/**
 * An all-in-one React component for scanning personal identification documents. Rendering this single element replaces the manual assembly of a {@link DataCaptureContext}, an {@link IdCapture} mode, a {@link DataCaptureView} and an {@link IdCaptureOverlay} — the component owns all four, along with its camera claim and its lifecycle.
 *
 * The component must be rendered inside a [ScanditProvider](#), which supplies the {@link DataCaptureContext} and the shared camera. Scanning starts once the component is mounted and enabled, and stops when it unmounts.
 *
 * Configuration is passed through {@link IdCaptureAioViewProps}. To gain manual control over the component, attach a React `ref` typed as {@link IdCaptureAioViewHandle}.
 *
 * @since 8.7.0
 */
declare const IdCaptureAioView: React.ForwardRefExoticComponent<IdCaptureAioViewProps & React.RefAttributes<IdCaptureAioViewHandle>>;

declare namespace internal_d {
  export {
  };
}





export { IdCaptureAioView, internal_d as _internal };
export type { IdCaptureAioBasicOverlayProps, IdCaptureAioViewHandle, IdCaptureAioViewProps };
