import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  combineLatest,
  debounceTime,
  filter,
  fromEvent,
  interval,
  map,
  Observable,
  Subject,
  takeUntil,
  timer,
} from 'rxjs';
import { RxJsService } from './rxjs.service';
import { ListComponent } from './list/list.component';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [ListComponent, AsyncPipe, NgIf],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss',
  providers: [RxJsService],
})
export class RxjsComponent implements OnInit, OnDestroy {
  numbers$!: Observable<number[]>;
  selectedNumber$!: Observable<number>;

  selectedNumberDelayed?: number;
  inputValue = 'test';
  oddNumbers: number[] = [];
  moreThan20: number[] = [];
  multipleBy10Numbers: number[] = [];
  timeToTheEnd = 120;

  @ViewChild('getBtn', { static: true })
  getBtn!: ElementRef;

  private onDestroy$ = new Subject<void>();

  constructor(private service: RxJsService) {}

  ngOnInit(): void {
    this.numbers$ = this.service.getNumbersArray();

    this.numbers$
      .pipe(
        takeUntil(this.onDestroy$),
        map((items: number[]) => items.filter((item: number) => item % 2 === 1))
      )
      .subscribe((items: number[]) => {
        this.oddNumbers = items;
      });

    this.numbers$
      .pipe(
        takeUntil(this.onDestroy$),
        filter((items: number[]) => items.length > 20)
      )
      .subscribe((items: number[]) => {
        this.moreThan20 = items;
      });

    combineLatest([
      this.service.getNumbersArray(),
      fromEvent(this.getBtn.nativeElement, 'click'),
    ])
      .pipe(
        takeUntil(this.onDestroy$),
        map(([items, event]) => {
          return items.map((item: number) => item * 10);
        })
      )
      .subscribe((items: number[]) => {
        this.multipleBy10Numbers = items;
      });

    this.selectedNumber$ = this.service.getSelectedNumber();

    this.selectedNumber$
      .pipe(takeUntil(this.onDestroy$), debounceTime(5000))
      .subscribe((item: number) => {
        this.selectedNumberDelayed = item;
      });

    const timer$ = timer(120000);
    interval(1000)
      .pipe(takeUntil(timer$))
      .subscribe((item: number) => {
        this.timeToTheEnd -= 1;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onGenerate20BtnClick(): void {
    this.service.generateNumbersArray(1, 20);
  }

  onGenerate50BtnClick(): void {
    this.service.generateNumbersArray(1, 50);
  }

  onNextItemsBtnClick(): void {
    const numbers = this.service.getNumbersArraySnapshot();
    const length = numbers.length;
    if (length === 0) {
      return;
    }

    this.service.generateNumbersArray(numbers[length - 1] + 1, 20);
  }

  onSetValueClick(): void {
    this.service.setNumber(20);
  }
}
