#import "ScanditDataCaptureId.h"
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureId, RCTEventEmitter)
RCT_EXTERN_METHOD(finishDidCaptureCallback : (BOOL)enabled)
RCT_EXTERN_METHOD(finishDidLocalizeCallback : (BOOL)enabled)
RCT_EXTERN_METHOD(finishDidRejectCallback : (BOOL)enabled)
RCT_EXTERN_METHOD(finishDidTimeOutCallback : (BOOL)enabled)
RCT_EXTERN_METHOD(reset : (RCTPromiseResolveBlock)resolve reject : (RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(verifyCapturedId
                  : (NSString *)capturedIdJSON capturedIdJSON
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(createContextForBarcodeVerification
                  : (NSString *)context context
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(verifyCapturedIdAsync
                  : (NSString *)capturedIdJSON capturedIdJSON
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(verifyVizMrz
                  : (NSString *)capturedIdJSON capturedIdJSON
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(setModeEnabledState : (BOOL)enabled)

RCT_EXTERN_METHOD(updateIdCaptureOverlay
                  : (NSString *)overlayJson resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateIdCaptureMode
                  : (NSString *)modeJson resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(applyIdCaptureModeSettings
                  : (NSString *)modeSettingsJson resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateIdCaptureFeedback
                  : (NSString *)feedbackJson resolve
                  : (RCTPromiseResolveBlock)resolve reject
                  : (RCTPromiseRejectBlock)reject)
@end
