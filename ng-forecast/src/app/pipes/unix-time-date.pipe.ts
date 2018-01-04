import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'unixTimeDate'
})
export class UnixTimeDatePipe implements PipeTransform {
  private datePipe = new DatePipe('ja-JP');
  transform(value: any, args?: any): any {
    // UnixTimeから戻しつつDatePipeを実行
    return this.datePipe.transform(new Date(value * 1000), args);
  }
}
