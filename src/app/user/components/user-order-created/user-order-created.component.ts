import { Component, inject } from '@angular/core';
import { OrderModel } from '../../../models/OrderModel';
import { OrderService } from '../../../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-order-created',
  templateUrl: './user-order-created.component.html',
  styleUrl: './user-order-created.component.scss',
})
export class UserOrderCreatedComponent {
  lstOrder: OrderModel[] = [];
  router = inject(Router);

  constructor(
    private orderService: OrderService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.orderService.getOrderCreated().subscribe((re) => {
      console.log(re);
      this.lstOrder = re;
    });
  }

  cancelOrder(orderId: number) {
    this.orderService.cancel(orderId).subscribe();
    window.location.reload;
    this.toastr.success('Xóa đơn hàng thành công');
  }
}
