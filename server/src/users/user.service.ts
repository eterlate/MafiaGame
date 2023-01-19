import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { Role, RoleDocument } from '../roles/role.schema';
import { User, UserDocument } from './user.schema';
import { RoleService } from 'src/roles/role.service';

@Injectable()
export class UserService {

    constructor (@InjectModel(User.name) private userModel: Model<UserDocument>,
                 private roleService: RoleService){}

    async createUser(dto: CreateUserDto): Promise<User> {
        const user = await this.userModel.create({...dto})
        const role = await this.roleService.getRoleByValue('USER')
        await user.updateOne({roles: [role._id]})
        user.roles = [role]
        return user
    }

    async deleteUser() {

    }

    async getAllUsers(): Promise <User[]> {
        const users = await this.userModel.find()
        return users
    }

    async getUserByUsername(username: string) {
        const user = await this.userModel.findOne({username: username})
        return user
    }
}
