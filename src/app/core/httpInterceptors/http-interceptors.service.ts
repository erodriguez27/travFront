import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    hea = new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:3010, http://127.0.0.1:4200, https://github.com/',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-PINGOTHER, X-Auth-Token',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
      });
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = req.clone({
            headers: this.hea
        });
        return next.handle(headers).pipe(
            map((error: HttpResponse<any>) => {
                console.log('error', error);
                return error;
            }));
        // return next.handle(headers).pipe(
        //     catchError((error: HttpErrorResponse) => {
        //         console.log('error', error);
        //         return throwError(error);
        //     }));
    }
}
