import { Component } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { OrderModel } from '../../../models/OrderModel';

@Component({
  selector: 'app-user-order-deliver',
  templateUrl: './user-order-deliver.component.html',
  styleUrl: './user-order-deliver.component.scss',
})
export class UserOrderDeliverComponent {
  lstOrder: OrderModel[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrderDeliver().subscribe((re) => {
      console.log(re);
      this.lstOrder = re;
    });
  }
}
