import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { FirstModule } from './module/first-page/first-page.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FirstModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-examples';
}
