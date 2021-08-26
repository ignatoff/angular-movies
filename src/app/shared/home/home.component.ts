import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuth: boolean = false;
  authSubs!: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubs = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }
}
