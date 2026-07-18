import { IsString, IsEnum, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NewsTag, NewsStatus } from '../../common/enums';

export class CreateNewsDto {
  @ApiProperty() @IsString() title: string;
  @ApiPropertyOptional() @IsOptional() @IsString() titleOromoo?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() titleAmharic?: string;
  @ApiProperty() @IsString() slug: string;
  @ApiProperty() @IsString() excerpt: string;
  @ApiProperty() @IsString() content: string;
  @ApiProperty({ enum: NewsTag }) @IsEnum(NewsTag) tag: NewsTag;
  @ApiPropertyOptional({ enum: NewsStatus }) @IsOptional() @IsEnum(NewsStatus) status?: NewsStatus;
  @ApiPropertyOptional() @IsOptional() @IsBoolean() isUrgent?: boolean;
  @ApiPropertyOptional() @IsOptional() @IsString() featuredImage?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() departmentId?: string;
}
