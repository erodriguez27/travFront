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
    user: any;
    profilePicture: string;
  ngOnInit(): void {
    this.auth.loggedIn().subscribe(res => {
      if (res.logged){
        console.log(res.user);
        this.user = res.user;
        this.profilePicture = res.user.photos[0].value;
      }
    });
  }

}
