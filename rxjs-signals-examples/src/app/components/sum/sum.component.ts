import { AsyncPipe } from '@angular/common';
import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, map, tap } from 'rxjs';

// Rozwiązanie 0
// @Component({
//   selector: 'app-sum',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './sum.component.html',
// })
// export class SumComponent {
//   valueA: number = 0;
//   valueB: number = 0;

//   sum: number = this.valueA + this.valueB; // ❌
// }

// Rozwiązanie 1
// @Component({
//   selector: 'app-sum',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './sum.component.html',
// })
// export class SumComponent {
//   valueA: number = 0;
//   valueB: number = 0;

//   getSum(): number {
//     console.log('getSum', this.valueA + this.valueB);
//     return this.valueA + this.valueB; // ✅
//   }
// }

// Rozwiązanie 2
// @Component({
//   selector: 'app-sum',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './sum.component.html',
// })
// export class SumComponent {
//   valueA: number = 0;
//   valueB: number = 0;
//   sum: number = 0;

//   setValueA(value: number): void {
//     this.valueA = value;
//     this.calcSum();
//   }

//   setValueB(value: number): void {
//     this.valueB = value;
//     this.calcSum();
//   }

//   calcSum(): void {
//     console.log('calcSum', this.valueA + this.valueB);
//     this.sum = this.valueA + this.valueB; // ✅
//   }
// }

// Rozwiązanie 3
// @Component({
//   selector: 'app-sum',
//   standalone: true,
//   imports: [FormsModule, AsyncPipe],
//   templateUrl: './sum.component.html',
// })
// export class SumComponent {
//   valueA = new BehaviorSubject<number>(0);
//   valueB = new BehaviorSubject<number>(0);

//   sum$ = combineLatest([this.valueA, this.valueB])
//     .pipe(
//       map(([valueA, valueB]) => valueA + valueB), // ✅
//       tap((value) => console.log('sum$ | async', value))
//     )
// }

// Rozwiązanie 4
@Component({
  selector: 'app-sum',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sum.component.html',
})
export class SumComponent {
  valueA: WritableSignal<number> = signal(0);
  valueB: WritableSignal<number> = signal(0);

  sum: Signal<number> = computed(() => 
    this.valueA() + this.valueB() // ✅
  );

  constructor() {
    effect(() => {
      console.log('sum()', this.sum());
    })
  }
}
