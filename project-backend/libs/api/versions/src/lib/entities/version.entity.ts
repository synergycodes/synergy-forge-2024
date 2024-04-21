import { Version } from '@prisma/client';

export class VersionEntity implements Version {
  id: number;
  name: string;
  integrationId: number;
  isFinal: boolean;
}
