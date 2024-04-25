import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { FavoringPhotoCommand } from "../impl/favoring-photo.command";
import { Inject, NotFoundException } from "@nestjs/common";
import { InjectionToken } from "../../photo-gallery.injection-token";
import { PhotoGalleryRepository, PhotoGalleryErrorMessage } from "../../domain";

@CommandHandler(FavoringPhotoCommand)
export class FavoringPhotosHandler implements ICommandHandler<FavoringPhotoCommand> {
  
    @Inject(InjectionToken.PHOTO_GALLERY_REPOSITORY)
    private readonly repository: PhotoGalleryRepository


    async execute(command: FavoringPhotoCommand): Promise<void> {
        const photo = await this.repository.findOneByName(command.dto.file_name);

        if (!photo)
            throw new NotFoundException(PhotoGalleryErrorMessage.PHOTO_IS_NOT_FOUND);;
        photo.favorite()
    }
}