import { Component, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';
import { sameValueFactory } from 'src/app/shared/validator';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnDestroy {

  killSubscription = new Subject();

  form!: FormGroup;

  constructor(
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, sameValueFactory(
        () => this.form?.get('password'), this.killSubscription
      )]]
    });
  }

  signUp(): void {

    if (this.form.invalid) { return; }

    const data = this.form.value;
    this.authService.signUp(data.email, data.password);

    const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
    this.router.navigate([redirectUrl]);
  }

  ngOnDestroy(): void {
    this.killSubscription.next();
    this.killSubscription.complete();
  }

}
