import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../../core/services/auth/auth.service';
import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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
    this.auth.logIn().subscribe(res => {
      console.log(res.header);
    });
    // this.auth.logIn()
    // .then(res => { res.pipe(map(rep => console.log(rep))  );

    //   // .subscribe(resp => {
    //   // console.log(resp);
    // });
  }

}
