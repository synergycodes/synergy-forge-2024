import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Footballer } from '../../interfaces/footballer.interface';
import { FakeHttpService } from '../../services/fake-http.service';
import { NotificationService } from '../../services/notification.service';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, debounceTime, distinctUntilChanged, map, of, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl('', { nonNullable: true });
  destroyRef = inject(DestroyRef);
  service = inject(NotificationService);
  http = inject(HttpClient);
  fakeHttp = inject(FakeHttpService);
  footballers: Footballer[] = [];

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        startWith(this.searchControl.value),
        debounceTime(500),
        distinctUntilChanged(),
        map(value => value.toLowerCase()),
        takeUntilDestroyed(this.destroyRef),
        switchMap((value) => {
          // Odkomentuj kod poniżej i zakomentuj linijke 37 by zobaczyć błąd z notifikacją
          // return this.http.get<Footballer[]>(
          //     `http://localhost:3000/api/footballers?q=${value}`
          //   )
          return this.fakeHttp.getFootballers(value)
            .pipe(
              catchError((err) => {
                this.service.addNotification(err.message);
                return of([]);
              })
            )
        })
      )
      .subscribe((res) => {
        this.footballers = res;
      });
  }
}
