import { Component, inject } from '@angular/core';
import { CommonPropertyService } from '../../../services/common-property.service';

@Component({
  selector: 'app-get-state',
  standalone: true,
  templateUrl: './get-state.component.html',
})
export class GetStateComponent {
  state = 0;

  private readonly service = inject(CommonPropertyService);

  getStateInfo() {
    this.state = this.service.getStateInfo();
  }
}
