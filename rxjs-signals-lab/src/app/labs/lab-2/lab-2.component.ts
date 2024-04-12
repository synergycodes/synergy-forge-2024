import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Footballer } from '../../interfaces/footballer.interface';
import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FOOTBALLERS } from '../../consts/footballers.const';

@Component({
  selector: 'app-lab-2',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, TitleCasePipe],
  templateUrl: './lab-2.component.html',
  styleUrl: './lab-2.component.scss'
})
export class Lab2Component implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly footballers = FOOTBALLERS;
  
  searchControl = new FormControl<string>('', { nonNullable: true });

  results$?: Observable<Footballer[]>;

  ngOnInit(): void {
    this.results$ = this.searchControl.valueChanges
      .pipe(
        // Wskazówka 1: użyj operatora RxJs startWith()

        // Wskazówka 2: użyj operatora RxJs map() i metody toUpperCase()

        // Pozostaw bez zmian :)
        map((searchValue) => this.getResults(searchValue)),
        takeUntilDestroyed(this.destroyRef),
      )
  }

  getResults(searchValue: string): Footballer[] {
    // Pozostaw bez zmian :)
    return this.footballers.filter(f => f.name.includes(searchValue));
  }
}
