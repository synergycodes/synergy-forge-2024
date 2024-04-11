import { Component, InputSignal, OutputEmitterRef, Signal, WritableSignal, computed, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-signals-api',
  standalone: true,
  templateUrl: './signals-api.component.html',
  styleUrl: './signals-api.component.scss'
})
export class SignalsApiComponent {
  // Signals API

  writableSignal: WritableSignal<number> = signal(0);
  readonlySignal: Signal<number> = signal(0);

  ngOnInit(): void {
    // Ustawienie wartości
    this.writableSignal.set(1); // ✅

    // Zmiana wartości na podstawie poprzedniej
    this.writableSignal.update((x) => x + 1); // ✅

    // Odczyt wartości
    this.writableSignal(); // ✅

    // Ustawienie wartości
    // this.readonlySignal.set(1); // ❌

    // Zmiana wartości na podstawie poprzedniej
    // this.readonlySignal.update((x) => x + 1); // ❌

    // Odczyt wartości
    this.readonlySignal(); // ✅
  }

  // computed() i effect()

  valueA: WritableSignal<number> = signal(0);
  valueB: WritableSignal<number> = signal(0);

  sum: Signal<number> = computed(() => 
    this.valueA() + this.valueB() // ✅
  );

  constructor() {
    effect(() => {
      console.log(this.sum());
    })
  }

  // Inputy i Outputy

  // @Input
  name: InputSignal<string | undefined> = input<string>();

  // @Input({ required: true })
  requiredName: InputSignal<string> = input.required<string>();

  // @Output
  nameChange: OutputEmitterRef<string> = output<string>();
}
