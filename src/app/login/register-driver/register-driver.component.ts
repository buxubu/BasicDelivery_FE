import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { File } from 'buffer';
import { DriverService } from '../../services/driver.service';
import { DriverViewModel } from '../../models/DriverViewModel';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-driver',
  templateUrl: './register-driver.component.html',
  styleUrl: './register-driver.component.scss',
})
export class RegisterDriverComponent {
  constructor(
    private formBuilder: FormBuilder,
    private driverServices: DriverService,
    private toastr: ToastrService
  ) {}
  router = inject(Router);
  hide: boolean = true;
  fileImg: any;
  fileFont: any;
  fileBack: any;

  objDriverRegister = this.formBuilder.group({
    driverId: [0],
    fullName: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    avatar: [''],
    uploadAvatar: [File],
    address: ['', Validators.required],
    passwordHash: ['', Validators.required],
    acceptPassword: ['', Validators.required],
    salt: [''],
    active: [true],
    createDate: [new Date()],
    lastLogin: [new Date()],
    role: [''],
    phone: ['', Validators.required],
    reviewRate: [0],
    driverDetailId: [0],
    licenseNumber: [''],
    vehicleModel: [''],
    font: [''],
    uploadFont: [File],
    back: [''],
    uploadBack: [File],
  });

  getFileImg(event: any) {
    if (event.target.files.length > 0) {
      this.fileImg = event.target.files[0];
      console.warn('img', this.fileImg);
    }
  }

  getFileFont(event: any) {
    if (event.target.files.length > 0) {
      this.fileFont = event.target.files[0];
      console.warn('font', this.fileFont);
    }
  }
  getFileBack(event: any) {
    if (event.target.files.length > 0) {
      this.fileBack = event.target.files[0];
      console.warn('back', this.fileBack);
    }
  }

  registerDriver() {
    try {
      const model = this.getDriverViewModel();

      const getTypeImg = this.fileImg.name.split('.');
      const getTypeFont = this.fileImg.name.split('.');
      const getTypeBack = this.fileImg.name.split('.');
      if (
        getTypeImg[1] == 'jpg' ||
        getTypeImg[1] == 'jpeg' ||
        getTypeImg[1] == 'png' ||
        getTypeImg[1] == 'gif' ||
        getTypeFont[1] == 'jpg' ||
        getTypeFont[1] == 'jpeg' ||
        getTypeFont[1] == 'png' ||
        getTypeFont[1] == 'gif' ||
        getTypeBack[1] == 'jpg' ||
        getTypeBack[1] == 'jpeg' ||
        getTypeBack[1] == 'png' ||
        getTypeBack[1] == 'gif'
      ) {
        if (
          this.objDriverRegister.value.passwordHash ==
          this.objDriverRegister.value.acceptPassword
        ) {
          const formData = new FormData();
          formData.append('driverId', model.driverId.toString());
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
          formData.append('driverDetailId', model.driverDetailId.toString());
          formData.append('licenseNumber', model.licenseNumber ?? '');
          formData.append('vehicleModel', model.vehicleModel ?? '');
          formData.append('font', model.font ?? '');
          formData.append('uploadFont', model.uploadFont ?? '');
          formData.append('back', model.back ?? '');
          formData.append('uploadBack', model.uploadBack ?? '');

          this.driverServices.registerDriver(formData).subscribe();
          this.toastr.success('Đăng ký người dùng thành công');
          this.router.navigate(['/login-driver']);
        } else {
          alert('Xác nhận mật khẩu không trùng với mật khẩu');
        }
      } else {
        alert('Không đúng định dạng hình ảnh. Kiểm tra lại 3 file!!!');
      }
    } catch (error) {
      alert(error);
    }
  }

  get e() {
    return this.objDriverRegister.controls;
  }

  get f() {
    return this.objDriverRegister.get('driverDetail')?.value;
  }

  get driverDetail() {
    return this.objDriverRegister.get('driverDetail');
  }

  getDriverViewModel(): DriverViewModel {
    const formValue = this.objDriverRegister.value;
    return <DriverViewModel>{
      driverId: formValue.driverId,
      fullName: formValue.fullName,
      email: formValue.email,
      avatar: formValue.avatar,
      uploadAvatar: this.fileImg,
      address: formValue.address,
      passwordHash: formValue.passwordHash,
      salt: formValue.salt,
      active: formValue.active,
      createDate: formValue.createDate,
      lastLogin: formValue.lastLogin,
      role: formValue.role,
      phone: formValue.phone,
      reviewRate: formValue.reviewRate,
      driverDetailId: formValue.driverDetailId,
      licenseNumber: formValue.licenseNumber,
      vehicleModel: formValue.vehicleModel,
      font: formValue.font,
      uploadFont: this.fileFont,
      back: formValue.back,
      uploadBack: this.fileBack,
    };
  }
}
