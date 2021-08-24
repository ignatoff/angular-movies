import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { ProfileComponent } from 'src/app/auth/profile/profile.component';


const routes: Routes = [
   {
      path: 'login',
      component: LoginComponent
   },
   {
      path: 'signup',
      component: SignupComponent
   },
   {
      path: 'profile',
      component: ProfileComponent
   }
]

@NgModule({
   imports: [
      RouterModule.forChild(routes)
   ],
   exports: [RouterModule]
})

export class AuthRoutingModule { }