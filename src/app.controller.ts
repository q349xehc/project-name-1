import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RequestType } from './request-type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Post('get-work-time')
  async getWorkTime(@Body() request: RequestType): Promise<number> {
    return await this.appService.getWorkTime(request.userId, request.date);
  }
}