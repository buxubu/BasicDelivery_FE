import { Component } from '@angular/core';
import { OrderModel } from '../../../models/OrderModel';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-user-order-completed',
  templateUrl: './user-order-completed.component.html',
  styleUrl: './user-order-completed.component.scss'
})
export class UserOrderCompletedComponent {
  lstOrder: OrderModel[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrderCompleted().subscribe(re =>{
      console.log(re)
      this.lstOrder = re
    })
  }
}
