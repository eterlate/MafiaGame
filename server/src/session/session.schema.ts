import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { UserDocument } from 'src/users/user.schema';
import { PlayerDocument } from 'src/player/player.schema';

export type SessionDocument = HydratedDocument<Session>;

@Schema()
export class Session {
  @Prop()
  accessCode: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  creator: UserDocument;

  @Prop({type:[{type: mongoose.Schema.Types.ObjectId, ref: 'Player'}]})
  players: PlayerDocument[];
}

export const SessionSchema = SchemaFactory.createForClass(Session);