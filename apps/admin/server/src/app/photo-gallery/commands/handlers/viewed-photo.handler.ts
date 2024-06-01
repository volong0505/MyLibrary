import { Inject, NotFoundException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { FavoringPhotoCommand } from '../impl/favoring-photo.command';
import { ViewedPhotoCommand } from '../impl/viewed-photo.command';
import { InjectionToken } from '../../photo-gallery.injection-token';
import { PhotoGalleryErrorMessage, PhotoGalleryRepository } from '../../domain';

@CommandHandler(ViewedPhotoCommand)
export class ViewedPhotoHandler implements ICommandHandler<ViewedPhotoCommand> {
  @Inject(InjectionToken.PHOTO_GALLERY_REPOSITORY)
  private readonly repository: PhotoGalleryRepository;

  async execute(command: FavoringPhotoCommand): Promise<void> {
    const photo = await this.repository.findOneByName(command.dto.file_name);
    if (!photo)
      throw new NotFoundException(PhotoGalleryErrorMessage.PHOTO_IS_NOT_FOUND);
    photo.viewed();

    await this.repository.saveOne(photo);

    photo.commit();
  }
}
