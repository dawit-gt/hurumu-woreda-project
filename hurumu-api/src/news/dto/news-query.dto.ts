import { IsOptional, IsEnum, IsNumberString, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { NewsTag, NewsStatus } from '../../common/enums';

export class NewsQueryDto {
  @IsOptional() @IsNumberString() page?: string;
  @IsOptional() @IsNumberString() limit?: string;
  @IsOptional() @IsEnum(NewsTag) tag?: NewsTag;
  @IsOptional() @IsEnum(NewsStatus) status?: NewsStatus;
  @IsOptional() @Transform(({ value }) => value === 'true') isUrgent?: boolean;
  @IsOptional() @IsString() departmentId?: string;
  @IsOptional() @IsString() search?: string;
}
