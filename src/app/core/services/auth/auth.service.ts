import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {environment} from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  logIn(): void {
    this.http.get(`${environment.serverUrl}/auth/github`);
  }
}
