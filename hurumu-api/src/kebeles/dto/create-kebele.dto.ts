import { IsString, IsOptional, IsInt, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateKebeleDto {
  @ApiProperty() @IsString() name: string;
  @ApiPropertyOptional() @IsOptional() @IsString() nameOromoo?: string;
  @ApiProperty() @IsInt() number: number;
  @ApiPropertyOptional() @IsOptional() @IsInt() population?: number;
  @ApiPropertyOptional() @IsOptional() @IsNumber() area?: number;
  @ApiPropertyOptional() @IsOptional() @IsString() chairperson?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() phone?: string;
}
