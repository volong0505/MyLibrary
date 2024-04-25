import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoGalleryPhotosComponent } from './photo-gallery-photos.component';

describe('PhotoGalleryPhotosComponent', () => {
  let component: PhotoGalleryPhotosComponent;
  let fixture: ComponentFixture<PhotoGalleryPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoGalleryPhotosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoGalleryPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
