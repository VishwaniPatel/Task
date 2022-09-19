import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custcurrency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, countryCode: string): any {
    let newValue;
    if (countryCode === 'EUR') {
      newValue = "€" + value;
    } else if (countryCode === 'US') {
      newValue = "$" + value;
    } else if (countryCode === 'IND') {
      newValue = "Rs" + value;
    }
    return newValue;
  }

}
