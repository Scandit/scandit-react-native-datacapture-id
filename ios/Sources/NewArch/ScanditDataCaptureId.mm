/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>
#import <ScanditReactNativeDatacaptureIdSpec/ScanditReactNativeDatacaptureIdSpec.h>
#import <ReactCommon/RCTTurboModule.h>
#import "ScanditDataCaptureId.h"
#import "ScanditDataCaptureId-Swift.h"

// Forward declare and import the shared method queue from Core module
// The actual implementation is in ScanditDataCaptureCore Swift module
@interface SDCSharedMethodQueue : NSObject
+ (dispatch_queue_t)queue;
@end

/// New Architecture (TurboModule) adapter for the Id native module.
/// Inherits from the generated spec base class and uses direct method declarations.
@implementation NativeScanditDataCaptureId {
    ScanditDataCaptureIdImpl *_impl;
}

RCT_EXPORT_MODULE(ScanditDataCaptureId)

- (instancetype)init {
    if (self = [super init]) {
        _impl = [[ScanditDataCaptureIdImpl alloc] init];
    }
    return self;
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (void)initialize {
    __weak NativeScanditDataCaptureId *weakSelf = self;
    SDCEventEmitBlock emitterBlock = ^(NSDictionary *_Nonnull payload) {
        __strong NativeScanditDataCaptureId *strongSelf = weakSelf;
        if (strongSelf) {
            [strongSelf emitOnScanditEvent:payload];
        }
    };
    [_impl setupWith:nil turboEmitter:emitterBlock];
}

- (dispatch_queue_t)methodQueue {
    return [SDCSharedMethodQueue queue];
}

- (NSDictionary *)constantsToExport {
    return [self getConstantsOnMainQueue];
}

- (NSDictionary *)getConstants {
    return [self getConstantsOnMainQueue];
}

- (NSDictionary *)getConstantsOnMainQueue {
    __block NSDictionary *constants;
    if ([NSThread isMainThread]) {
        constants = [_impl getConstants];
    } else {
        dispatch_sync(dispatch_get_main_queue(), ^{
            constants = [_impl getConstants];
        });
    }
    return constants;
}

- (NSArray<NSString *> *)supportedEvents {
    return [_impl supportedEvents];
}

- (void)invalidate {
    [_impl invalidate];
}

// MARK: - Native Module Methods

- (void)executeId:(NSDictionary *)data
          resolve:(RCTPromiseResolveBlock)resolve
           reject:(RCTPromiseRejectBlock)reject {
    [_impl executeIdWithData:data resolve:resolve reject:reject];
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params {
    return std::make_shared<facebook::react::NativeScanditDataCaptureIdSpecJSI>(params);
}

@end
