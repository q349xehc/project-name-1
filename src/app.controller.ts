import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RequestType } from './request-type';
import { ResponseType } from './response-type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Post('get-work-time')
  async getWorkTime(@Body() request: RequestType): Promise<ResponseType> {
    return await this.appService.getWorkTime(request.userId, request.date);
  }
}