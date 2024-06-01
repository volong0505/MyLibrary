import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as PhotoGalleryActions from './photo-gallery.actions';
import { PhotoGalleryService } from '../photo-gallery.service';
import { GetDetailPhotoResponse, GetListPhotosResponse } from '@my-library/api-interfaces';
@Injectable()
export class PhotoGalleryEffects {
  private actions$ = inject(Actions);

  constructor(
    private readonly service: PhotoGalleryService
  ) {}

  getListPhoto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PhotoGalleryActions.loadlistPhotos),
      switchMap((payload) =>
      this.service.getListPhotos(payload).pipe(
        map((res: GetListPhotosResponse)  => PhotoGalleryActions.loadlistPhotosSuccess({photos: res.photos})),
        catchError((error) => {
        return of(PhotoGalleryActions.loadlistPhotosFailure({ error }));
      })
    )))
  );

  getDetailPhoto$ = createEffect(() => 
    this.actions$.pipe(
      ofType(PhotoGalleryActions.loadDetailPhoto),
      switchMap((payload) => 
      this.service.getDetailPhoto(payload).pipe(
        map((res: GetDetailPhotoResponse) => PhotoGalleryActions.loadDetailPhotoSuccess({ photo: res})),
        catchError((error) => {
          return of(PhotoGalleryActions.loadDetailPhotoFailure({ error}))
        })
      ))
    ))
}
