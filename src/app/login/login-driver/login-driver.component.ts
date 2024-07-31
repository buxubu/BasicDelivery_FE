import { Component, inject } from '@angular/core';
import { TokenModel } from '../../models/TokenModel';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginModel } from '../../models/LoginModel';
import { DriverService } from '../../services/driver.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-driver',
  templateUrl: './login-driver.component.html',
  styleUrl: './login-driver.component.scss',
})
export class LoginDriverComponent {
  driverToken: TokenModel | undefined;
  hide: boolean = true;
  id: string = '';
  apiErrorMessage: string[] = [];

  router = inject(Router);

  constructor(
    private formBuilder: FormBuilder,
    private driverServices: DriverService,
    private toastr: ToastrService
  ) {}

  // ngOnInit(): void {
  //   // if(this.userToken){
  //     this.Login()
  //     this.driverServices.setToken(this.userToken?.accessToken ?? '');
  //     this.driverServices.setRefreshToken(this.userToken?.refreshToken ??'');
  //     this.driverServices.setEmail(this.userToken?.email ?? '');

  //   // }

  // }

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

        this.driverServices.loginDriver(model).subscribe({
          next: (re) => {
            console.log(re);
            this.driverToken = re;
            // set token and refreshToken
            this.driverServices.setToken(re.accessToken);
            this.driverServices.setRefreshToken(re.refreshToken);
            this.driverServices.setEmail(re.email);
            // check mail router link
            this.driverServices
              .getDriverWthMail(re.email)
              .subscribe((reponse) => {
                if (reponse.role == 'Driver') {
                  this.router.navigate(['/driver/order']);
                }
              });
            this.toastr.success('Đăng nhập thành công');
          },
          error: (error) => {
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
