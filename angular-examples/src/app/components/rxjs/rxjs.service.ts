import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RxJsService {
  private numbers$ = new BehaviorSubject<number[]>([]);
  private number$ = new Subject<number>();

  generateNumbersArray(firstNumber: number, count: number): void {
    const array = [];
    for (let i = 0; i < count; i++) {
      array[i] = firstNumber + i;
    }

    this.numbers$.next(array);
  }

  setNumbersArray(array: number[]): void {
    this.numbers$.next(array);
  }

  getNumbersArray(): Observable<number[]> {
    return this.numbers$.asObservable();
  }

  getNumbersArraySnapshot(): number[] {
    return this.numbers$.getValue();
  }

  setNumber(max: number): void {
    const number = Math.floor(Math.random() * max);

    this.number$.next(number);
  }

  getSelectedNumber(): Observable<number> {
    return this.number$.asObservable();
  }
}
