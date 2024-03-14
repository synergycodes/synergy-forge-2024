import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FirstComponent {
  name = 'value inside component';

  age = 27;

  hobbies = ['football', 'movies', 'fashion', 'music', 'art'];
}
