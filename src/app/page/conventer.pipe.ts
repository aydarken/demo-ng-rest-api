import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'conventer'
})
export class ConventerPipe implements PipeTransform {

  transform(value: number, unit: string) {
    if (value && !isNaN(value)) {
      if (unit === 'cm') {
        return (value * 2.54).toFixed(2);
      } else if (unit === 'inc') {
        return (value / 2.54).toFixed(3);
      }

    }
    return null;
  }

}
