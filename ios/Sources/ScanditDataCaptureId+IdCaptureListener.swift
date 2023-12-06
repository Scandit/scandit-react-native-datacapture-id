/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditIdCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureId: IdCaptureListener {
    func idCapture(_ idCapture: IdCapture,
                   didCaptureIn session: IdCaptureSession,
                   frameData: FrameData) {
        ScanditDataCaptureCore.lastFrame = frameData
        defer { ScanditDataCaptureCore.lastFrame = nil }

        let body = ["session": session.jsonString]
        guard let value = didCaptureIdLock.wait(afterDoing: {
            return sendEvent(withName: .didCapture, body: body)
        }) else { return }
        idCapture.isEnabled = value
    }

    func idCapture(_ idCapture: IdCapture,
                   didLocalizeIn session: IdCaptureSession,
                   frameData: FrameData) {
        ScanditDataCaptureCore.lastFrame = frameData
        defer { ScanditDataCaptureCore.lastFrame = nil }

        let body = ["session": session.jsonString]
        guard let value = didLocalizeIdLock.wait(afterDoing: {
            return sendEvent(withName: .didLocalize, body: body)
        }) else { return }
        idCapture.isEnabled = value
    }

    func idCapture(_ idCapture: IdCapture,
                   didRejectIn session: IdCaptureSession,
                   frameData: FrameData) {
        ScanditDataCaptureCore.lastFrame = frameData
        defer { ScanditDataCaptureCore.lastFrame = nil }

        let body = ["session": session.jsonString]
        guard let value = didRejectIdLock.wait(afterDoing: {
            return sendEvent(withName: .didReject, body: body)
        }) else { return }
        idCapture.isEnabled = value
    }

    func idCapture(_ idCapture: IdCapture,
                   didTimeoutIn session: IdCaptureSession,
                   frameData: FrameData) {
        ScanditDataCaptureCore.lastFrame = frameData
        defer { ScanditDataCaptureCore.lastFrame = nil }

        let body = ["session": session.jsonString]
        guard let value = didTimeOutIdLock.wait(afterDoing: {
            return sendEvent(withName: .didTimeOut, body: body)
        }) else { return }
        idCapture.isEnabled = value
    }

    @objc(finishDidCaptureCallback:)
    func finishDidCaptureCallback(enabled: Bool) {
        didCaptureIdLock.unlock(value: enabled)
    }

    @objc(finishDidLocalizeCallback:)
    func finishDidLocalizeCallback(enabled: Bool) {
        didLocalizeIdLock.unlock(value: enabled)
    }

    @objc(finishDidRejectCallback:)
    func finishDidRejectCallback(enabled: Bool) {
        didRejectIdLock.unlock(value: enabled)
    }

    @objc(finishDidTimeOutCallback:)
    func finishDidTimeOutCallback(enabled: Bool) {
        didTimeOutIdLock.unlock(value: enabled)
    }

    func idCapture(_ idCapture: IdCapture,
                   didfail session: IdCaptureSession,
                   frameData: FrameData) {
        ScanditDataCaptureCore.lastFrame = frameData
        defer { ScanditDataCaptureCore.lastFrame = nil }

        let body = ["session": session.jsonString]
        sendEvent(withName: .didFail, body: body)
    }
}
