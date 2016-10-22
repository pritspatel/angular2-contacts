import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {
    transform(val, args) {
       //return '(' + val + ')';
       //let phone : string = '1112223333';
       let phone : string = String(val);
       phone = '(' + phone.slice(0, 3) + ')' + phone.slice(3,6) + '-' + phone.slice(6,10);
       return phone;
    }
}