import { Component } from '@angular/core';
import { MovieService } from 'src/app/movies/movie.service';
import { Movie } from 'src/app/shared/interfaces/movie.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {

  movies: Movie[] = [];

  constructor(private movieService: MovieService) { 
    this.movies = this.movieService.getMovies();
  }

  getMovieId(id: string) {
    console.log(id);    
  }
}
