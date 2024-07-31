import { Component, OnInit, inject } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { OrderModel } from '../../../models/OrderModel';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrl: './user-order.component.scss',
})
export class UserOrderComponent implements OnInit {
  /**
   *
   */
  lstOrder: OrderModel[] = [];
  router = inject(Router);
  constructor(
    private orderService: OrderService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.orderService.getOrderUser().subscribe((re) => {
      console.log(re);
      this.lstOrder = re;
    });
  }

  cancelOrder(orderId: number) {
    this.orderService.cancel(orderId).subscribe();
    this.router.navigate(['/user/order/order-created']);
    this.toastr.success('Xóa đơn hàng thành công');
  }
}
