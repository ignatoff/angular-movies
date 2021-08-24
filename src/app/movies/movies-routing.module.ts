import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { MoviesListComponent } from 'src/app/movies/movies-list/movies-list.component';
import { AddMovieComponent } from 'src/app/movies/add-movie/add-movie.component';
import { MovieComponent } from 'src/app/movies/movie/movie.component';


const routes: Routes = [
   {
      path: 'movies',
      component: MoviesListComponent
   },
   {
      path: 'add-movie',
      component: AddMovieComponent,
      canActivate: [AuthGuard]
   },
   {
      path: 'movie',
      component: MovieComponent
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