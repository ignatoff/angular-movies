import { User } from 'src/app/auth/user.model';
import { AuthData } from 'src/app/auth/auth-data.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

   authChange = new Subject<boolean>();
   private user!: User | null;

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

   isAuth() {
      return this.user != null;
   }

   private authSuccess() {
      this.authChange.next(true);
      this.router.navigate(['/movies']);
   }
}