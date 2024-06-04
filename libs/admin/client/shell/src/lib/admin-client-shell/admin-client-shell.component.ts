import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-admin-client-shell',
  templateUrl: './admin-client-shell.component.html',
  styleUrl: './admin-client-shell.component.css',
})
export class AdminClientShellComponent {
  isCollapsed = false;
  
  menus = [
    {
      title: 'Photo Gallery',
      icon: 'picture',
      selected: false,
      url: 'photo-gallery'
    }
  ]
}
