import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../services/order.service';

@Component({
  selector: 'app-user-header-tag',
  templateUrl: './user-header-tag.component.html',
  styleUrl: './user-header-tag.component.scss',
})
export class UserHeaderTagComponent implements OnInit {
  /**
   *
   */
  constructor(private orderServices: OrderService) {}
  orderUser: number = 0;
  orderUserDeliver: number = 0;
  orderUserCreated: number = 0;
  orderUserCompleted: number = 0;
  orderUserCancel: number = 0;
  orderUserLost: number = 0;
  orderUserFail: number = 0;

  ngOnInit(): void {
    this.orderServices.getOrderUser().subscribe((re) => {
      this.orderUser = re.length;
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
