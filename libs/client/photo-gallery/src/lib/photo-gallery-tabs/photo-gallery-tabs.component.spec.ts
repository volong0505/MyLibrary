import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoGalleryTabsComponent } from './photo-gallery-tabs.component';

describe('PhotoGalleryTabsComponent', () => {
  let component: PhotoGalleryTabsComponent;
  let fixture: ComponentFixture<PhotoGalleryTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoGalleryTabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoGalleryTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
