import { Injectable } from '@angular/core';
import { LoginModel } from '../models/LoginModel';
import { TokenModel } from '../models/TokenModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { DriverModel } from '../models/DriverModel';
import { DriverViewModel } from '../models/DriverViewModel';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  readonly baseApi: string = environment.baseUrl;
  /**
   *
   */
  constructor(private _http: HttpClient) {}

  registerDriver(model: FormData) {
    return this._http.post(this.baseApi + '/Driver/register-driver', model);
  }

  loginDriver(model: LoginModel): Observable<TokenModel> {
    return this._http.post<TokenModel>(
      this.baseApi + '/Driver/login-driver',
      model
    );
  }

  createNewToken(refreshToken: string): Observable<any> {
    return this._http.get<TokenModel>(
      `${this.baseApi}/Driver/refresh-token/${refreshToken}`
    );
  }

  getDriverWthId(idDriver: number): Observable<DriverModel> {
    return this._http.get<DriverModel>(
      `${this.baseApi}/Driver/${idDriver}/getDriverId`
    );
  }

  getDriverWthMail(email: string) {
    return this._http.get<DriverModel>(
      `${this.baseApi}/Driver/get-email/${email}`
    );
  }

  isLoggedIn() {
    return this.getToken != null;
  }

  getToken() {
    return localStorage.getItem('access-token') || '';
  }
  getRefreshToken() {
    return localStorage.getItem('refresh-token') || '';
  }
  getEmail() {
    return localStorage.getItem('email') || '';
  }
  setToken(token: string) {
    return localStorage.setItem('access-token', token);
  }
  setRefreshToken(refreshToken: string) {
    return localStorage.setItem('refresh-token', refreshToken);
  }
  setEmail(email: string) {
    return localStorage.setItem('email', email);
  }
  saveToken(tokenData: any) {
    this.setToken(tokenData.accessToken);
    this.setRefreshToken(tokenData.refreshToken);
    this.setEmail(tokenData.email);
  }
}
