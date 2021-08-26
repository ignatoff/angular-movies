import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { ProfileComponent } from 'src/app/auth/profile/profile.component';
import { AuthGuard } from 'src/app/auth/auth.guard';


const routes: Routes = [
   {
      path: 'login',
      component: LoginComponent,
      canActivate: [AuthGuard],
      data: {
         authRequired: false,
         authFailureRedirectUrl: '/'
      }
   },
   {
      path: 'signup',
      component: SignupComponent,
      canActivate: [AuthGuard],
      data: {
         authRequired: false,
         authFailureRedirectUrl: '/'
      }
   },
   {
      path: 'profile',
      component: ProfileComponent,
      canActivate: [AuthGuard],
      data: {
         authRequired: true,
         authFailureRedirectUrl: '/login'
      }
   }
]

@NgModule({
   imports: [
      RouterModule.forChild(routes)
   ],
   exports: [RouterModule]
})

export class AuthRoutingModule { }