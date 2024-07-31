import { Inject, InjectDecorator, Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, catchError, switchMap, forkJoin } from 'rxjs';
import { AuthService } from './auth.service';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserModel } from '../models/UserModel';
import { DriverModel } from '../models/DriverModel';
import { DriverService } from './driver.service';
import { UserModule } from '../user/user.module';
@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  /**
   *
   */

  constructor(
    private inject: Injector,
    @Inject(DOCUMENT) private document: Document,
    private authServices: AuthService,
    private driverServices: DriverService,
    private router: Router
  ) {}

  userModel?: UserModel;
  driverModel?: DriverModel;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      this.document &&
      this.document.defaultView &&
      this.document.defaultView.localStorage
    ) {
      let _authServices = this.inject.get(AuthService);

      // lay url angular chu k phai url duoi api
      let getUrl = window.location.href
      let splitUrl = getUrl.split('/')

      let token = _authServices.getToken();

      let email = _authServices.getEmail();

      let refreshToken = _authServices.getRefreshToken();

      let authorization = 'Bearer ' + token;

      return next.handle(req.clone({ setHeaders: { authorization } })).pipe(
        catchError((error: HttpErrorResponse) => {

          if (error.status === 401) {
            if(splitUrl[3] === "user"){
              this.authServices
              .createNewToken(refreshToken)
              .pipe(
                switchMap((token: any) => {
                  authorization = 'Bearer ' + token.accessToken;

                  this.authServices.saveToken(token);
                  return next.handle(
                    req.clone({ setHeaders: { authorization } })
                  );
                })
              )
              .subscribe();
            }else if(splitUrl[3] === "driver"){
              this.driverServices
              .createNewToken(refreshToken)
              .pipe(
                switchMap((token: any) => {
                  authorization = 'Bearer ' + token.accessToken;

                  this.driverServices.saveToken(token);
                  return next.handle(
                    req.clone({ setHeaders: { authorization } })
                  );
                })
              )
              .subscribe();
            }

            // this.authServices.getUserWthMail(email).subscribe(re=>{

            //   if(re.role == "User"){
            //     this.authServices
            //   .createNewToken(refreshToken)
            //   .pipe(
            //     switchMap((token: any) => {
            //       authorization = 'Bearer ' + token.accessToken;

            //       this.authServices.saveToken(token);
            //       console.log(req);
            //       return next.handle(
            //         req.clone({ setHeaders: { authorization } })
            //       );
            //     })
            //   )
            //   .subscribe();
            //   }else if(re.role != "User"){
            //     this.authServices
            //     .createNewToken(refreshToken)
            //     .pipe(
            //       switchMap((token: any) => {
            //         authorization = 'Bearer ' + token.accessToken;

            //         this.authServices.saveToken(token);
            //         console.log(req);
            //         return next.handle(
            //           req.clone({ setHeaders: { authorization } })
            //         );
            //       })
            //     )
            //     .subscribe();
            //     console.log("fail")
            //   }
            // })
          }
          return throwError(() => error.message);
        })
      );
    }

    return next.handle(req);
  }


  // addTokenHeader(req: HttpRequest<any>,token: string){
  //   let authorization = 'Bearer ' + token;

  //   return req.clone({ setHeaders: { authorization } })
  // }
}
