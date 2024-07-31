import { Component, OnInit, inject } from '@angular/core';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  private orderServices = inject(OrderService);

  constructor() {

  }

  ngOnInit(): void {

  }
  title = 'BasicDelivery';



}
