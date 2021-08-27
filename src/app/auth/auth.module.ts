import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AuthRoutingModule,

    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
