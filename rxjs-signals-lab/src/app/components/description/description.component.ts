import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { RouteUrl } from '../../app.enums';
import { DESCRIPTION } from './description.consts';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './description.component.html',
})
export class DescriptionComponent implements OnInit {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  
  description = DESCRIPTION;
  url$?: Observable<RouteUrl>;

  ngOnInit(): void {
    this.url$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map((event) => (event as NavigationEnd).url.replace('/', '') as RouteUrl || RouteUrl.LAB_1),
        takeUntilDestroyed(this.destroyRef),
      );
  }
}
