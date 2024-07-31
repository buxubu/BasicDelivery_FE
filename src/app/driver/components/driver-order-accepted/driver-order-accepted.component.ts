import { Component, EventEmitter, Output, inject } from '@angular/core';
import { OrderModel } from '../../../models/OrderModel';
import { OrderService } from '../../../services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { DriverOrderChangeStatusComponent } from '../driver-order-change-status/driver-order-change-status.component';

@Component({
  selector: 'app-driver-order-accepted',
  templateUrl: './driver-order-accepted.component.html',
  styleUrl: './driver-order-accepted.component.scss',
})
export class DriverOrderAcceptedComponent {
  _dialog = inject(MatDialog);

  lstOrder: OrderModel[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrderDriverAccepted().subscribe((re) => {
      this.lstOrder = re;
    });
  }

  ChangeStatus(idOrder: number) {
    this.openPopup(idOrder, 'Change Status Order');
  }

  openPopup(idOrder: number, title: string) {
    this._dialog.open(DriverOrderChangeStatusComponent, {
      width: '60%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      data: {
        title: title,
        idOrder: idOrder,
      },
    });
  }
}
