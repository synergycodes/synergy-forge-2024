import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Observable } from 'rxjs';
import { Notification } from '../../interfaces/notification.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-lab-3',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './lab-3.component.html',
  styleUrl: './lab-3.component.scss'
})
export class Lab3Component implements OnInit {
  private readonly notificationService = inject(NotificationService);

  // Pozostaw bez zmian :)
  notifications$?: Observable<Notification[]>;

  ngOnInit(): void {
    // Wskazówka 1: Znajdź w NotificationService wartość Subject'a którą trzeba podpiąć do zmiennej (żeby dokonać subskrypcji przez AsyncPipe)
  }

  showNotification(message: string = 'Notyfikacja działa :)'): void {
    // Wskazówka 2: Znajdź w NotificationService metode przekazującą wartość do Subject'a

  }
}
