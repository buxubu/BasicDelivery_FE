import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { LoginModel } from '../models/LoginModel';
import { TokenModel } from '../models/TokenModel';
import { Observable, Subject, map } from 'rxjs';
import { UserModel } from '../models/UserModel';
import { UserViewModel } from '../models/UserViewModel';
import { blob } from 'stream/consumers';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly baseApi: string = environment.baseUrl;
  /**
   *
   */
  constructor(private _http: HttpClient) {}

  userRegister(model: FormData): Observable<string> {
    return this._http.post<string>(this.baseApi + '/User/register-user', model);
  }

  loginUser(model: LoginModel): Observable<TokenModel> {
    return this._http.post<TokenModel>(
      this.baseApi + '/User/login-user',
      model
    );
  }

  createNewToken(refreshToken: string): Observable<any> {
    return this._http.get<TokenModel>(
      `${this.baseApi}/user/refresh-token/${refreshToken}`
    );
  }

  getUserWthMail(email: string) {
    return this._http.get<UserModel>(`${this.baseApi}/User/get-email/${email}`);
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
