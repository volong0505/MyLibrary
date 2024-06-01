import { IEvent } from '@nestjs/cqrs';

export class PhotoGalleryDeletedEvent implements IEvent {
  constructor(readonly file_name: string) {}
}
