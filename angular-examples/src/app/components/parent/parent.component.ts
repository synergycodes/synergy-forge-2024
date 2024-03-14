import { Component, ViewChild } from '@angular/core';
import Hobby from '../../models/hobby';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
})
export class ParentComponent {
  hobbies = [
    new Hobby('movies', new Date(1999, 11, 13)),
    new Hobby('football', new Date(2012, 7, 15)),
    new Hobby('art', new Date(1993, 5, 3)),
    new Hobby('animals', new Date(2022, 6, 12)),
  ];

  selectedHobbyName = '';

  @ViewChild('childReference', { static: false })
  childComponent!: ChildComponent;

  getSelectedHobby(hobbyName: string) {
    this.selectedHobbyName = hobbyName;
  }

  clearText() {
    this.childComponent.textToClean = '';
  }
}
