import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FootballerLab5 } from '../../interfaces/footballer.interface';
import { FOOTBALLERS_LAB_5 } from '../../consts/footballers.const';
import { COUNTRY_OPTIONS } from '../../consts/country-options.const';
import { CLUB_OPTIONS } from '../../consts/club-options.const';
import { CountryPipe } from '../../pipes/country.pipe';
import { ClubPipe } from '../../pipes/club.pipe';
import { AsyncPipe } from '@angular/common';
import { Observable, combineLatest, of, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-lab-5',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    CountryPipe,
    ClubPipe,
  ],
  templateUrl: './lab-5.component.html',
  styleUrl: './lab-5.component.scss'
})
export class Lab5Component implements OnInit {
  clubControl = new FormControl<string | null>(null);
  countryControl = new FormControl<string | null>(null);

  footballers$?: Observable<FootballerLab5[]>;

  countryOptions = COUNTRY_OPTIONS;
  clubOptions = CLUB_OPTIONS;

  ngOnInit(): void {
    // Wskazówka 1: użyj RxJs combineLatest() do subskrypcji obu controli i RxJs switchMap() do przypisania wyniku do footballers$
    // Wskazówka 2 (opcjonalnie): użyj RxJs startWith() przy subskrypcji do valueChanges

    const clubId$ = this.clubControl.valueChanges.pipe(startWith(this.clubControl.value));
    const countryId$ = this.countryControl.valueChanges.pipe(startWith(this.countryControl.value));

    this.footballers$ = combineLatest({ clubId: clubId$, countryId: countryId$ })
      .pipe(switchMap(({ clubId, countryId }) => this.getFootballersByClubAndCountry(clubId, countryId)));
  }

  // Fake API Request - zwraca Observable
  private getFootballersByClubAndCountry(clubId: string | null, countryId: string | null): Observable<FootballerLab5[]> {
    if (clubId && countryId) return of(FOOTBALLERS_LAB_5.filter(f => f.countryId === countryId && f.clubId === clubId));
    
    if (clubId) return of(FOOTBALLERS_LAB_5.filter(f => f.clubId === clubId));
    
    if (countryId) return of(FOOTBALLERS_LAB_5.filter(f => f.countryId === countryId));
    
    return of(FOOTBALLERS_LAB_5);
  }
}
