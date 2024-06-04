import { Component } from '@angular/core';
import { GetDetailPhotoResponse } from '@my-library/api-interfaces';
import { Store } from '@ngrx/store';
import { loadDetailPhoto } from '../+state/photo-gallery.actions';
import { selectDetailPhoto, selectIsLoadingDetailPhoto } from '../+state/photo-gallery.selectors';
const host = 'http://localhost:3333/api/'

@Component({
  selector: 'lib-admin-client-photo-gallery-detail',
  templateUrl: './admin-client-photo-gallery-detail.component.html',
  styleUrl: './admin-client-photo-gallery-detail.component.css',
})
export class AdminClientPhotoGalleryDetailComponent {
  photo!: GetDetailPhotoResponse;
  isLoading = false;
  constructor(
    private store: Store
  ) {
    this.store.select(selectDetailPhoto).subscribe(state => {
      this.photo = state
    });
    this.store.select(selectIsLoadingDetailPhoto).subscribe(state => {
      this.isLoading = state
    });
    this.store.dispatch(loadDetailPhoto({ file_name: '' }))
  };

  ngOnInit(): void {

  }

  getUrl() {
    if (!this.photo.file_name) return '';

    return host + this.photo.file_name
  }
}
