import { Component } from '@angular/core';

@Component({
  selector: 'my-library-photo-gallery-tabs',
  templateUrl: './photo-gallery-tabs.component.html',
  styleUrl: './photo-gallery-tabs.component.css',
})
export class PhotoGalleryTabsComponent {
 
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
