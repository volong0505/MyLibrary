import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as PhotoGalleryActions from './photo-gallery.actions';
import { PhotoEntity, PhotosEntity } from './photo-gallery.models';

export const PHOTO_GALLERY_FEATURE_KEY = 'photoGallery';

export interface PhotoGalleryState {
  photos: PhotosEntity[];
  currentPhoto: PhotoEntity;
  selectedId?: string | number | null; // which PhotoGallery record has been selected
  isLoadingList: boolean; // has the PhotoGallery list been loaded
  error?: string | null; // last known error (if any)
  isLoadingDetail: boolean;
  justUpload?: boolean
}

export interface PhotoGalleryPartialState {
  readonly [PHOTO_GALLERY_FEATURE_KEY]: PhotoGalleryState;
}

export const photoGalleryAdapter: EntityAdapter<PhotoGalleryState> = createEntityAdapter<PhotoGalleryState>()

export const initialPhotoGalleryState: PhotoGalleryState =
photoGalleryAdapter.getInitialState({
    // set initial required properties
    photos: [],
    
    selectedId: null,
    isLoadingList: false,
    getList_Error: null,
    justUpload: false,

    currentPhoto: {} as PhotoEntity,
    isLoadingDetail: false,
    loadingDetailError: null
  });

const reducer = createReducer(
  initialPhotoGalleryState,
  on(PhotoGalleryActions.loadlistPhotos, (state) => ({
    ...state,
    isLoadingList: true,
    error: null,
  })),
  on(PhotoGalleryActions.loadlistPhotosSuccess, (state, { photos }) =>
    ({...state, photos: photos, isLoadingList: false })
  ),
  on(PhotoGalleryActions.loadlistPhotosFailure, (state, { error }) => ({
    ...state,
    getList_Error: error,
  })),

  on(PhotoGalleryActions.loadDetailPhoto, (state) => ({
    ...state,
    isLoadingDetail: true,
    loadingDetailError: null
  })),

  on(PhotoGalleryActions.loadDetailPhotoSuccess, (state, { photo }) => ({
    ...state,
    currentPhoto: {
      file_name: photo.file_name,
      original_name: photo.original_name,
      size: photo.size,
    },
    isLoadingDetail: false,
  })),

  on(PhotoGalleryActions.loadDetailPhotoFailure, (state, { error}) => ({
    ...state,
    isLoadingDetail: false,
    loadingDetailError: error,
  }))

);

export function photoGalleryReducer(
  state: PhotoGalleryState | undefined,
  action: Action
) {
  return reducer(state, action);
}
