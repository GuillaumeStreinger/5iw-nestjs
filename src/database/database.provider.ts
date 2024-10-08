import {Sequelize} from 'sequelize-typescript';
import { Character } from 'src/character/character.entity';
import { Player } from 'src/player/player.entity';

export const dbProvider = [
    {
        provide: "SEQUELIZE",
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host:'localhost',
                port: 3306,
                username: '5iw-nest',
                password: 'aSKLEPIOS1102',
                database: '5iw-nest'
            })
            sequelize.addModels([Player,Character]);
            Player.hasMany(Character);
            await sequelize.sync({alter:true});
            return sequelize
            
        }
    }
]