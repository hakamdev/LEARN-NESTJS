import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  getAll(): string {
    return 'GET ALL ITEMS';
  }
}
