import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ResponseType } from './response-type';
import { config } from './config-reader';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Паш, мы почти смогли, или не очень';
  }
  
  /**
   * Получение рабочего времени из redmine
   * @param useridParam 
   * @param dateParam 
   * @returns 
   */
  async getWorkTime(useridParam: number, dateParam: string): Promise<ResponseType> {
    let sumTime = 0;
    const response = await axios.get(config.redmineUrl + `/time_entries.json?user_id=${useridParam}&spent_on=${dateParam}`);
    const timeEntries = response.data.time_entries;
    for (var i = 1; i < timeEntries.length; i++) {
      var timeItem = timeEntries[i];
      var user = timeItem.user;
      sumTime = sumTime + timeItem.hours;
    }
    const result: ResponseType = {
      Redmineusername: user.name,
      userId: useridParam,
      date: dateParam,
      workTime: sumTime
    }
    return result;
  }
}


