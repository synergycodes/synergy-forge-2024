import { Component, inject } from "@angular/core";
import { NotificationService } from "../../services/notification.service";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
	selector: 'app-notification',
	standalone: true,
	imports: [AsyncPipe],
	templateUrl: './notification.component.html',
})
export class NotificationComponent {
	service = inject(NotificationService);

	message$?: Observable<string>;

	ngOnInit(): void {
		this.message$ = this.service.notification$;
	}
}
