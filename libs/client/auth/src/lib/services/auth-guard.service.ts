import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, catchError, map, of } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.getUser()
            .pipe(
                catchError(async error => {
                    await this.router.navigate(['login'], { state: { redirect: state.url }});
                    return of ([]);
                }),
                map((data) => {
                    if (data) {
                        return true
                    } else {
                        return false
                    }
                })
            )
    } 
}