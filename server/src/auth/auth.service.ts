import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UserService } from 'src/users/user.service';
import { LoginUserDto } from './dtos/login-user.dto';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/user.schema';

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private jwtService: JwtService) { }

    async login(dto: LoginUserDto) {
        const user = await this.validateUser(dto)
        return this.generateToken(user)
    }

    async registration(dto: CreateUserDto) {
        const candidate = await this.userService.getUserByUsername(dto.username)
        if(candidate){
            throw new HttpException('User already exist', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(dto.password, 5)
        const user = await this.userService.createUser({...dto, password: hashPassword})
        return this.generateToken(user)
    }

    private async generateToken(user: User) {
        const tokenData = {email: user.mail, username: user.username, roles: user.roles}
        return {
            token: this.jwtService.sign(tokenData)
        }
    }

    private async validateUser(dto: LoginUserDto){
        const user = await this.userService.getUserByUsername(dto.username)
        if(!user){
            throw new UnauthorizedException({message:'User does not exist'})
        }
        const isPassword = await bcrypt.compare(dto.password, user.password)
        if (user && isPassword){
            return user
        }
        throw new UnauthorizedException({message:'Wrong email or password'})
    }
}
