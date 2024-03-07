import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-library-photo-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css',
})
export class PhotoGalleryComponent {}
