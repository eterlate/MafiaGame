import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PlayerDocument = HydratedDocument<Player>;

@Schema()
export class Player {
  @Prop()
  gameRole: string;

  @Prop()
  name: string;

  @Prop()
  chatId: string;

}

export const PlayerSchema = SchemaFactory.createForClass(Player);