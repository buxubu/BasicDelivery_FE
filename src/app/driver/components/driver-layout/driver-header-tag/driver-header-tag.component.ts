import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../../services/order.service';

@Component({
  selector: 'app-driver-header-tag',
  templateUrl: './driver-header-tag.component.html',
  styleUrl: './driver-header-tag.component.scss',
})
export class DriverHeaderTagComponent implements OnInit {
  /**
   *
   */
  constructor(private orderServices: OrderService) {}
  orderDriver: number = 0;
  orderDriverAccepted: number = 0;
  orderDriverCompleted: number = 0;

  ngOnInit(): void {
    this.orderServices.getOrderDriver().subscribe((re) => {
      this.orderDriver = re.length;
    });

    this.orderServices.getOrderDriverCompleted().subscribe((re) => {
      this.orderDriverCompleted = re.length;
    });

    this.orderServices.getOrderDriverAccepted().subscribe((re) => {
      this.orderDriverAccepted = re.length;
    });
  }
}
