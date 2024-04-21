import { HttpException, HttpStatus, Logger } from "@nestjs/common";
import { DatabaseService } from "@synergy-forge/api/database";
import { NotFoundError } from "@prisma/client/runtime";

export abstract class AbstractService<T, CreateTDto, UpdateTDto> {
  protected entityName!: string;

  constructor(protected db: DatabaseService) {
  }

  async findOne<T>(id: number): Promise<T> {
    try {
      // @ts-ignore
      return await this.db[this.entityName].findFirst({where: {id}});
    } catch (e: any) {
      this.logError(e);
      throw new HttpException(`FindOne ${this.entityName} error`, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll<T>(): Promise<T> {
    try {
      // @ts-ignore
      return await this.db[this.entityName].findMany();
    } catch (e: any) {
      this.logError(e);
      throw new HttpException(`FindAll ${this.entityName} error`, HttpStatus.BAD_REQUEST);
    }
  }

  async create(data: CreateTDto): Promise<T> {
    try {
      // @ts-ignore
      return await this.db[this.entityName].create({data});
    } catch (e: any) {
      this.logError(e);
      throw new HttpException(`Create ${this.entityName} error`, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, data: UpdateTDto): Promise<T | NotFoundError> {
    try {
      // @ts-ignore
      return await this.db[this.entityName].update({
        where: {id},
        data
      })
    } catch (e: any) {
      this.logError(e);
      throw new HttpException(`Update ${this.entityName} error`, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      // @ts-ignore
      return await this.db[this.entityName].delete({where: {id}});
    } catch (e: any) {
      this.logError(e);
      throw new HttpException(`Remove ${this.entityName} error`, HttpStatus.BAD_REQUEST);
    }
  }

  protected logError(e: any) {
    Logger.error(e.message);
  }
}
