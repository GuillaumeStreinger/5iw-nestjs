import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { IPlayer } from "./player.interface";
import { PlayerService } from "./player.service";
import { Player } from "./player.entity";

@Controller('player')
export class PlayerController {
    constructor(private readonly playerService: PlayerService){}
    @Get()
    findAll(): any{
        return Error();
    }

    @Get(':id/characters')
        async getPlayerWithCharacters(@Param('id') id: number) {
        return this.playerService.findPlayerWithCharacters(id);
    }

    @Get(':id')
    async getPlayerById(@Param('id') id: number): Promise<Player> {
        return this.playerService.findOneById(id);
    }

    @Get()
    findById(@Param('id') id:number): any{
        return Error()
    }

    @Post()
    async create(@Body('player') player: IPlayer): Promise<Player>{
        return await this.playerService.create(player);
    }

    @Put()
    update(): any{
        return Error();
    }

    @Delete()
    delete(@Param('id')id:number):any{
        return Error();
    }
}