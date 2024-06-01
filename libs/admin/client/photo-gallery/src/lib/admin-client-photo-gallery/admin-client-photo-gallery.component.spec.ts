import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminClientPhotoGalleryComponent } from './admin-client-photo-gallery.component';

describe('AdminClientPhotoGalleryComponent', () => {
  let component: AdminClientPhotoGalleryComponent;
  let fixture: ComponentFixture<AdminClientPhotoGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminClientPhotoGalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminClientPhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
