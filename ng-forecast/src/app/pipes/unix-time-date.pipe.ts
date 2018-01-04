import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixTimeDate'
})
export class UnixTimeDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
