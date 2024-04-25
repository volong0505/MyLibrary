import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoGalleryItemComponent } from './photo-gallery-item.component';

describe('PhotoGalleryItemComponent', () => {
  let component: PhotoGalleryItemComponent;
  let fixture: ComponentFixture<PhotoGalleryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoGalleryItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoGalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
