import { ICommand } from '@nestjs/cqrs';
import { FavoringPhotosDto } from '../../dtos';

export class FavoringPhotoCommand implements ICommand {
  constructor(public readonly dto: FavoringPhotosDto) {}
}
