import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessage() {
    return '';
  }

  @Post()
  createMessage() {
    return '';
  }

  @Get('/:id')
  getMessage() {
    return '';
  }
}
