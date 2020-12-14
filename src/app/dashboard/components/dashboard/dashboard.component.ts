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
    reps: Array<any>;

  ngOnInit(): void {
    this.reps = [];
    this.auth.getRepos().subscribe(res => {
      console.log(res);
      this.reps = res.data.repositories;
      if (res.logged){
      }
    });
  }

  showRow(item): void {
    console.log(item);

  }

}
