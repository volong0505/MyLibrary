import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminClientPhotoGalleryTabsComponent } from './admin-client-photo-gallery-tabs.component';

describe('AdminClientPhotoGalleryTabsComponent', () => {
  let component: AdminClientPhotoGalleryTabsComponent;
  let fixture: ComponentFixture<AdminClientPhotoGalleryTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminClientPhotoGalleryTabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminClientPhotoGalleryTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
