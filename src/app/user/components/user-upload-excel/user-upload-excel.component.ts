import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserModel } from '../../../models/UserModel';
import { OrderService } from '../../../services/order.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-upload-excel',
  templateUrl: './user-upload-excel.component.html',
  styleUrl: './user-upload-excel.component.scss',
})
export class UserUploadExcelComponent implements OnInit {
  /**
   *
   */
  constructor(private toastr: ToastrService) {}

  _router = inject(Router);
  _authServices = inject(AuthService);
  _orderServices = inject(OrderService);
  _http = inject(HttpClient);

  userModel?: UserModel;

  file: any;

  ngOnInit(): void {
    const email = this._authServices.getEmail();
    this._authServices.getUserWthMail(email).subscribe((re) => {
      this.userModel = re;
    });
  }

  getFile(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log('file', this.file);
    }
  }

  UpLoad() {
    const getTypeExcel = this.file.name.split('.');
    if (
      getTypeExcel[1] == 'xls' ||
      getTypeExcel[1] == 'xlsx' ||
      getTypeExcel[1] == 'xlsm'
    ) {
      const formData = new FormData();
      formData.append('file', this.file);
      this._http
        .post('https://localhost:7130/api/Order/excel-order', formData)
        .subscribe((re) => {
          this._router.navigate(['/user/order']);
          this.toastr.success('Lên đơn excel thành công.');
        });
    } else {
      this.toastr.error(
        'Type excel not valid, please correct .xls, .xlsx, .xlsm'
      );
    }
  }
  // OnchangesFile(event: any) {
  //   if(event.target.files.length> 0){
  //     const fileExcel = event.target.files[0];
  //     const formData = new FormData();
  //     formData.append('file', fileExcel)

  //   }
  // }
}
