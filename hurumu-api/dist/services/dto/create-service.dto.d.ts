import { ServiceCategory } from '../../common/enums';
export declare class CreateServiceDto {
    name: string;
    nameOromoo?: string;
    nameAmharic?: string;
    slug: string;
    description: string;
    category: ServiceCategory;
    iconName?: string;
    fee?: number;
    processingDays?: number;
    requiredDocs?: string[];
    steps?: string[];
    isOnline?: boolean;
    departmentId?: string;
}
