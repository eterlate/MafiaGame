import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.createUser(dto)
    }

    @Delete()
    delete(){

    }

    @Get()
    getAll(){
        return this.userService.gelAllUsers()
    }

}
