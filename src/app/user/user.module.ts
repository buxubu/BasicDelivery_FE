import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserHeaderComponent } from './components/user-layout/user-header/user-header.component';
import { UserFooterComponent } from './components/user-layout/user-footer/user-footer.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { UserOrderComponent } from './components/user-order/user-order.component';
import { SidenavComponent } from './components/user-layout/sidenav/sidenav.component';
import { UserHeaderTagComponent } from './components/user-layout/user-header-tag/user-header-tag.component';
import { UserInsertOrderComponent } from './components/user-insert-order/user-insert-order.component';
import { UserEditOrderComponent } from './components/user-edit-order/user-edit-order.component';
import { UserUploadExcelComponent } from './components/user-upload-excel/user-upload-excel.component';
import { UserStatusOrderComponent } from './components/user-status-order/user-status-order.component';
import { UserStatusOrderDetailComponent } from './components/user-status-order-detail/user-status-order-detail.component';
import { UserOrderCreatedComponent } from './components/user-order-created/user-order-created.component';
import { VndPipe } from '../share/temp-convertor.pipe';
import { UserOrderCompletedComponent } from './components/user-order-completed/user-order-completed.component';
import { UserOrderCancelComponent } from './components/user-order-cancel/user-order-cancel.component';
import { UserOrderLostComponent } from './components/user-order-lost/user-order-lost.component';
import { UserOrderFailComponent } from './components/user-order-fail/user-order-fail.component';
import { UserOrderReportComponent } from './components/user-order-report/user-order-report.component';
import { UserSearchOrderComponent } from './components/user-search-order/user-search-order.component';
import { UserChatComponent } from './components/user-chat/user-chat.component';
import { UserOrderDeliverComponent } from './components/user-order-deliver/user-order-deliver.component';
import { UserOrderHistoryComponent } from './components/user-order-history/user-order-history.component';
import { UserOrderReportMoneyComponent } from './components/user-order-report-money/user-order-report-money.component';
import { UserOrderSearchComponent } from './components/user-order-search/user-order-search.component';

@NgModule({
  declarations: [
    UserComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserOrderComponent,
    SidenavComponent,
    UserHeaderTagComponent,
    UserInsertOrderComponent,
    UserEditOrderComponent,
    UserUploadExcelComponent,
    UserStatusOrderComponent,
    UserStatusOrderDetailComponent,
    UserOrderCreatedComponent,
    UserOrderCompletedComponent,
    UserOrderCancelComponent,
    UserOrderLostComponent,
    UserOrderFailComponent,
    VndPipe,
    UserOrderReportComponent,
    UserSearchOrderComponent,
    UserChatComponent,
    UserOrderDeliverComponent,
    UserOrderHistoryComponent,
    UserOrderReportMoneyComponent,
    UserOrderSearchComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [OrderService],
})
export class UserModule {}
