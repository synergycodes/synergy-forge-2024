import { Component } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SumComponent } from './components/sum/sum.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchComponent, NotificationComponent, SumComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
