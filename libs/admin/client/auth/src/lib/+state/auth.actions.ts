import { createAction, props } from '@ngrx/store';
import { AuthEntity } from './auth.models';
import { LoginRequest } from '@my-library/api-interfaces';

export const initAuth = createAction('[Auth Page] Init');

export const login = createAction(
  '[Login] User Login',
  props<LoginRequest> ()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{message: string}>()
);

export const loginFailure = createAction(
  '[Login] Login Failure',
  props<{ error: string}>()
);