import { Component, inject } from '@angular/core';
import { CommonPropertyService } from '../../../services/common-property.service';

@Component({
  selector: 'app-change-state',
  standalone: true,
  templateUrl: './change-state.component.html',
})
export class ChangeStateComponent {
  state = 0;

  private readonly service = inject(CommonPropertyService);

  btnClick() {
    this.service.changeState();
    this.state = this.service.getStateInfo();
  }
}
