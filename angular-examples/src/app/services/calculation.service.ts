import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  private readonly lastSum$ = new BehaviorSubject<number>(0);

  sum(number1: number, number2: number): number {
    return number1 + number2;
  }

  getLastSum(): Observable<number> {
    return this.lastSum$.asObservable();
  }
  
}
