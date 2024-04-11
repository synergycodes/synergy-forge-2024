import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input() user?: User | null;
}
