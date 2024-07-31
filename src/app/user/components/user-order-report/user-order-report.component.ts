import { Component, IterableDiffers } from '@angular/core';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-user-order-report',
  templateUrl: './user-order-report.component.html',
  styleUrl: './user-order-report.component.scss',
})
export class UserOrderReportComponent {
  /**
   *
   */
  constructor(private orderServices: OrderService) {}
  orderUser: number = 0;
  orderUserCreated: number = 0;
  orderUserCompleted: number = 0;
  orderUserCancel: number = 0;
  orderUserLost: number = 0;
  orderUserFail: number = 0;
  orderUserDeliver: number = 0;

  orderCompletedMoney: number = 0;
  orderDeliveryMoney: number = 0;
  orderCancelyMoney: number = 0;
  orderLostMoney: number = 0;
  orderFailMoney: number = 0;
  orderMoney: number = 0;

  ngOnInit(): void {
    this.orderServices.getOrderUser().subscribe((re) => {
      this.orderUser = re.length;
    });
    //lay ra tien thu ho cac don da hoan thanh
    this.orderServices.getOrderCompleted().subscribe((re) => {
      re.forEach((item) => {
        this.orderCompletedMoney += item.totalCod ?? 0;
      });
    });

    //lay ra tien se nhan khi giao xonng
    this.orderServices.getOrderDeliver().subscribe((re) => {
      re.forEach((item) => {
        this.orderDeliveryMoney += item.totalCod ?? 0;
      });
    });

    //lay ra tien cac don huy không nhận được
    this.orderServices.getOrderCancel().subscribe((re) => {
      re.forEach((item) => {
        this.orderCancelyMoney += item.totalCod ?? 0;
      });
    });

    //lay ra tien cac đơn thất lạc ko nhận đc
    this.orderServices.getOrderLost().subscribe((re) => {
      re.forEach((item) => {
        this.orderLostMoney += item.totalCod ?? 0;
      });
    });

    //lấy ra tien cac đon giao thất bại
    this.orderServices.getOrderFail().subscribe((re) => {
      re.forEach((item) => {
        this.orderFailMoney += item.totalCod ?? 0;
      });
    });

    this.orderServices.getOrderDeliver().subscribe((re) => {
      this.orderUserDeliver = re.length;
    });
    this.orderServices.getOrderCreated().subscribe((re) => {
      this.orderUserCreated = re.length;
    });
    this.orderServices.getOrderCompleted().subscribe((re) => {
      this.orderUserCompleted = re.length;
    });
    this.orderServices.getOrderCancel().subscribe((re) => {
      this.orderUserCancel = re.length;
    });
    this.orderServices.getOrderLost().subscribe((re) => {
      this.orderUserLost = re.length;
    });
    this.orderServices.getOrderFail().subscribe((re) => {
      this.orderUserFail = re.length;
    });
  }
}
