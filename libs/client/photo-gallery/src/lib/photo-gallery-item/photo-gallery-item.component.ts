import { Component, Input } from '@angular/core';
import { PHOTO_GALLERY_GET_RESIZE_API } from '@my-library/api-interfaces';
import { PhotosEntity, loadDetailPhoto, loadlistPhotos, selectDetailPhoto } from '@my-library/photo-gallery';
import { Store } from '@ngrx/store';
import { PhotoGalleryService } from '../photo-gallery.service';

const host = 'http://localhost:3333/api/'
@Component({
  selector: 'my-library-photo-gallery-item',
  templateUrl: './photo-gallery-item.component.html',
  styleUrl: './photo-gallery-item.component.css',
})
export class PhotoGalleryItemComponent {

  @Input() list!: PhotosEntity[][];
  isShowModal = false;
  current_file_name!: string;

  constructor(
    private readonly store: Store,
    private readonly service: PhotoGalleryService
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
