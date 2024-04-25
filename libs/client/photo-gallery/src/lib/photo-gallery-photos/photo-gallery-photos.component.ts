import { Component, OnInit } from '@angular/core';
import { GetListPhotosRequest } from '@my-library/api-interfaces';
import {  PhotosEntity, loadlistPhotos, selectAllPhotoGallery, selectPhotoGalleryLoaded } from '@my-library/photo-gallery';
import { Store } from '@ngrx/store';

@Component({
  selector: 'my-library-photo-gallery-photos',
  templateUrl: './photo-gallery-photos.component.html',
  styleUrl: './photo-gallery-photos.component.css',
})
export class PhotoGalleryPhotosComponent implements OnInit {
  photos_item!: PhotosEntity[][];
  isLoading = false;
  filter: GetListPhotosRequest = {
    page: 1,
    limit: 50
  }
  constructor(
    private store: Store
  ) {
  }
  ngOnInit(): void {
    this.store.dispatch(loadlistPhotos(this.filter));
    this.store.select(selectPhotoGalleryLoaded).subscribe(state => {
      this.isLoading = state
    })
    this.store.select(selectAllPhotoGallery).subscribe(state => {
      let cols = 4;
      this.photos_item = [...Array(cols).keys()].map(c => state.filter((_, i) => i % cols === c))
    })    
  }
}
