import { Integration } from '@prisma/client';

export class IntegrationEntity implements Integration {
  id: number;
  name: string;
  budget: number;
  participants: number;
  picture: string;
  dateStart: Date;
  dateEnd: Date;
}
