import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RouterModule } from "@nestjs/core";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./users/user.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        MongooseModule.forRoot(process.env.MONGO_URL),
        UserModule
    ]
})
export class AppModule {}