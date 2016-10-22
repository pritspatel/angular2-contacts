import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {
    transform(val, args) {
       return '(' + val + ')';
    }
}