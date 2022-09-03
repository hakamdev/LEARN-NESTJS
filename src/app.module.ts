import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, ItemsController, UsersController],
  providers: [AppService],
})
export class AppModule {}
