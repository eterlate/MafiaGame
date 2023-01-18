import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.schema';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('/users')
export class UserController {
    constructor(private userService: UserService) {}

    @ApiOperation({summary: 'Creating user'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.createUser(dto)
    }

    @Delete()
    delete(){

    }

    @ApiOperation({summary: 'Getting list of all users'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll(){
        return this.userService.gelAllUsers()
    }

}
