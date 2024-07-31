import { Component, OnInit, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderModel } from '../../../models/OrderModel';
import { OrderDetailModel } from '../../../models/OrderDetailModel';
import { OrderModelView } from '../../../models/OrderModelView';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-edit-order',
  templateUrl: './user-edit-order.component.html',
  styleUrl: './user-edit-order.component.scss',
})
export class UserEditOrderComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private orderServices: OrderService,
    private authServices: AuthService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  router = inject(Router);

  true = true as boolean;
  false = false as boolean;
  formOrderDetail?: FormArray;
  editData: any;

  objOrder = this.formBuilder.group({
    orderId: [0],
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

    orderDetails: this.formBuilder.array([
      // this.formBuilder.group({
      //   orderDetailId: [0],
      //   orderId: [null],
      //   imagesProduct: [null],
      //   uploadImagesProduct: [null],
      //   gam: [null],
      //   quantity: [null],
      //   productId: [null],
      //   productName: [''],
      // }),
    ]),
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      const idOrder = Number(data.get('idOrder'));
      if (idOrder) {
        this.orderServices.getOrder(idOrder).subscribe((re) => {
          this.editData = re;

          if (this.editData.orderDetails != null) {
            // for (let i = 0; i < this.editData.orderDetails.length; i++) {
            this.addOrderDetail(this.editData.orderDetails);
            // }
          }

          this.objOrder.patchValue({
            orderId: idOrder,
            userId: this.editData.userId,
            receiverAddress: this.editData.receiverAddress,
            receiverDistrict: this.editData.receiverDistrict,
            receiverWard: this.editData.receiverWard,
            receiverName: this.editData.receiverName,
            receiverPhone: this.editData.receiverPhone,
            shipCost: this.editData.shipCost,
            totalMoney: this.editData.totalMoney,
            paymentMethod: this.editData.paymentMethod,
            status: this.editData.status,
            location: this.editData.location,
            driverAcceptAt: this.editData.driverAcceptAt,
            completeAt: this.editData.completeAt,
            userNote: this.editData.userNote,
            deliveryNote: this.editData.deliveryNote,
            totalGamPackage: this.editData.totalGamPackage,
            imagesPackages: this.editData.imagesPackages,
            widePackage: this.editData.widePackage,
            heightPackage: this.editData.heightPackage,
            longPackage: this.editData.longPackage,
            totalPriceProduct: this.editData.totalPriceProduct,
            totalCod: this.editData.totalCod,
            active: this.editData.active,
            driverId: this.editData.driverId,
            userPhone: this.editData.userPhone,
            userName: this.editData.userName,
            userAddress: this.editData.userAddress,
            estimatedDeliveryDate: this.editData.estimatedDeliveryDate,
            failedDeliveryMoney: this.editData.failedDeliveryMoney,
            requestSeeProduct: this.editData.requestSeeProduct,
            statusDetail: this.editData.statusDetail,

            orderDetails: this.editData.orderDetails,
          });
          console.log(this.objOrder.value);
        });
      } else {
        alert('Not get idOrder !');
      }
    });
  }

  Update() {
    if (this.objOrder.valid) {
      const modelOrder = this.getOrderModel();

      console.log(modelOrder);
      this.orderServices
        .update(modelOrder, modelOrder.orderId)
        .subscribe((re) => {
          this.router.navigate(['order']);
          this.toastr.success('Tạo đơn hàng thành công');
        });
    } else {
      alert('objOrder form not valid');
    }
  }

  get orderDetails() {
    return this.objOrder.get('orderDetails') as FormArray;
  }

  addOrderDetail(data: any[]) {
    data.forEach((item) => {
      const orderDetailGroup = this.formBuilder.group({
        orderDetailId: [item.orderDetailId],
        orderId: [item.orderId],
        imagesProduct: [item.imagesProduct],
        gam: [item.gam],
        quantity: [item.quantity],
        productId: [item.productId],
        productName: [item.productName, Validators.required], // Make sure to include validators if necessary
      });
      this.orderDetails.push(orderDetailGroup);
    });
  }

  getOrderModelView(): OrderModelView {
    const formValue = this.objOrder.value;
    return <OrderModelView>{
      orderId: formValue.orderId,
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

      orderDetails: formValue.orderDetails,
    };
  }

  getOrderModel(): OrderModel {
    const formValue = this.objOrder.value;
    return <OrderModel>{
      orderId: formValue.orderId,
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
      uploadImagesPackage: formValue.uploadImagesPackage,
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

      listOrderDetail: formValue.orderDetails,
    };
  }
}
