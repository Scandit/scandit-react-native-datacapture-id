/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditIdCapture

extension ScanditDataCaptureId: IdCaptureListener {
    func idCapture(_ idCapture: IdCapture,
                   didCaptureIn session: IdCaptureSession,
                   frameData: FrameData) {
        let body = ["session": session.jsonString]
        guard let value = didCaptureIdLock.wait(afterDoing: {
            return sendEvent(withName: .didCapture, body: body)
        }) else { return }
        idCapture.isEnabled = value
    }

    @objc(finishDidCaptureCallback:)
    func finishDidCaptureCallback(enabled: Bool) {
        didCaptureIdLock.unlock(value: enabled)
    }

    func idCapture(_ idCapture: IdCapture,
                   didfail session: IdCaptureSession,
                   frameData: FrameData) {
        let body = ["session": session.jsonString]
        sendEvent(withName: .didFail, body: body)
    }
}
