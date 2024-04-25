import { createAction, props } from '@ngrx/store';
import { PhotosEntity } from './photo-gallery.models';
import { GetDetailPhotoRequest, GetDetailPhotoResponse, GetListPhotosRequest } from '@my-library/api-interfaces';

// GET LIST PHOTOS ACTIONS
export const loadlistPhotos = createAction(
  '[PhotoGallery/API] Load List Photos',
  props<GetListPhotosRequest>()
  );

export const loadlistPhotosSuccess = createAction(
  '[PhotoGallery/API] Load List Photos Success',
  props<{ photos: PhotosEntity[]}>()
);

export const loadlistPhotosFailure = createAction(
  '[PhotoGallery/API] Load List Photos Failure',
  props<{ error: any }>()
);

// GET DETAIL PHOTO ACTIONS
export const loadDetailPhoto = createAction(
  '[PhotoGallery/API] Load Detail Photo',
  props<GetDetailPhotoRequest>()
);

export const loadDetailPhotoSuccess = createAction(
  '[PhotoGallery/API] Load Detail Photo Success',
  props<{photo: GetDetailPhotoResponse}>()
);

export const loadDetailPhotoFailure = createAction(
  '[PhotoGallery/API] Load Detail Photo Failure',
  props<{ error: any}>()
);


