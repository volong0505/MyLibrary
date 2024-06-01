import { IQueryResult } from '@nestjs/cqrs';

export class FindPhotosResult implements IQueryResult {
  constructor(
    readonly photos: Readonly<{
      file_name: string;
      original_name: string;
    }>[]
  ) {}
}
