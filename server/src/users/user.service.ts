import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { Role, RoleDocument } from './role.schema';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {

    constructor (@InjectModel(User.name) private userModel: Model<UserDocument>,
                 @InjectModel(Role.name) private roleModel: Model<RoleDocument>){}

    async createUser(dto: CreateUserDto): Promise<User> {
        const user = await this.userModel.create({...dto})
        return user
    }

    async deleteUser() {

    }

    async gelAllUsers(): Promise <User[]> {
        const users = await this.userModel.find()
        return users
    }
}
