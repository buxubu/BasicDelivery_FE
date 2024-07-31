import { Component } from '@angular/core';
import { OrderModel } from '../../../models/OrderModel';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-driver-order-completed',
  templateUrl: './driver-order-completed.component.html',
  styleUrl: './driver-order-completed.component.scss',
})
export class DriverOrderCompletedComponent {
  lstOrder: OrderModel[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrderDriverCompleted().subscribe((re) => {
      this.lstOrder = re;
    });
  }
}
