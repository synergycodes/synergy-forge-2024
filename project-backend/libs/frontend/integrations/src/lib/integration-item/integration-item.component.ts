import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Integration } from '@prisma/client';

@Component({
  selector: 'synergy-forge-integration-item',
  templateUrl: './integration-item.component.html',
  styleUrls: ['./integration-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntegrationItemComponent {
  @Input()
  integration!: Integration;
}
