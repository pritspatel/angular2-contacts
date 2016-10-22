import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {
    transform(val, args) {
        //return '(' + val + ')';
        let numbers = val.value.Replace(/\D/g, ''),
        char = { 0: '(', 3: ') ', 6: ' - ' };
        val.value = '';
        for (var i = 0; i < numbers.length; i++) {
            val.value += (char[i] || '') + numbers[i];
        }
        return val;
    }
}