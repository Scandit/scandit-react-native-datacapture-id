import { IdNativeCallerProvider, IdProxyType } from 'scandit-datacapture-frameworks-id';
import { NativeCaller } from 'scandit-datacapture-frameworks-core';
export declare class RNIdNativeCallerProvider implements IdNativeCallerProvider {
    getNativeCaller(proxyType: IdProxyType): NativeCaller;
}
