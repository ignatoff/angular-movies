import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

   constructor(private authService: AuthService, private router: Router) { }

   canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
      const { authenticationRequired, authFailureRedirectUrl } = route.data;

      if (
         typeof authenticationRequired === 'boolean' &&
         authenticationRequired === this.authService.isAuth()
      ) { return true; }

      let authRedirectUrl = authFailureRedirectUrl;
      
      if (authenticationRequired) {
         const loginRedirectUrl = route.url.reduce((acc, s) => `${acc}/${s.path}`, '');
         authRedirectUrl +=`?redirectUrl=${loginRedirectUrl}`;
      }

      return this.router.parseUrl(authRedirectUrl || '/login');
   }
}