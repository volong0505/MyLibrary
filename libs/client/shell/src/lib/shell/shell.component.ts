import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-library-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css',
})
export class ShellComponent {
  menus = [
    {
      title: 'Photo Gallery',
      icon: 'picture',
      selected: false
    }
  ]
}
