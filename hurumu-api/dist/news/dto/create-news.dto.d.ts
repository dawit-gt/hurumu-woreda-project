import { NewsTag, NewsStatus } from '../../common/enums';
export declare class CreateNewsDto {
    title: string;
    titleOromoo?: string;
    titleAmharic?: string;
    slug: string;
    excerpt: string;
    content: string;
    tag: NewsTag;
    status?: NewsStatus;
    isUrgent?: boolean;
    featuredImage?: string;
    departmentId?: string;
}
