import React from 'react';
import { Brush, CameraPosition, CameraSettings, DataCaptureContext, FrameSourceState, TorchState, TorchSwitchControl, ZoomSwitchControl } from 'scandit-react-native-datacapture-core';
import { IdCapture, IdCaptureFeedback, IdCaptureSettings, CapturedId, RejectionReason } from 'scandit-datacapture-frameworks-id';
interface IdCaptureViewProps {
    context: DataCaptureContext;
    isEnabled: boolean;
    idCaptureSettings?: IdCaptureSettings | null;
    capturedBrush?: Brush | null;
    rejectedBrush?: Brush | null;
    localizedBrush?: Brush | null;
    cameraSettings?: CameraSettings | null;
    desiredCameraState?: FrameSourceState | null;
    desiredCameraPosition?: CameraPosition | null;
    desiredTorchState?: TorchState | null;
    torchSwitchControl?: TorchSwitchControl | null;
    zoomSwitchControl?: ZoomSwitchControl | null;
    feedback?: IdCaptureFeedback;
    navigation?: any;
    didCaptureId?(idCapture: IdCapture, capturedId: CapturedId): void;
    didRejectId?(idCapture: IdCapture, rejectedId: CapturedId | null, reason: RejectionReason): void;
}
export interface IdCaptureViewHandle {
    reset(): void;
}
export declare const IdCaptureView: React.ForwardRefExoticComponent<IdCaptureViewProps & React.RefAttributes<IdCaptureViewHandle>>;
export {};
