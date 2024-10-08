import { Inject, Injectable } from '@nestjs/common';
import { Player } from './player.entity';
import { IPlayer } from './player.interface';
import * as bcrypt from 'bcrypt';
import { Character } from 'src/character/character.entity';

@Injectable()
export class PlayerService {
    constructor(@Inject('PLAYER_REPOSITORY') private playerRepository: typeof Player, @Inject('CHARACTER_REPOSITORY') private characterRepository: typeof Character) {}

    async findAll(): Promise<Player[]>{
        return this.playerRepository.findAll<Player>();
    }

    async create(player:IPlayer): Promise<Player>{
        return await this.playerRepository.create<Player>({
            ...player,
            password: bcrypt.hashSync(player.password,10)
        })
    }

    async findOneById(id: number): Promise<Player> {
        return this.playerRepository.findOne({
            where: { id },
            include: [{
                model: Character,
                where: { playerId: id },
                required: false,
            }]
        });
    }

    async findPlayerWithCharacters(id: number): Promise<any> {
        const player = await this.playerRepository.findOne({ where: { id } });
        if (!player) {
          throw new Error('Player not found');
        }
    
        const characters = await this.characterRepository.findAll({ where: { playerId: id } });
        return { player, characters };
    }
}
