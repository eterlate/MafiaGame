import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateRoleDto } from './dtos/create-role.dto';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
    constructor (private roleService: RoleService){}

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() dto:CreateRoleDto){
        return this.roleService.createRole(dto)
    }
    
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get('/:value')
    getByValue(@Param('value') value: string ){
        return this.roleService.getRoleByValue(value)
    }
}
