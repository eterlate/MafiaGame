import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dtos/login-user.dto';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService){}

    @Post('/login')
    login(@Body() dto: LoginUserDto) {
        return this.authService.login(dto)
    }

    @Post('/registration')
    registration(@Body() dto: CreateUserDto) {
        return this.authService.registration(dto)
    }
}
