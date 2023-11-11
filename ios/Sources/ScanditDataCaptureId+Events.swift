/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2021- Scandit AG. All rights reserved.
*/

import Foundation

enum ScanditDataCaptureIdEvent: String, CaseIterable {
    case didCapture = "IdCaptureListener.didCaptureId"
    case didLocalize = "IdCaptureListener.didLocalizeId"
    case didReject = "IdCaptureListener.didRejectId"
    case didTimeOut = "IdCaptureListener.didTimeout"
}

extension ScanditDataCaptureId {
    override func supportedEvents() -> [String]! {
        return ScanditDataCaptureIdEvent.allCases.map({$0.rawValue})
    }

    override func startObserving() {
        hasListeners = true
        registerRNTContextListener()
    }

    override func stopObserving() {
        hasListeners = false
        unlockLocks()
    }

    func sendEvent(withName name: ScanditDataCaptureIdEvent, body: Any!) -> Bool {
        guard hasListeners else { return false }
        do {
            let bodyData = try JSONSerialization.data(withJSONObject: body, options: [])
            let jsonBody = String(data: bodyData, encoding: .utf8)
            sendEvent(withName: name.rawValue, body: jsonBody)
        } catch {
            sendEvent(withName: name.rawValue, body: body)
        }
        return true
    }
}
