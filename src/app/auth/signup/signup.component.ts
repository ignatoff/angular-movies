import { Component, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { sameValueFactory } from 'src/app/shared/validator';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnDestroy {

  killSubscription = new Subject();

  form!: FormGroup;

  constructor(
    private authService: AuthService,
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

    this.authService.signupUser({
      email: this.form.value.email,
      password: this.form.value.password
    });
  }

  ngOnDestroy(): void {
    this.killSubscription.next();
    this.killSubscription.complete();
  }

}
