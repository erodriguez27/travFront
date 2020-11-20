import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../../core/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  location: any;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.location = 'dashboard';
  }

  clikedLogIn(): void {
    this.auth.logIn()
    .subscribe(res => {
      console.log(res);
    });
  }

}
