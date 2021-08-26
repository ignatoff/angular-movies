import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/app/material.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesRoutingModule } from 'src/app/movies/movies-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MovieService } from 'src/app/movies/movie.service';


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
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieService
  ]
})
export class MoviesModule { }
