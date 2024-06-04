import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, catchError, map, of } from "rxjs";
import { AdminClientAuthService } from "./admin-client-auth.service";

@Injectable()
export class AdminClientAuthGuardService {
    constructor(
        private router: Router,
        private authService: AdminClientAuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        console.log('can Active');
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