import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-admin-client-photo-gallery-tabs',
  templateUrl: './admin-client-photo-gallery-tabs.component.html',
  styleUrl: './admin-client-photo-gallery-tabs.component.css',
})
export class AdminClientPhotoGalleryTabsComponent {
  tabs = [
    {
      name: 'Photos',
      icon: 'picture',
      component: 'my-library-photo-gallery-photos'
    },
    {
      name: 'Favourites',
      icon: 'star',
      component: 'my-library-photo-gallery-photos'
    },
    {
      name: 'Albums',
      icon: 'folder-open',
      component: 'my-library-photo-gallery-photos'
    },
    {
      name: 'Locked Folder',
      icon: 'lock',
      component: 'my-library-photo-gallery-photos'
    },
    {
      name: 'Bin',
      icon: 'delete',
      component: 'my-library-photo-gallery-photos'
    },
  ];
}
