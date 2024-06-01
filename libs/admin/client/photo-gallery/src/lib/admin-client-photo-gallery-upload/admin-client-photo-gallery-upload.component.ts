import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetListPhotosRequest } from '@my-library/api-interfaces';
import { Store } from '@ngrx/store';
import { loadlistPhotos } from '../+state/photo-gallery.actions';
import { PhotoGalleryService } from '../photo-gallery.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'lib-admin-client-photo-gallery-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-client-photo-gallery-upload.component.html',
  styleUrl: './admin-client-photo-gallery-upload.component.css',
})
export class AdminClientPhotoGalleryUploadComponent {
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
