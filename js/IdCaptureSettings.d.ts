import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { IdAnonymizationMode, IdDocumentType, IdImageType, SupportedSides } from './Enums';
export declare class IdCaptureSettings extends DefaultSerializeable {
    private properties;
    private imageToResult;
    supportedDocuments: IdDocumentType[];
    supportedSides: SupportedSides;
    anonymizationMode: IdAnonymizationMode;
    constructor();
    setProperty(name: string, value: any): void;
    getProperty(name: string): any;
    setShouldPassImageTypeToResult(type: IdImageType, shouldPass: boolean): void;
    getShouldPassImageTypeToResult(type: IdImageType): boolean;
}
