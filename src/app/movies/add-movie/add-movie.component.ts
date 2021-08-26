import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MovieService } from 'src/app/movies/movie.service';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService
  ) { 
    this.form = this.fb.group({
      title: ['', [Validators.required]],
    });
  }

  addMovie() {

    if (this.form.invalid) { return; }    


  }

}
