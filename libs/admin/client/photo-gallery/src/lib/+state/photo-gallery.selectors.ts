import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PHOTO_GALLERY_FEATURE_KEY,
  PhotoGalleryState,
  photoGalleryAdapter,
} from './photo-gallery.reducer';

// Lookup the 'PhotoGallery' feature state managed by NgRx
export const selectPhotoGalleryState = createFeatureSelector<PhotoGalleryState>(
  PHOTO_GALLERY_FEATURE_KEY
);

const { selectAll, selectEntities } = photoGalleryAdapter.getSelectors();

export const selectPhotoGalleryLoaded = createSelector(
  selectPhotoGalleryState,
  (state: PhotoGalleryState) => state.isLoadingList
);

export const selectPhotoGalleryError = createSelector(
  selectPhotoGalleryState,
  (state: PhotoGalleryState) => state.error
);

export const selectAllPhotoGallery = createSelector(
  selectPhotoGalleryState,
  (state: PhotoGalleryState) => state.photos
);

export const selectDetailPhoto = createSelector(
  selectPhotoGalleryState,
  (state: PhotoGalleryState) => state.currentPhoto
);

export const selectIsLoadingDetailPhoto = createSelector(
  selectPhotoGalleryState,
  (state: PhotoGalleryState) => state.isLoadingDetail
)
// export const selectPhotoGalleryEntities = createSelector(
//   selectPhotoGalleryState,
//   (state: PhotoGalleryState) => selectEntities(state)
// );

export const selectSelectedId = createSelector(
  selectPhotoGalleryState,
  (state: PhotoGalleryState) => state.selectedId
);

// export const selectEntity = createSelector(
//   selectPhotoGalleryEntities,
//   selectSelectedId,
//   (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
// );
