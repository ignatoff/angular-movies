import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { User } from 'src/app/shared/interfaces/user.model';


@Injectable()
export class AuthService {

   // userData: any;
   authChange = new Subject<boolean>();
   user: User | null | undefined = undefined;

   constructor(
      private afs: AngularFirestore,
      public afAuth: AngularFireAuth,  
      private router: Router
      ) {
         // this.afAuth.authState.subscribe(user => {
         //    if (user) {
         //       this.userData = user;
         //       localStorage.setItem('user', JSON.stringify(this.userData));
         //       JSON.parse(localStorage.getItem('user'));
         //    } else {
         //       localStorage.setItem('user', null);
         //       JSON.parse(localStorage.getItem('user'))
         //    }
         // })
      }

   login(email: string, password: string) {
      return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
         this.SetUserData(result.user);
         this.authSuccess();
      })
      .catch((error) => {
         window.alert(error.message);
      })
   }
   
   signUp(email: string, password: string) {
      return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
         this.SetUserData(result.user);
         this.authSuccess();
      })
      .catch((error) => {
         window.alert(error.message);
      })
   }
// 
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

   SetUserData(usr: any) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${usr.uid}`);
      const userData: User = {
         uid: usr.uid,
         email: usr.email
      }

      return userRef.set(userData, {merge: true});
   }

   private authSuccess() {
      this.authChange.next(true);
      this.router.navigate(['/movies']);
   }
}