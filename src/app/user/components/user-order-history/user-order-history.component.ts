import { Component } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { HistoryViewModel } from '../../../models/HistoryViewModel';
import { HistoryService } from '../../../services/history.service';

@Component({
  selector: 'app-user-order-history',
  templateUrl: './user-order-history.component.html',
  styleUrl: './user-order-history.component.scss',
})
export class UserOrderHistoryComponent {
  lstHis: HistoryViewModel[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.historyService.getHistories().subscribe((re) => {
      this.lstHis = re;
    });
  }
}
