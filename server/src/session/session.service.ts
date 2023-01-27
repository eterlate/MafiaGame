import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import e from 'express';
import { Model } from 'mongoose';
import { PlayerDocument, Player } from 'src/player/player.schema';
import { User, UserDocument } from 'src/users/user.schema';
import { domainToASCII } from 'url';
import { CreateSessionDto } from './dtos/create-session.dto';
import { Session, SessionDocument } from './session.schema';

@Injectable()
export class SessionService {
    constructor(private jwtService: JwtService,
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(Session.name) private sessionModel: Model<SessionDocument>,
        @InjectModel(Player.name) private playerModel: Model<PlayerDocument>
    ) { }

    async createSession(auth: string, dto: CreateSessionDto): Promise<SessionDocument> {
        const token = auth.split(' ')[1]
        const user = this.jwtService.verify(token)

        if(dto.name != undefined){
            var player = await this.playerModel.create({name: dto.name, gameRole: dto.gameRole, chatId: user.chatId})
        }else{
            var player = await this.playerModel.create({name: user.name, gameRole: dto.gameRole, chatId: user.chatId})
        }
        
        const accessCode = Math.floor(Math.random() * (9999-1000) + 1000)
        const session = await this.sessionModel.create({accessCode: accessCode, creator: user.id})
        const updatedSession = await session.updateOne({$push:{players: player._id}})
        
        return updatedSession

    }
}
