import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {
	private notification = new Subject<string>();

	notification$ = this.notification.asObservable();

	addNotification(message: string): void {
		this.notification.next(message);
	}
}
