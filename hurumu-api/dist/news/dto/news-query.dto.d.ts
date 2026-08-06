import { NewsTag, NewsStatus } from '../../common/enums';
export declare class NewsQueryDto {
    page?: string;
    limit?: string;
    tag?: NewsTag;
    status?: NewsStatus;
    isUrgent?: boolean;
    departmentId?: string;
    search?: string;
}
