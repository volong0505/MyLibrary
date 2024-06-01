import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminClientPhotoGalleryUploadComponent } from './admin-client-photo-gallery-upload.component';

describe('AdminClientPhotoGalleryUploadComponent', () => {
  let component: AdminClientPhotoGalleryUploadComponent;
  let fixture: ComponentFixture<AdminClientPhotoGalleryUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminClientPhotoGalleryUploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminClientPhotoGalleryUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
