import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { AuthEntity } from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  message: string | null;
  error: string | null;
  isLoading: boolean
};

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const authAdapter: EntityAdapter<AuthEntity> =
  createEntityAdapter<AuthEntity>();

export const initialAuthState: AuthState = {
  // set initial required properties
  message: null,
  error: null,
  isLoading: false
}

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state) => ({
    ...state,
    isLoading: true
  })),
  on(AuthActions.loginSuccess, (state, { message }) =>
    ({
      ...state,
      message,
      isLoading: false
    })
  ),
  on(AuthActions.loginFailure, (state, { error }) => 
    ({
      ...state,
      error: error,
      isLoading: false
    })
    )
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
