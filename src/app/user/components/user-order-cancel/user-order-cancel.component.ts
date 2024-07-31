import { Component } from '@angular/core';
import { OrderModel } from '../../../models/OrderModel';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-user-order-cancel',
  templateUrl: './user-order-cancel.component.html',
  styleUrl: './user-order-cancel.component.scss'
})
export class UserOrderCancelComponent {
  lstOrder: OrderModel[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrderCancel().subscribe(re =>{
      console.log(re)
      this.lstOrder = re
    })
  }
}
