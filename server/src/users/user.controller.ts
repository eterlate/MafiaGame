import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from './dtos/add-role.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.schema';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('/users')
export class UserController {
    constructor(private userService: UserService) {}

    @ApiOperation({summary: 'Creating user'})
    @ApiResponse({status: 200, type: User})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.createUser(dto)
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Delete()
    delete(){

    }

    @ApiOperation({summary: 'Getting list of all users'})
    @ApiResponse({status: 200, type: [User]})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get()
    getAll(){
        return this.userService.getAllUsers()
    }

    @ApiOperation({summary: 'User role add'})
    @ApiResponse({status: 200})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('role')
    addRole(@Body() dto: AddRoleDto){
        return this.userService.addRole(dto)
    }
}
