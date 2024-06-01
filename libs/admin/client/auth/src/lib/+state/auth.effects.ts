
import { loginSuccess, loginFailure } from './auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services';

@Injectable()
export class AuthEffects {
  redirect_url: string;

  login$ = createEffect(() =>
    this.action$.pipe(
      ofType('[Login] User Login'),
      switchMap((payload) =>
        this.authService.login(payload).pipe(
          map(res => loginSuccess({ message: res.message })),
          catchError(error => {
            return of(loginFailure({ error: error.error.message })
            )
          })
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.action$.pipe(
      ofType('[Login] Login Success'),
      tap(() => {
        this.router.navigateByUrl(this.redirect_url)
      })
    ), { dispatch: false });

  loginFailure$ = createEffect(() =>
    this.action$.pipe(
      ofType('[Login] Login Failure'),
      tap(() => {
        this.router.navigateByUrl('login')
      })
    ), { dispatch: false });

  constructor(
    private action$: Actions,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.redirect_url = this.route.snapshot.queryParams['redirect'] || '/'
  }
}