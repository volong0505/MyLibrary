import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminClientAuthComponent } from './admin-client-auth.component';

describe('AdminClientAuthComponent', () => {
  let component: AdminClientAuthComponent;
  let fixture: ComponentFixture<AdminClientAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminClientAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminClientAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
