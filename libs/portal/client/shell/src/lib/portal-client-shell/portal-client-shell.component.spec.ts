import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortalClientShellComponent } from './portal-client-shell.component';

describe('PortalClientShellComponent', () => {
  let component: PortalClientShellComponent;
  let fixture: ComponentFixture<PortalClientShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalClientShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortalClientShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
