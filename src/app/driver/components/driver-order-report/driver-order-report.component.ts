import { Component } from '@angular/core';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-driver-order-report',
  templateUrl: './driver-order-report.component.html',
  styleUrl: './driver-order-report.component.scss',
})
export class DriverOrderReportComponent {
  constructor(private orderServices: OrderService) {}
  orderDriver: number = 0;
  orderDriverAccepted: number = 0;
  orderDriverCompleted: number = 0;

  orderCompletedMoney: number = 0;
  orderDeliveryMoney: number = 0;
  orderMoney: number = 0;

  ngOnInit(): void {
    this.orderServices.getOrderDriver().subscribe((re) => {
      this.orderDriver = re.length;
    });

    //lay ra tien cac don da hoan thanh cua tai xe
    this.orderServices.getOrderDriverCompleted().subscribe((re) => {
      re.forEach((item) => {
        this.orderCompletedMoney += item.shipCost ?? 0;
      });
    });

    //lay ra tien cac don chua hoan thanh
    this.orderServices.getOrderDriverAccepted().subscribe((re) => {
      re.forEach((item) => {
        this.orderDeliveryMoney += item.shipCost ?? 0;
      });
    });

    this.orderServices.getOrderDriverCompleted().subscribe((re) => {
      this.orderDriverCompleted = re.length;
    });

    this.orderServices.getOrderDriverAccepted().subscribe((re) => {
      this.orderDriverAccepted = re.length;
    });
  }
}
