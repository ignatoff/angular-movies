import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { User } from 'src/app/shared/interfaces/user.model';
import { AuthData } from 'src/app/shared/interfaces/auth-data.model';

@Injectable()
export class AuthService {

   authChange = new Subject<boolean>();
   user: User | null | undefined = undefined;

   constructor(private router: Router) {}

   signupUser(authData: AuthData) {
      this.user = {
         uid: Math.round(Math.random() * 10000).toString(),
         email: authData.email
      };
      this.authSuccess();
   }

   login(authData: AuthData) {
      this.user = {
         uid: Math.round(Math.random() * 10000).toString(),
         email: authData.email
      };
      this.authSuccess();
   }

   logout() {
      this.user = null;
      this.authChange.next(false);
      this.router.navigate(['/']);
   }

   getUser() {
      return { ...this.user };
   }

   isAuth(): boolean {
      return !!this.user;
   }

   private authSuccess() {
      this.authChange.next(true);
      this.router.navigate(['/movies']);
   }
}