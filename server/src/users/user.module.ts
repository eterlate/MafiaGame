import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { RoleModule } from 'src/roles/role.module';
import { Role, RoleSchema } from '../roles/role.schema';
import { UserController } from './user.controller';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    MongooseModule.forFeature([{name: Role.name, schema: RoleSchema}]),
    RoleModule,
    forwardRef(()=>AuthModule)
    
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [
    UserService
  ]

})
export class UserModule {}
