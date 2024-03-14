import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  standalone: true,
  template: `<div class="mt-2">my inline component !!!</div>`,
  styles: [
    `
      div {
        color: blue;
        margin-left: 30px;
      }
    `,
  ],
})
export class InlineComponent {}
