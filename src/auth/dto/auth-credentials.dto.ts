import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @ApiProperty({
    description: 'email:string',
    example: 'user@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'passwrod:string',
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
