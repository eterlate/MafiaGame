import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Mongoose, ObjectId } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { Role, RoleDocument } from '../roles/role.schema';
import { User, UserDocument } from './user.schema';
import { RoleService } from 'src/roles/role.service';
import { AddRoleDto } from './dtos/add-role.dto';

@Injectable()
export class UserService {

    constructor (@InjectModel(User.name) private userModel: Model<UserDocument>,
                 @InjectModel(User.name) private roleModel: Model<RoleDocument>,
                 private roleService: RoleService){}

    async createUser(dto: CreateUserDto): Promise<User> {
        const user = await this.userModel.create({...dto})
        const role = await this.roleService.getRoleByValue('USER')
        await user.updateOne({roles: [role._id]})
        user.roles = [role._id]
        return user
    }

    async deleteUser() {

    }

    async getAllUsers(): Promise <User[]> {
        const users = await this.userModel.find()
        return users
    }

    async getUserByUsername(username: string) {
        const user = await this.userModel.findOne({username: username}).populate('roles')
        return user
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userModel.findById({_id: dto.userId})
        const role = await this.roleModel.findOne({value:dto.value})
        console.log(user.roles.includes(role._id))
        if (user && role) {
            const updatedUser = await user.updateOne({$push:{roles: role._id}})
            return updatedUser
        }
        throw new HttpException('User or role doesnt exist', HttpStatus.NOT_FOUND)
        
    }
}
