import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  numbers?: number[] | null | undefined;
}
