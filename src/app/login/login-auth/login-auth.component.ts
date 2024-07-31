import { Component, Input, inject } from '@angular/core';
import { TokenModel } from '../../models/TokenModel';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginModel } from '../../models/LoginModel';
import { BehaviorSubject } from 'rxjs';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrl: './login-auth.component.scss',
})
export class LoginAuthComponent {
  userToken: TokenModel | undefined;
  hide: boolean = true;
  apiErrorMessage: string[] = [];
  err: string = '';

  router = inject(Router);

  constructor(
    private formBuilder: FormBuilder,
    private authServices: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    console.log(this.apiErrorMessage);
  }

  objLoginModel = this.formBuilder.group({
    Email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.minLength(15),
        Validators.maxLength(300),
      ],
    ],
    PasswordHash: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ],
    ],
  });

  Login() {
    try {
      this.apiErrorMessage = [];
      if (this.objLoginModel.valid) {
        // if (this.objLoginModel.valid) {
        const model = this.getLoginModel();

        this.authServices.loginUser(model).subscribe({
          next: (re) => {
            console.log(re);
            this.userToken = re;
            // set token and refreshToken
            this.authServices.setToken(re.accessToken);
            this.authServices.setRefreshToken(re.refreshToken);
            this.authServices.setEmail(re.email);
            // check mail router link
            this.authServices.getUserWthMail(re.email).subscribe((reponse) => {
              if (reponse.role == 'User') {
                this.router.navigate(['/user/order']);
              }
            });
            this.toastr.success('Đăng nhập thành công');
          },
          error: (error: HttpErrorResponse) => {
            this.apiErrorMessage.push('Tài khoản hoặc mật khẩu không đúng');
          },
        });
      } else {
        this.toastr.error('Vui lòng kiểm tra lại thông tin');
      }
    } catch (error) {
      alert(error);
    }
  }

  get e() {
    return this.objLoginModel.controls;
  }

  getLoginModel(): LoginModel {
    const formValue = this.objLoginModel.value;
    return <LoginModel>{
      Email: formValue.Email,
      PasswordHash: formValue.PasswordHash,
    };
  }
}
