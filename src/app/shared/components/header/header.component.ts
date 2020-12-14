import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  user: any;
  profilePicture: string;
  public isCollapsed = true;

 toggleMenu(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit(): void {
    this.auth.loggedIn().subscribe(res => {
      if (res.logged) {
        console.log(res.user);
        this.user = res.user;
        this.profilePicture = res.user.photos[0].value;
      }
    });
  }

  logOut(): void {
    this.auth.logOut().subscribe(res => {
      console.log(res);
      if (res.loggedOut){
        this.router.navigate([`/${res.redirectTo}`]);
      }
    });
  }

}
