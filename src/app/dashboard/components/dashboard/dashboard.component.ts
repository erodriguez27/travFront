import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../core/services/auth/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    // this.auth.loggedIn().subscribe(res => {
    //   console.log('loggedIn', res);
    // });
  }

}
