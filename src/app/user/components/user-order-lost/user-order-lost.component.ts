import { Component } from '@angular/core';
import { OrderModel } from '../../../models/OrderModel';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-user-order-lost',
  templateUrl: './user-order-lost.component.html',
  styleUrl: './user-order-lost.component.scss'
})
export class UserOrderLostComponent {
  lstOrder: OrderModel[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrderLost().subscribe(re =>{
      console.log(re)
      this.lstOrder = re
    })
  }
}
