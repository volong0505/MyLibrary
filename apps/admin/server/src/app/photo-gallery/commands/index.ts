import { FavoringPhotosHandler } from './handlers/favoring-photos.handler';
import { UpsertPhotosHandler } from './handlers/upsert-photos.handler';
import { ViewedPhotoHandler } from './handlers/viewed-photo.handler';

export const photo_gallery_commands = [
  UpsertPhotosHandler,
  ViewedPhotoHandler,
  FavoringPhotosHandler,
];
