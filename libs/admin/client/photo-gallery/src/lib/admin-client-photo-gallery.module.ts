import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPhotoGallery from './+state/photo-gallery.reducer';
import { PhotoGalleryEffects } from './+state/photo-gallery.effects';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzDescriptionsModule  } from 'ng-zorro-antd/descriptions';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { AdminClientPhotoGalleryDetailComponent } from './admin-client-photo-gallery-detail/admin-client-photo-gallery-detail.component';
import { AdminClientPhotoGalleryItemComponent } from './admin-client-photo-gallery-item/admin-client-photo-gallery-item.component';
import { AdminClientPhotoGalleryPhotosComponent } from './admin-client-photo-gallery-photos/admin-client-photo-gallery-photos.component';
import { AdminClientPhotoGalleryTabsComponent } from './admin-client-photo-gallery-tabs/admin-client-photo-gallery-tabs.component';
import { AdminClientPhotoGalleryUploadComponent } from './admin-client-photo-gallery-upload/admin-client-photo-gallery-upload.component';
import { AdminClientPhotoGalleryService } from './admin-client-photo-gallery.service';
import { AdminClientPhotoGalleryComponent } from './admin-client-photo-gallery/admin-client-photo-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: AdminClientPhotoGalleryComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([...routes]),
    NzGridModule,
    NzImageModule,
    NzDividerModule,
    NzTabsModule,
    NzIconModule,
    NzButtonModule,
    NzUploadModule,
    NzSkeletonModule,
    NzDescriptionsModule ,
    NzAvatarModule,
    StoreModule.forFeature(
      fromPhotoGallery.PHOTO_GALLERY_FEATURE_KEY,
      fromPhotoGallery.photoGalleryReducer
    ),
    EffectsModule.forFeature([PhotoGalleryEffects])
  ],
  declarations: [
    AdminClientPhotoGalleryComponent,
    AdminClientPhotoGalleryDetailComponent,
    AdminClientPhotoGalleryTabsComponent,
    AdminClientPhotoGalleryPhotosComponent,
    AdminClientPhotoGalleryItemComponent,
    AdminClientPhotoGalleryUploadComponent
  ],
  providers: [
    AdminClientPhotoGalleryService
  ]
})
export class AdminClientPhotoGalleryModule {}
