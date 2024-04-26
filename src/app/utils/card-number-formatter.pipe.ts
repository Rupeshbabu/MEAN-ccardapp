import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumberFormatter'
})
export class CardNumberFormatterPipe implements PipeTransform {

  transform(value: string,): string {
    if (!value) return '';
    
    // Add space after every 4 digits
    return value.replace(/\d{4}(?=.)/g, '$& ');
  }

}
