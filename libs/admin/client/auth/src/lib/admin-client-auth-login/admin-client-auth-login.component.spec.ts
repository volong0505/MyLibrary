import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminClientAuthLoginComponent } from './admin-client-auth-login.component';

describe('AdminClientAuthLoginComponent', () => {
  let component: AdminClientAuthLoginComponent;
  let fixture: ComponentFixture<AdminClientAuthLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminClientAuthLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminClientAuthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
