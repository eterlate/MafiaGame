import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionSchema, Session } from './session.schema';
import { AuthModule } from 'src/auth/auth.module';
import { User, UserSchema } from 'src/users/user.schema';
import { Player, PlayerSchema } from 'src/player/player.schema';

@Module({
  providers: [SessionService],
  controllers: [SessionController],
  imports: [
    MongooseModule.forFeature([{name: Session.name, schema: SessionSchema}]),
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    MongooseModule.forFeature([{name: Player.name, schema: PlayerSchema}]),
    AuthModule
  ]
})
export class SessionModule {}
