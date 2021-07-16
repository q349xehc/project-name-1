import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    // Паша: А где Валера
    return 'Паш, мы почти смогли, или не очень';
  }
  getWorkTime(useridParam: number, dateParam: string /* string в формате 'YYYY-MM-DD' */): number {
    var z=0;
    // poshli v main
    axios.get(`http://admin:thuvj1sh@dev-redmine.gnedov.info:8380/time_entries.json?user_id=${useridParam}&spent_on=${dateParam}`).then(function (response) {
    
      var timeEntries = response.data.time_entries;
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
    })
    return z;
  }
}


