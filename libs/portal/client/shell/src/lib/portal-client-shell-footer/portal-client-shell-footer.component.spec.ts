import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortalClientShellFooterComponent } from './portal-client-shell-footer.component';

describe('PortalClientShellFooterComponent', () => {
  let component: PortalClientShellFooterComponent;
  let fixture: ComponentFixture<PortalClientShellFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalClientShellFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortalClientShellFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
