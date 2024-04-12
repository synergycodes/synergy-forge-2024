import { Pipe, PipeTransform } from '@angular/core';
import { CLUB_OPTIONS } from '../consts/club-options.const';

@Pipe({
  name: 'club',
  standalone: true
})
export class ClubPipe implements PipeTransform {
  transform(clubId: string): string {
    return CLUB_OPTIONS.find(option => option.value === clubId)?.label ?? '';
  }
}
