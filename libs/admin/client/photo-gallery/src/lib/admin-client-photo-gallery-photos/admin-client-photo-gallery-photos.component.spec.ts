import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminClientPhotoGalleryPhotosComponent } from './admin-client-photo-gallery-photos.component';

describe('AdminClientPhotoGalleryPhotosComponent', () => {
  let component: AdminClientPhotoGalleryPhotosComponent;
  let fixture: ComponentFixture<AdminClientPhotoGalleryPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminClientPhotoGalleryPhotosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminClientPhotoGalleryPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
