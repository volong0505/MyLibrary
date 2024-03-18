import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState, authAdapter } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const selectAuthState =
  createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

const selectLogin = (state: any) => state.login;

export const selectError = createSelector(
  selectAuthState,
  (state) => state.error
);

export const selectIsLoading = createSelector(
  selectAuthState,
  (state) => state.isLoading
);