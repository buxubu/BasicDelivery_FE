import { Component } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { OrderModel } from '../../../models/OrderModel';

@Component({
  selector: 'app-user-order-fail',
  templateUrl: './user-order-fail.component.html',
  styleUrl: './user-order-fail.component.scss'
})
export class UserOrderFailComponent {
  lstOrder: OrderModel[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrderFail().subscribe(re =>{
      console.log(re)
      this.lstOrder = re
    })
  }
}
