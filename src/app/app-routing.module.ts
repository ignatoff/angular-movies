import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from 'src/app/movies/movies-list/movies-list.component';
import { HomeComponent } from 'src/app/shared/home/home.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { LoginComponent } from 'src/app/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
