import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  hea = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': 'http://127.0.0.1:3010, http://127.0.0.1:4200, https://github.com/',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-PINGOTHER, X-Auth-Token',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  });
  logIn(): Observable<any> {
    console.log('Lo mando');
    return this.http.get(`auth/github`, {observe: 'response'});
  }

  loggedIn(): Observable<any> {
    console.log(this.hea);
    return this.http.get(`auth/loggedIn`, {headers: this.hea, withCredentials: true});
  }

  logOut(): Observable<any> {
    return this.http.get('auth/logout', {headers: this.hea, withCredentials: true});
  }

  getRepos(): Observable<any> {
    return this.http.get('travis/getRepos');
  }
}
