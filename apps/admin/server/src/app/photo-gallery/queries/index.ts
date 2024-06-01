import { GetDetailPhotoHandler } from './handlers/get-detail-photo.handler';
import { GetListPhotosHandler } from './handlers/get-list-photos.handler';

export const photo_gallery_queries = [
  GetListPhotosHandler,
  GetDetailPhotoHandler,
];
