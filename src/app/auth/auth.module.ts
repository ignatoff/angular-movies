import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
    AuthRoutingModule
  ],
  providers:[
    AuthService
  ]
})
export class AuthModule { }
