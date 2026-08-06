import { DocumentType } from '../../common/enums';
export declare class CreateDocumentDto {
    title: string;
    titleOromoo?: string;
    description?: string;
    type: DocumentType;
    fileUrl: string;
    fileSize?: number;
    mimeType?: string;
    fiscalYear?: string;
    quarter?: number;
    isPublic?: boolean;
    departmentId?: string;
}
