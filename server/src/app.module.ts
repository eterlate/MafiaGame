import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_GUARD, RouterModule } from "@nestjs/core";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./users/user.module";
import { AuthModule } from './auth/auth.module';
import { RoleService } from './roles/role.service';
import { RoleController } from './roles/role.controller';
import { RoleModule } from './roles/role.module';
import { JwtAuthGuard } from "./auth/jtw-auth.guard";
import { SessionModule } from './session/session.module';
import { PlayerController } from './player/player.controller';
import { PlayerService } from './player/player.service';
import { PlayerModule } from './player/player.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        MongooseModule.forRoot(process.env.MONGO_URL),
        UserModule,
        AuthModule,
        RoleModule,
        SessionModule,
        PlayerModule
    ],
    controllers: [PlayerController],
    providers: [PlayerService]
})
export class AppModule {}