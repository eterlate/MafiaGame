import { Body, Controller, Delete, Headers, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jtw-auth.guard';
import { CreateSessionDto } from './dtos/create-session.dto';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
    constructor (private sessionService: SessionService){}

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Headers('authorization') auth: string, @Body() dto: CreateSessionDto){
        return this.sessionService.createSession(auth, dto)
    }

    @Delete()
    delete(){
        
    }
}
