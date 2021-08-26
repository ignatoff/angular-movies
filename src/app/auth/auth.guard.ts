import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

   constructor(private router: Router, private authService: AuthService) { }

   canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
      const { authRequired, authFailureRedirectUrl } = route.data;

      if (
         typeof authRequired === 'boolean' &&
         authRequired === this.authService.isAuth()
      ) { return true; }

      let authRedirectUrl = authFailureRedirectUrl;

      if (authRequired) {
         const loginRedirectUrl = route.url.reduce((acc, s) => `${acc}/${s.path}`, '');
         authRedirectUrl += `?redirectUrl=${loginRedirectUrl}`;
      }

      return this.router.parseUrl(authRedirectUrl || '/');
   }
}