import { NgModule } from '@angular/core';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhotoGalleryDetailComponent } from './photo-gallery-detail/photo-gallery-detail.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { PhotoGalleryTabsComponent } from './photo-gallery-tabs/photo-gallery-tabs.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PhotoGalleryPhotosComponent } from './photo-gallery-photos/photo-gallery-photos.component';
import { PhotoGalleryItemComponent } from './photo-gallery-item/photo-gallery-item.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPhotoGallery from './+state/photo-gallery.reducer';
import { PhotoGalleryEffects } from './+state/photo-gallery.effects';
import { PhotoGalleryUploadComponent } from './photo-gallery-upload/photo-gallery-upload.component';
import { PhotoGalleryService } from './photo-gallery.service';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzDescriptionsModule  } from 'ng-zorro-antd/descriptions';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

const routes: Routes = [
  {
    path: '',
    component: PhotoGalleryComponent,
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
    PhotoGalleryComponent,
    PhotoGalleryDetailComponent,
    PhotoGalleryTabsComponent,
    PhotoGalleryPhotosComponent,
    PhotoGalleryItemComponent,
    PhotoGalleryUploadComponent
  ],
  providers: [
    PhotoGalleryService
  ]
})
export class PhotoGalleryModule {}
