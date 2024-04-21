import { CategoryItem } from '@prisma/client';

export class CategoryItemEntity implements CategoryItem {
  id: number;
  name: string;
  cost: number;
  perParticipant: boolean;
  versionId: number;
  categoryId: number;

}
