import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ResponseType } from './response-type';
import { config } from './config-reader';

@Injectable()
export class AppService {
  
  /**
   * Получение рабочего времени из redmine
   * @param userIdParam 
   * @param dateParam 
   * @returns 
   */
  async getWorkTime(userIdParam: number, dateParam: string): Promise<ResponseType> {
    let sumTime: number = 0;
    const response = await axios.get(`${config.redmineUrl}/time_entries.json?user_id=${userIdParam}&spent_on=${dateParam}`);
    const timeEntries = response.data.time_entries;
    const user = timeEntries[0].user;
    for (var i = 1; i < timeEntries.length; i++) {
      sumTime = sumTime + timeEntries[i].hours;
    }
    const result: ResponseType = {
      userName: user.name,
      userId: userIdParam,
      date: dateParam,
      workTime: sumTime
    }
    return result;
  }
}


