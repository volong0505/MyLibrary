import { ICommand } from '@nestjs/cqrs';
import { ViewedPhotoDto } from '../../dtos';

export class ViewedPhotoCommand implements ICommand {
  constructor(public readonly dto: ViewedPhotoDto) {}
}
