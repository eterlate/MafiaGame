import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/user.schema';
import { RoleController } from './role.controller';
import { Role, RoleSchema } from './role.schema';
import { RoleService } from './role.service';

@Module({
    controllers: [RoleController],
    providers: [RoleService],
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        MongooseModule.forFeature([{name: Role.name, schema: RoleSchema}])
    ],
    exports: [
        RoleService
    ]
})
export class RoleModule {}
