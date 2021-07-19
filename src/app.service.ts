import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    // Паша: А где Валера
    // Паша: Где все?
    // Валера: Лично я на Озере ледяных Оков сражаюсь за орду, а где Вика понятия не имею.
    // Покатит.
    return 'Паш, мы почти смогли, или не очень';
  }
  async getWorkTime(useridParam: number, dateParam: string /* string в формате 'YYYY-MM-DD' */): Promise<number> { // TODO: тоже вернуть ResponseType
    var z=0;
    var result; // TODO: Определить каким-то образом тип переменной ResponseType
    // poshli v main
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
      console.log(z);
    }
    // TODO: Заполнить это значение - заполнить все необходимые поля в структуре
    return z; // TODO: Вернуть вместо z переменную с нужными значениями
  }
}


