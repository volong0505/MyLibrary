import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminClientPhotoGalleryDetailComponent } from './admin-client-photo-gallery-detail.component';

describe('AdminClientPhotoGalleryDetailComponent', () => {
  let component: AdminClientPhotoGalleryDetailComponent;
  let fixture: ComponentFixture<AdminClientPhotoGalleryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminClientPhotoGalleryDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminClientPhotoGalleryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
