#import "ScanditDataCaptureId.h"
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureId, RCTEventEmitter)
RCT_EXTERN_METHOD(finishDidCaptureCallback : (BOOL)enabled)
RCT_EXTERN_METHOD(finishDidLocalizeCallback : (BOOL)enabled)
RCT_EXTERN_METHOD(finishDidRejectCallback : (BOOL)enabled)
RCT_EXTERN_METHOD(reset : (RCTPromiseResolveBlock)resolve reject : (RCTPromiseRejectBlock)reject)
@end
