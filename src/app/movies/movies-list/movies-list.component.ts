import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { MovieService } from 'src/app/movies/movie.service';
import { Movie } from 'src/app/shared/interfaces/movie.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {

  movies: Observable<any>;

  constructor(
    public movieService: MovieService,
    private afs: AngularFirestore
  ) {
    this.movies = this.afs.collection('movies').valueChanges();
  }


}
