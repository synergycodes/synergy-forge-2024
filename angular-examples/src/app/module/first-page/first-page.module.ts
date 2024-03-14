import { NgModule } from '@angular/core';
import { FirstPageComponent } from './first-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FirstPageComponent],
  imports: [CommonModule],
  exports: [FirstPageComponent],
  providers: [],
})
export class FirstModule {}
