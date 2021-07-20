import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ResponseType } from './response-type';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Паш, мы почти смогли, или не очень';
  }
  // da
  async getWorkTime(useridParam: number, dateParam: string /* string в формате 'YYYY-MM-DD' */): Promise<ResponseType> {
    var z=0;
    // TODO: заменить часть url-а на получаемую из конфига в вызове функции axios.get -
    // перед этим если нужен какой-то ещё вспомогательный код, то тоже можно писать и себя не
    // ограничивать в строчках кода
    // смотреть в каменты в config-reader.ts
    const response = await axios.get(`http://admin:thuvj1sh@dev-redmine.gnedov.info:8380/time_entries.json?user_id=${useridParam}&spent_on=${dateParam}`)
    const timeEntries = response.data.time_entries;
    for (var i = 1; i < timeEntries.length; i++) {
      var timeItem = timeEntries[i];
      var user = timeItem.user;
      var userid = user.id;
      var hours = timeItem.hours;
      var Date = timeItem.spent_on;
      console.log(i, ':', 'userid =', userid, '; Hours =', hours, '; Date =', Date);
      z=z+timeItem.hours;
    }
    var daywork: ResponseType = {
      date: dateParam,
      userId: useridParam,
      workTime: z
    }
    return daywork;
  }
}


