import { IsString, IsEnum, IsOptional, IsBoolean, IsNumber, IsArray } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ServiceCategory } from '../../common/enums';

export class CreateServiceDto {
  @ApiProperty() @IsString() name: string;
  @ApiPropertyOptional() @IsOptional() @IsString() nameOromoo?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() nameAmharic?: string;
  @ApiProperty() @IsString() slug: string;
  @ApiProperty() @IsString() description: string;
  @ApiProperty({ enum: ServiceCategory }) @IsEnum(ServiceCategory) category: ServiceCategory;
  @ApiPropertyOptional() @IsOptional() @IsString() iconName?: string;
  @ApiPropertyOptional() @IsOptional() @IsNumber() fee?: number;
  @ApiPropertyOptional() @IsOptional() @IsNumber() processingDays?: number;
  @ApiPropertyOptional({ type: [String] }) @IsOptional() @IsArray() @IsString({ each: true }) requiredDocs?: string[];
  @ApiPropertyOptional({ type: [String] }) @IsOptional() @IsArray() @IsString({ each: true }) steps?: string[];
  @ApiPropertyOptional() @IsOptional() @IsBoolean() isOnline?: boolean;
  @ApiPropertyOptional() @IsOptional() @IsString() departmentId?: string;
}
