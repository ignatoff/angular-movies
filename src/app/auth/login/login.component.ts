import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login({
      email: this.form.value.email,
      password: this.form.value.password
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.email, Validators.required]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

}
