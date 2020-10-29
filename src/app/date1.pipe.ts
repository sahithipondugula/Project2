import {Pipe,PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class Date1Pipe extends 
             DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return super.transform(value, " MMM dd, yyyy");
    // return super.transform(value, " MMM dd, yyyy h:mm a zzz");//full format date
  }
}

