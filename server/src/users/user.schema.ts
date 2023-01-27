import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

import { RoleDocument } from '../roles/role.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @ApiProperty({example: 'eterlate', description: 'account name'})
  @Prop({required: true})
  username: string;

  @ApiProperty({example: 'passstr', description: 'authorization password'})
  @Prop({required: true})
  password: string;

  @ApiProperty({example: 'Sasha', description: 'user name'})
  @Prop()
  name: string;

  @ApiProperty({example: '2342345', description: 'telegram chat id'})
  @Prop()
  chatId: string;

  @ApiProperty({example: 'img.png', description: 'account picture'})
  @Prop()
  avatar: string;

  @ApiProperty({example: '[ObjectId, ObjectId]', description: 'array of account roles'})
  @Prop({type:[{type: mongoose.Schema.Types.ObjectId, ref: 'Role'}]})
  roles: RoleDocument[];
}

export const UserSchema = SchemaFactory.createForClass(User);