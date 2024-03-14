import { FormsModule } from '@angular/forms';
import { CalculationService } from './../../services/calculation.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-sum',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sum.component.html',
})
export class SumComponent {
  firstNumber = 0;

  secondNumber = 0;

  result = 0;

  private readonly calcService = inject(CalculationService);

  sumButtonClick() {
    this.result = this.calcService.sum(this.firstNumber, this.secondNumber);
  }
}
