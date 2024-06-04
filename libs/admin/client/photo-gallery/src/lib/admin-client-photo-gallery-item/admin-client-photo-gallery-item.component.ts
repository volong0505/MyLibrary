import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PHOTO_GALLERY_GET_RESIZE_API } from '@my-library/api-interfaces';
import { Store } from '@ngrx/store';
import { loadDetailPhoto } from '../+state/photo-gallery.actions';
import { PhotosEntity } from '../+state/photo-gallery.models';
import { selectDetailPhoto } from '../+state/photo-gallery.selectors';
import { AdminClientPhotoGalleryService } from '../admin-client-photo-gallery.service';
const host = 'http://localhost:3333/api/'

@Component({
  selector: 'lib-admin-client-photo-gallery-item',

  templateUrl: './admin-client-photo-gallery-item.component.html',
  styleUrl: './admin-client-photo-gallery-item.component.css',
})
export class AdminClientPhotoGalleryItemComponent {
  @Input() list!: PhotosEntity[][];
  isShowModal = false;
  current_file_name!: string;

  constructor(
    private readonly store: Store,
    private readonly service: AdminClientPhotoGalleryService
  ) {
    this.store.select(selectDetailPhoto).subscribe(state => {
      this.current_file_name = state.file_name
    });
  }

  previewPhoto(file_name: string): void {
    if (this.current_file_name !== file_name) {
      this.current_file_name = file_name
      this.store.dispatch(loadDetailPhoto({file_name: this.current_file_name}))
    }
  }

  handleOk() {
    this.isShowModal = false;
  }

  getResizeUrl(file_name: string) {
    return host + PHOTO_GALLERY_GET_RESIZE_API + '?file_name=' + file_name
  }

  favoriting(file_name: string) {
    return this.service.favoring({file_name})
      .subscribe(e => { console.log(e)})
  }

}
