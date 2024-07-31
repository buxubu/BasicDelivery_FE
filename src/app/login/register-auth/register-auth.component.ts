import { Component, inject } from '@angular/core';
import { TokenModel } from '../../models/TokenModel';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserViewModel } from '../../models/UserViewModel';
import { error } from 'node:console';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-auth',
  templateUrl: './register-auth.component.html',
  styleUrl: './register-auth.component.scss',
})
export class RegisterAuthComponent {
  userToken: TokenModel | undefined;
  hide: boolean = true;
  file: any;
  isActive = true;

  router = inject(Router);

  constructor(
    private formBuilder: FormBuilder,
    private authServices: AuthService,
    private toastr: ToastrService
  ) {}

  objUserRegister = this.formBuilder.group({
    userId: [0],
    fullName: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    avatar: [''],
    uploadAvatar: [File],
    address: ['', Validators.required],
    passwordHash: [
      '',
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ],
    acceptPassword: [
      '',
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ],
    salt: [''],
    active: [true],
    createDate: [new Date()],
    lastLogin: [new Date()],
    role: [''],
    phone: ['', Validators.required],
  });

  getFile(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log('file', this.file);
    }
  }

  registerUser() {
    try {
      const model = this.getUserViewModel();
      const getTypeImg = this.file.name.split('.');
      if (
        getTypeImg[1] == 'jpg' ||
        getTypeImg[1] == 'jpeg' ||
        getTypeImg[1] == 'png' ||
        getTypeImg[1] == 'gif'
      ) {
        // if (
        //   this.objUserRegister.value.passwordHash ==
        //   this.objUserRegister.value.acceptPassword
        // ) {
        const formData = new FormData();
        formData.append('userId', model.userId.toString());
        formData.append('fullName', model.fullName ?? '');
        formData.append('email', model.email ?? '');
        formData.append('avatar', model.avatar ?? '');
        formData.append('uploadAvatar', model.uploadAvatar ?? '');
        formData.append('address', model.address ?? '');
        formData.append('passwordHash', model.passwordHash ?? '');
        formData.append('salt', model.salt ?? '');
        formData.append('active', model.active ? 'true' : 'false');
        formData.append('role', model.role ?? '');
        formData.append('phone', model.phone ?? '');

        this.authServices.userRegister(formData).subscribe();
        this.toastr.success('Đăng ký người dùng thành công');
        this.router.navigate(['/login-user']);
        // } else {
        //   alert('Xác nhận mật khẩu không trùng với mật khẩu');
        // }
      } else {
        alert('Không đúng định dạng hình ảnh!!!');
      }
    } catch (error) {
      alert(error);
    }
  }

  get e() {
    return this.objUserRegister.controls;
  }

  getUserViewModel(): UserViewModel {
    const formValue = this.objUserRegister.value;
    return <UserViewModel>{
      userId: formValue.userId,
      fullName: formValue.fullName,
      email: formValue.email,
      avatar: formValue.avatar,
      uploadAvatar: this.file,
      address: formValue.address,
      passwordHash: formValue.passwordHash,
      salt: formValue.salt,
      active: formValue.active,
      createDate: formValue.createDate,
      lastLogin: formValue.lastLogin,
      role: formValue.role,
      phone: formValue.phone,
    };
  }
}
