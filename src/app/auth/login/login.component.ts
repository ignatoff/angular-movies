import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form!: FormGroup;

  constructor(
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {

    if (this.form.invalid) { return; }

    const data = this.form.value;
    this.authService.login(data.email, data.password);

    const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
    this.router.navigate([redirectUrl]);
    console.log();
    
  }
}
