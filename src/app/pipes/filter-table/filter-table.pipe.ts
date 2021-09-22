import { Pipe, PipeTransform } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Student } from 'src/app/models/student';
import { Teacher } from 'src/app/models/teacher';

@Pipe({
  name: 'filterTable',
})
export class FilterTablePipe implements PipeTransform {
  transform(
    value: Array<Student | Teacher | Character>,
    search: string,
    tag: string
  ): Array<any> {
    let helper: Array<any> = [];
    const param = search.toLowerCase();

    if (search === '' || search.length < 3) return value;

    value.forEach((item) => {
      if (tag === 'Name')
        if (item.name.toLowerCase().indexOf(param) >= 0) helper.push(item);

      if (tag === 'Patronus')
        if (item.patronus.toLowerCase().indexOf(param) >= 0) helper.push(item);
    });

    return helper;
  }
}
