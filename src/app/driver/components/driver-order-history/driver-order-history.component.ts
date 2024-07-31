import { Component } from '@angular/core';
import { HistoryViewModel } from '../../../models/HistoryViewModel';
import { HistoryService } from '../../../services/history.service';

@Component({
  selector: 'app-driver-order-history',
  templateUrl: './driver-order-history.component.html',
  styleUrl: './driver-order-history.component.scss',
})
export class DriverOrderHistoryComponent {
  lstHis: HistoryViewModel[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.historyService.getHistoriesDriver().subscribe((re) => {
      this.lstHis = re;
    });
  }
}
