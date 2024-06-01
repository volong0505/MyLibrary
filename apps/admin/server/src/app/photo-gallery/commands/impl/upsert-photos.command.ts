import { UpsertPhotosDto } from '../../dtos';

export class UpsertPhotosCommand {
  constructor(public readonly dto: UpsertPhotosDto) {}
}
