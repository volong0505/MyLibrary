import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminClientPhotoGalleryItemComponent } from './admin-client-photo-gallery-item.component';

describe('AdminClientPhotoGalleryItemComponent', () => {
  let component: AdminClientPhotoGalleryItemComponent;
  let fixture: ComponentFixture<AdminClientPhotoGalleryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminClientPhotoGalleryItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminClientPhotoGalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
