import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/user.schema';
import { CreateRoleDto } from './dtos/create-role.dto';
import { Role, RoleDocument } from './role.schema';

@Injectable()
export class RoleService {
    constructor (@InjectModel(User.name) private userModel: Model<UserDocument>,
                 @InjectModel(Role.name) private roleModel: Model<RoleDocument>){}

    async createRole(dto: CreateRoleDto):Promise<Role> {
        const role = await this.roleModel.create({...dto})
        return role
    }

    async getRoleByValue(value: string) {
        const role = await this.roleModel.findOne({value: value})
        return role
    }
}
