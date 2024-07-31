import { Component } from '@angular/core';
import { OrderModel } from '../../../models/OrderModel';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-user-status-order',
  templateUrl: './user-status-order.component.html',
  styleUrl: './user-status-order.component.scss'
})
export class UserStatusOrderComponent {

  lstOrder: OrderModel[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrderUser().subscribe((re) => {
      this.lstOrder = re;
    });
  }


}
