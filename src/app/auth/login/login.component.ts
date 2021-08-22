import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fireAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.fireAuth.createUserWithEmailAndPassword('abv@abv.bg', '123123')
      .then(user => console.log(user));
  }

}
