import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: any): any {
    if (!value) return 'Not available';

    const date = moment(value, ['DD-MM-YYYY', 'YYYY-MM-DD']);

    const age = moment().diff(date.toISOString(), 'years');

    return age;
  }
}
