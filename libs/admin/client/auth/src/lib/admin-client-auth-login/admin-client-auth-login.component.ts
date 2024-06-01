import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, NonNullableFormBuilder } from '@angular/forms';
import { LoginRequest } from '@my-library/api-interfaces';
import { Store } from '@ngrx/store';
import { login } from '../+state/auth.actions';
import { selectError, selectIsLoading } from '../+state/auth.selectors';

@Component({
  selector: 'lib-admin-client-auth-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-client-auth-login.component.html',
  styleUrl: './admin-client-auth-login.component.css',
})
export class AdminClientAuthLoginComponent {
  passwordVisible: boolean = false;
  isLoading: boolean = false;
  error!: string | null;

  validateForm: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>
  }> = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  })

  submitForm(): void {
    if (this.validateForm.valid) {
      this.onLogin()
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      })
    }
  };

  onLogin() {
    const params: LoginRequest = {
      username: this.validateForm.get('username')?.value!,
      password: this.validateForm.get('password')?.value!,
      remember: this.validateForm.get('remember')?.value!
    }
    this.store.dispatch(login(params))
  }

  constructor(
    private readonly fb: NonNullableFormBuilder,
    private store: Store,
  ) {
    this.store.select(selectError).subscribe(error => (this.error = error));
    this.store.select(selectIsLoading).subscribe(isLoading => (this.isLoading = isLoading));
  }

  ngOnInit(): void {

  }
}
