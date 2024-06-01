import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminClientShellComponent } from './admin-client-shell.component';

describe('AdminClientShellComponent', () => {
  let component: AdminClientShellComponent;
  let fixture: ComponentFixture<AdminClientShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminClientShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminClientShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
