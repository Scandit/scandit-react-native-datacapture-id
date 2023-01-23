/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2021- Scandit AG. All rights reserved.
*/

import Foundation

enum ScanditDataCaptureIdEvent: String, CaseIterable {
    case didCapture = "idCaptureListener-didCapture"
    case didLocalize = "idCaptureListener-didLocalize"
    case didReject = "idCaptureListener-didReject"
    case didFail = "idCaptureListener-didFail"
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
        sendEvent(withName: name.rawValue, body: body)
        return true
    }
}
