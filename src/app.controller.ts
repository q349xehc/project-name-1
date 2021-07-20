import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseType } from './response-type';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Post('get-work-time')
  async getWorkTime(@Body() request: ResponseType): Promise<ResponseType> {
    return await this.appService.getWorkTime(request.userId, request.date);
  }
}