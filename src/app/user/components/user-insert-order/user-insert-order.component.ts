import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { OrderModel } from '../../../models/OrderModel';
import { OrderService } from '../../../services/order.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-insert-order',
  templateUrl: './user-insert-order.component.html',
  styleUrl: './user-insert-order.component.scss',
})
export class UserInsertOrderComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private orderServices: OrderService,
    private authServices: AuthService,
    private toastr: ToastrService
  ) {}

  router = inject(Router);

  true = true as boolean;
  false = false as boolean;

  objOrder = this.formBuilder.group({
    // orderId: [0],
    userId: [0],
    receiverAddress: ['', [Validators.required]],
    receiverDistrict: ['', [Validators.required]],
    receiverWard: ['', [Validators.required]],
    receiverName: ['', [Validators.required]],
    receiverPhone: ['', [Validators.required]],
    shipCost: [0],
    totalMoney: [0],
    paymentMethod: [false],
    status: [0],
    location: [null],
    driverAcceptAt: [null],
    completeAt: [null],
    userNote: [''],
    deliveryNote: [null],
    totalGamPackage: [0],
    imagesPackages: [null],
    uploadImagesPackage: [null],
    widePackage: [0],
    heightPackage: [0],
    longPackage: [0],
    totalPriceProduct: [0],
    totalCod: [0],
    active: [false],
    driverId: [null],
    userPhone: [null],
    userName: [null],
    userAddress: [null],
    estimatedDeliveryDate: [null],
    failedDeliveryMoney: [0],
    requestSeeProduct: [false],
    statusDetail: [null],

    listOrderDetail: this.formBuilder.array([]),
  });

  ngOnInit(): void {}
  Insert() {
    if (this.objOrder.valid) {
      // const email = this.authServices.getEmail();
      // this.authServices.getUserWthMail(email).subscribe(re=>{

      const model = this.getOrderModel();
      // model.userId = re.userId
      // model.userName = re.fullName
      // model.userPhone = re.phone
      // model.userAddress = re.address
      // for (let i = 0; i < 3; i++){
      //   model.orderDetails[i].orderId = model.orderId
      // }
      this.orderServices.insert(model).subscribe((repon) => {
        this.router.navigate(['/user/order']);
        this.toastr.success('Tạo đơn hàng thành công');
        // });
      });
    } else {
      this.toastr.error('Vui lòng kiểm tra lại thông tin.');
    }
  }

  get listOrderDetail() {
    return this.objOrder.get('listOrderDetail') as FormArray;
  }

  deleteItem(index: number) {
    this.listOrderDetail.removeAt(index);
  }

  addItem() {
    this.listOrderDetail.push(
      this.formBuilder.group({
        orderDetailId: [0],
        orderId: [null],
        imagesProduct: [null],
        uploadImagesProduct: [null],
        gam: [null],
        quantity: [null],
        productId: [null],
        productName: [''],
      })
    );
  }

  getOrderModel(): OrderModel {
    const formValue = this.objOrder.value;
    return <OrderModel>{
      // orderId: formValue.orderId,
      userId: formValue.userId,
      receiverAddress: formValue.receiverAddress,
      receiverDistrict: formValue.receiverDistrict,
      receiverWard: formValue.receiverWard,
      receiverName: formValue.receiverName,
      receiverPhone: formValue.receiverPhone,
      shipCost: formValue.shipCost,
      totalMoney: formValue.totalMoney,
      paymentMethod: formValue.paymentMethod,
      status: formValue.status,
      location: formValue.location,
      driverAcceptAt: formValue.driverAcceptAt,
      completeAt: formValue.completeAt,
      userNote: formValue.userNote,
      deliveryNote: formValue.deliveryNote,
      totalGamPackage: formValue.totalGamPackage,
      imagesPackages: formValue.imagesPackages,
      widePackage: formValue.widePackage,
      heightPackage: formValue.heightPackage,
      longPackage: formValue.longPackage,
      totalPriceProduct: formValue.totalPriceProduct,
      totalCod: formValue.totalCod,
      active: formValue.active,
      driverId: formValue.driverId,
      userPhone: formValue.userPhone,
      userName: formValue.userName,
      userAddress: formValue.userAddress,
      estimatedDeliveryDate: formValue.estimatedDeliveryDate,
      failedDeliveryMoney: formValue.failedDeliveryMoney,
      requestSeeProduct: formValue.requestSeeProduct,
      statusDetail: formValue.statusDetail,

      listOrderDetail: formValue.listOrderDetail,
    };
  }
}
