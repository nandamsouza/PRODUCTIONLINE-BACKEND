import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsOptional, MinLength } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({
    description: 'email:string',
    example: 'user@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description:'password: string',
    example:'string'
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
  @ApiProperty({
    description:'name: string',
    example:'string'
  })
  @IsString()
  @IsOptional()
  name?: string;
}
