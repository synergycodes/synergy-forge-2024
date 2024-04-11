import { DecimalPipe } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lab-4',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './lab-4.component.html',
  styleUrl: './lab-4.component.scss'
})
export class Lab4Component {
  readonly DOLAR_EURO_EXCHANGE_RATE = 0.93;
  readonly DOLAR_PLN_EXCHANGE_RATE = 3.97;

  amount: Signal<number> = signal(0);

  // Wskazówka 1: zastąp signal(0) poniżej przez computed() i dodaj wewnątrz formułe przeliczającą kurs walut

  // amount * DOLAR_EURO_EXCHANGE_RATE
  euro: Signal<number> = signal(0);

  // amount * DOLAR_PLN_EXCHANGE_RATE
  pln: Signal<number> = signal(0);
}
