import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Movie } from 'src/app/shared/interfaces/movie.model';
import { MovieService } from 'src/app/movies/movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  movie: Movie | undefined;
  movieSubscription!: Subscription;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    ) { 
      this.fetchMovie();
    }

  fetchMovie() {
    // this.movieSubscription = this.movieService.movieDetails.subscribe()
  }
}
