import { Component, EventEmitter, Input, Output } from '@angular/core';
import Hobby from '../../../models/hobby';
import { NgFor } from '@angular/common';
import { DateDirective } from '../../../directives/date.directive';

@Component({
  selector: 'app-child',
  standalone: true,
  // also it is possible to import whole commonModule
  imports: [NgFor, DateDirective],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() hobbies: Hobby[] = [];

  @Output() hobbyEmitter = new EventEmitter<string>();

  textToClean = 'text will clear';

  constructor() {}

  selectHobby(hobby: string) {
    this.hobbyEmitter.emit(hobby);
  }
}
