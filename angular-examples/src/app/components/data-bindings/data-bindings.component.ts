import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-bindings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-bindings.component.html',
})
export class DataBindingsComponent {
  inputValue = 'displayed input value';

  twoWayBinding = '';

  alertText = 'alert test';

  click() {
    alert(`Message: ${this.alertText}`);
  }
}
