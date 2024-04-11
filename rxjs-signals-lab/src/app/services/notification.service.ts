// Pozostaw plik bez zmian :)

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from '../interfaces/notification.interface';

let NOTIFICATION_ID = 1;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = new BehaviorSubject<Notification[]>([]);

  notifications$ = this.notifications.asObservable();

  addNotification(message: string) {
    const id = NOTIFICATION_ID++;
  
    this.notifications.next([...this.notifications.value, { id, message }]);

    this.clearNotification(id);
  }

  private clearNotification(id: number): void {
    setTimeout(() => {
      this.notifications.next([...this.notifications.value.filter(n => n.id !== id)]);
    }, 2500)
  }
}
