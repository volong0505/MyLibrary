import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDetailPhoto, selectIsLoadingDetailPhoto } from '../+state/photo-gallery.selectors';
import { GetDetailPhotoResponse } from '@my-library/api-interfaces';
import { loadDetailPhoto } from '../+state/photo-gallery.actions';
const host = 'http://localhost:3333/api/'

@Component({
  selector: 'my-library-photo-gallery-detail',
  templateUrl: './photo-gallery-detail.component.html',
  styleUrl: './photo-gallery-detail.component.css',
})
export class PhotoGalleryDetailComponent implements OnInit {
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
