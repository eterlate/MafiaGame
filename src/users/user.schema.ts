import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Role } from './role.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  lastname: string;

  @Prop()
  mail: string;

  @Prop()
  avatar: string;

  @Prop({type:[{type: mongoose.Schema.Types.ObjectId, ref: 'Role'}]})
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);