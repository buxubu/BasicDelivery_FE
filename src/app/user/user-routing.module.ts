import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserOrderComponent } from './components/user-order/user-order.component';
import { guardGuard } from '../share/guard.guard';
import { UserComponent } from './user.component';
import { OrderService } from '../services/order.service';
import { UserInsertOrderComponent } from './components/user-insert-order/user-insert-order.component';
import path from 'node:path';
import { UserEditOrderComponent } from './components/user-edit-order/user-edit-order.component';
import { UserUploadExcelComponent } from './components/user-upload-excel/user-upload-excel.component';
import { UserStatusOrderComponent } from './components/user-status-order/user-status-order.component';
import { UserStatusOrderDetailComponent } from './components/user-status-order-detail/user-status-order-detail.component';
import { UserOrderCreatedComponent } from './components/user-order-created/user-order-created.component';
import { UserOrderCompletedComponent } from './components/user-order-completed/user-order-completed.component';
import { UserOrderCancelComponent } from './components/user-order-cancel/user-order-cancel.component';
import { UserOrderFailComponent } from './components/user-order-fail/user-order-fail.component';
import { UserOrderLostComponent } from './components/user-order-lost/user-order-lost.component';
import { UserOrderReportComponent } from './components/user-order-report/user-order-report.component';
import { UserChatComponent } from './components/user-chat/user-chat.component';
import { UserOrderDeliverComponent } from './components/user-order-deliver/user-order-deliver.component';
import { UserOrderHistoryComponent } from './components/user-order-history/user-order-history.component';
import { UserOrderReportMoneyComponent } from './components/user-order-report-money/user-order-report-money.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'user/order', pathMatch: 'full' },
      {
        path: 'order',
        component: UserOrderComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'order/insert-order',
        component: UserInsertOrderComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'order/:idOrder/order-edit',
        component: UserEditOrderComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'order/excel-order',
        component: UserUploadExcelComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'order/status-order',
        component: UserStatusOrderComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'order/:idOrder/order-detail',
        component: UserStatusOrderDetailComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'order/order-created',
        component: UserOrderCreatedComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'order/order-completed',
        component: UserOrderCompletedComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'order/order-cancel',
        component: UserOrderCancelComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'order/order-fail',
        component: UserOrderFailComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'order/order-lost',
        component: UserOrderLostComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'order/order-report',
        component: UserOrderReportComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'order/order-deliver',
        component: UserOrderDeliverComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'user-chat',
        component: UserChatComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'user-history',
        component: UserOrderHistoryComponent,
        canActivate: [guardGuard],
      },
      {
        path: 'user-reportMoney',
        component: UserOrderReportMoneyComponent,
        canActivate: [guardGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
