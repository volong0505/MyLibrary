import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortalClientShellHeaderComponent } from './portal-client-shell-header.component';

describe('PortalClientShellHeaderComponent', () => {
  let component: PortalClientShellHeaderComponent;
  let fixture: ComponentFixture<PortalClientShellHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalClientShellHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortalClientShellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
