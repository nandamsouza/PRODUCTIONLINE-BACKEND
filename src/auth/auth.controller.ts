import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Registro e Autenticaçao')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Autentica um usuário e retorna um token JWT' })
  async login(@Body() authCredentialsDto: AuthCredentialsDto) {
    const user = await this.authService.validateUser(
      authCredentialsDto.email,
      authCredentialsDto.password,
    );
    if (user) {
      return this.authService.login(user);
    } else {
      throw new UnauthorizedException('E-mail e/ou senha inválido(s).');
    }
  }

  @Post('register')
  @ApiOperation({ summary: 'Registra um novo usuário' })
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }
}
