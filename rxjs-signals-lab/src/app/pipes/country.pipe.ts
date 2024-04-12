import { Pipe, PipeTransform } from '@angular/core';
import { COUNTRY_OPTIONS } from '../consts/country-options.const';

@Pipe({
  name: 'country',
  standalone: true
})
export class CountryPipe implements PipeTransform {
  transform(countryId: string): string {
    return COUNTRY_OPTIONS.find(option => option.value === countryId)?.label ?? '';
  }
}
