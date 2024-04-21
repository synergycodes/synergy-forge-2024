import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AbstractService } from "@synergy-forge/api/core";
import { DatabaseService } from "@synergy-forge/api/database";
import { VersionEntity } from "../entities/version.entity";
import { CreateVersionDto } from "../dto/create-version.dto";
import { UpdateVersionDto } from "../dto/update-version.dto";
import { CreateCategoryItemDto } from "../../../../category-items/src/lib/dto/create-category-item.dto";

@Injectable()
export class VersionsService extends AbstractService<VersionEntity, CreateVersionDto, UpdateVersionDto> {

  constructor(protected override db: DatabaseService) {
    super(db);
    this.entityName = 'version';
  }

  async duplicate(originId: string) {
    const versionToCopy: VersionEntity = await this.findOne(+originId);

    if (!versionToCopy) {
      throw new HttpException(`Version not found`, HttpStatus.NOT_FOUND);

    }

    const {name, id, integrationId} = versionToCopy;

    const catItemsToCopy = await this.db.categoryItem.findMany({where: {versionId: id}});

    try {
      const versionCopy: VersionEntity = await this.create({name: name + ' copy', integrationId});

      const newCatItems: CreateCategoryItemDto[] = catItemsToCopy.map(item => {
        const result: any = {
          ...item,
          versionId: versionCopy.id
        }
        delete result.id;
        return result;
      });

      await Promise.all(newCatItems.map(data => this.db.categoryItem.create({data})));
      return this.db.version.findFirst({where: {id: versionCopy.id}, include: {categoryItems: true}})
    } catch (e: any) {
      throw new HttpException(`Duplicate Version error`, HttpStatus.BAD_REQUEST);
    }
  }

}
