import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { MoviesListComponent } from 'src/app/movies/movies-list/movies-list.component';
import { AddMovieComponent } from 'src/app/movies/add-movie/add-movie.component';
import { MovieComponent } from 'src/app/movies/movie/movie.component';


const routes: Routes = [
   {
      path: 'movies',
      children: [
         {
            path: '',
            pathMatch: 'full',
            component: MoviesListComponent
         },
         {
            path: ':movieId',
            component: MovieComponent
         }
      ],
   },
   {
      path: 'add-movie',
      component: AddMovieComponent,
      // canActivate: [AuthGuard],
      // data: {
         // authRequired: true,
         // authFailureRedirectUrl: '/login'
      // }
   }
]

@NgModule({
   imports: [
      RouterModule.forChild(routes)
   ],
   exports: [RouterModule],
   providers: [AuthGuard]
})

export class MoviesRoutingModule { }