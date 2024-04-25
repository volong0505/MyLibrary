import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PhotoGalleryService } from '../photo-gallery.service';
import { Store } from '@ngrx/store';
import { GetListPhotosRequest } from '@my-library/api-interfaces';
import { loadlistPhotos } from '@my-library/photo-gallery';

@Component({
  selector: 'my-library-photo-gallery-upload',
  templateUrl: './photo-gallery-upload.component.html',
  styleUrl: './photo-gallery-upload.component.css',
})
export class PhotoGalleryUploadComponent {
  uploading = false;
  fileList: any = [];
  formData!: FormData;
  filter: GetListPhotosRequest = {
    page: 1,
    limit: 50
  }
  constructor(
    private msg: NzMessageService,
    private service: PhotoGalleryService,
    private store: Store
  ) { }

  fileChangeEvent(event: any): void {
    for (let i = 0; i < event.target.files.length; i++) {
      this.fileList.push(event.target.files[i]);
    }

    const formData = new FormData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.fileList.forEach((file: any) => {
      formData.append('files', file);
    });
    this.uploading = true;
    // You can use any AJAX library you like

    this.service.uploadFiles(formData).subscribe(
      (res) => {
        this.uploading = false;
        this.fileList = [];
        this.msg.success(res.message);
        this.reLoadList()
      },
      (err) => {
        this.uploading = false;
        this.msg.error(err.message);
      }
    )
  }

  reLoadList() {
    this.store.dispatch(loadlistPhotos(this.filter));
  }
}
