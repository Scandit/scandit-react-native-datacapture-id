/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

#import <Foundation/Foundation.h>
#import <React/RCTEventEmitter.h>

// Block type for TurboModule event emission (Swift interop)
// Defined unconditionally for Swift header generation, used only in new arch
typedef void (^SDCEventEmitBlock)(NSDictionary *_Nonnull payload);

#ifdef RCT_NEW_ARCH_ENABLED
#import <ScanditReactNativeDatacaptureIdSpec/ScanditReactNativeDatacaptureIdSpec.h>
#import <React/RCTInitializing.h>
#import <React/RCTInvalidating.h>
#endif

/// Native module for Scandit Data Capture Id.
/// This Obj-C++ class conforms to the TurboModule spec and delegates to ScanditDataCaptureIdImpl
/// (Swift). Following the Adapter Pattern from React Native's TurboModule Swift guide.
#ifdef RCT_NEW_ARCH_ENABLED
@interface NativeScanditDataCaptureId
    : NativeScanditDataCaptureIdSpecBase <NativeScanditDataCaptureIdSpec, RCTInitializing,
                                          RCTInvalidating>
#else
@interface NativeScanditDataCaptureId : RCTEventEmitter <RCTBridgeModule>
#endif
@end
