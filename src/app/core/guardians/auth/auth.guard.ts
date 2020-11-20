import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  permission: boolean;
  constructor(
    private router: Router,
    private auth: AuthService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.auth.loggedIn().pipe(map(res => {
        if (res.logged){
          return true;
        }else{
          this.router.navigate(['home'], { queryParams: { retUrl: route.url} });
          return false;
        }
      }));
  }

}
