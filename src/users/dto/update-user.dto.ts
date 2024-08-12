import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    description: 'passwrod:string',
    example: 'string',
  })
  @IsString()
  @IsOptional()
  @MinLength(6)
  password?: string;

  @ApiProperty({
    description: 'name:string',
    example: 'string',
  })
  @IsString()
  @IsOptional()
  name?: string;
}
