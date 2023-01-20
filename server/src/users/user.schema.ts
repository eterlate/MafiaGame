import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Role } from '../roles/role.schema';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @ApiProperty({example: 'eterlate', description: 'account name'})
  @Prop()
  username: string;

  @ApiProperty({example: 'passstr', description: 'authorization password'})
  @Prop()
  password: string;

  @ApiProperty({example: 'Sasha', description: 'user name'})
  @Prop()
  name: string;

  @ApiProperty({example: 'Mangus', description: 'user lastname'})
  @Prop()
  lastname: string;

  @ApiProperty({example: 'eterlate@gmail.com', description: 'account mail adres'})
  @Prop()
  mail: string;

  @ApiProperty({example: 'img.png', description: 'account picture'})
  @Prop()
  avatar: string;

  @ApiProperty({example: '[ObjectId, ObjectId]', description: 'array of account roles'})
  @Prop({type:[{type: mongoose.Schema.Types.ObjectId, ref: 'Role'}]})
  roles: mongoose.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);