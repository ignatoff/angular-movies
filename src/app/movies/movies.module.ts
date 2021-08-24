import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MoviesListComponent } from './movies-list/movies-list.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesRoutingModule } from 'src/app/movies/movies-routing.module';


@NgModule({
  declarations: [
    MoviesListComponent,
    AddMovieComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    MoviesRoutingModule
  ],
  exports: [
    MoviesListComponent
  ]
})
export class MoviesModule { }
