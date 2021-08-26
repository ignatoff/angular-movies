import { Injectable } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces/movie.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieSelected = new Subject<Movie>();
  private movies: Movie[] = [
    {
      movieId: 'heroes',
      title: 'Heroes',
      plot: 'Interdum vestibulum vivamus, nulla cursus, cubilia. Nam dui porta mauris metus ornare lobortis fames egestas tellus quam. Natoque egestas porttitor.',
      imageUrl: 'https://live.staticflickr.com/2502/3947667081_fd7ddb14d3.jpg',
      genre: 'Sci-fi',
      director: 'Alan Smith'
    },
    {
      movieId: 'doom',
      title: 'Doom',
      plot: 'Some action movie',
      imageUrl: 'https://static.posters.cz/image/750/posters/doom-marine-i29159.jpg',
      genre: 'Action',
      director: 'Bob Dylan'
    }
  ];
  private details: Movie | undefined;

  getMovies() {
    return this.movies.slice();
  }

  movieDetails(id: string) {
    this.details = this.movies.find(m => m.movieId === id);    
    // this.movieSelected.next(this.details);
  }
}
