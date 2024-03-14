import { CommonPropertyService } from './../../services/common-property.service';
import { Component } from '@angular/core';
import { ChangeStateComponent } from './change-state/change-state.component';
import { GetStateComponent } from './get-state/get-state.component';

@Component({
  selector: 'app-same-instance-of-service',
  standalone: true,
  imports: [ChangeStateComponent, GetStateComponent],
  templateUrl: './same-instance-of-service.component.html',
  providers: [CommonPropertyService],
})
export class SameInstanceOfServiceComponent {}
