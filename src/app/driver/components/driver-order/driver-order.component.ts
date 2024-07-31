import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { OrderModel } from '../../../models/OrderModel';

@Component({
  selector: 'app-driver-order',
  templateUrl: './driver-order.component.html',
  styleUrl: './driver-order.component.scss'
})
export class DriverOrderComponent implements OnInit{

  lstOrder: OrderModel[] = [];


  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrderDriver().subscribe(re =>{
      this.lstOrder = re
    })
  }

  acceptOrder(idOrder: number){
    this.orderService.driverAccept(idOrder).subscribe(re=>{
      window.location.reload();
    })
  }
}
