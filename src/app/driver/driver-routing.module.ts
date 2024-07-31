import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver.component';
import { DriverOrderComponent } from './components/driver-order/driver-order.component';
import { DriverOrderAcceptedComponent } from './components/driver-order-accepted/driver-order-accepted.component';
import { DriverOrderHistoryComponent } from './components/driver-order-history/driver-order-history.component';
import { DriverOrderReportComponent } from './components/driver-order-report/driver-order-report.component';
import { DriverOrderCompletedComponent } from './components/driver-order-completed/driver-order-completed.component';

const routes: Routes = [
  {
    path: '',
    component: DriverComponent,
    children: [
      { path: '', redirectTo: 'driver/order', pathMatch: 'full' },
      {
        path: 'order',
        component: DriverOrderComponent,
        // canActivate: [guardGuard],
      },
      {
        path: 'order/deliver',
        component: DriverOrderAcceptedComponent,
        // canActivate: [guardGuard],
      },
      {
        path: 'order/driver-history',
        component: DriverOrderHistoryComponent,
        // canActivate: [guardGuard],
      },
      {
        path: 'order/driver-report',
        component: DriverOrderReportComponent,
        // canActivate: [guardGuard],
      },
      {
        path: 'order/completed',
        component: DriverOrderCompletedComponent,
        // canActivate: [guardGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverRoutingModule {}
