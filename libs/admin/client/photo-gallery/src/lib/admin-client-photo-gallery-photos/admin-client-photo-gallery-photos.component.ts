import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetListPhotosRequest } from '@my-library/api-interfaces';
import { Store } from '@ngrx/store';
import { loadlistPhotos } from '../+state/photo-gallery.actions';
import { PhotosEntity } from '../+state/photo-gallery.models';
import { selectPhotoGalleryLoaded, selectAllPhotoGallery } from '../+state/photo-gallery.selectors';

@Component({
  selector: 'lib-admin-client-photo-gallery-photos',
  templateUrl: './admin-client-photo-gallery-photos.component.html',
  styleUrl: './admin-client-photo-gallery-photos.component.css',
})
export class AdminClientPhotoGalleryPhotosComponent {
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
