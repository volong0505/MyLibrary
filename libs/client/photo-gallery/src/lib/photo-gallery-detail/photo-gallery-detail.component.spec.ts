import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoGalleryDetailComponent } from './photo-gallery-detail.component';

describe('PhotoGalleryDetailComponent', () => {
  let component: PhotoGalleryDetailComponent;
  let fixture: ComponentFixture<PhotoGalleryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoGalleryDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoGalleryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
