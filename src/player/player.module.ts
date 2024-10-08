import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { DatabaseModule } from 'src/database/database.module';
import { PlayerController } from './player.controller';
import { playerProviders } from './player.providers';
import { characterProviders } from 'src/character/character.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PlayerController],
  providers: [PlayerService, ...playerProviders, ...characterProviders]
})
export class PlayerModule {}
