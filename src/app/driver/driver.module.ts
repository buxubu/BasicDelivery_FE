import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import { DriverRoutingModule } from './driver-routing.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DriverOrderComponent } from './components/driver-order/driver-order.component';
import { DriverSidenavComponent } from './components/driver-layout/driver-sidenav/driver-sidenav.component';
import { DriverHeaderComponent } from './components/driver-layout/driver-header/driver-header.component';
import { DriverHeaderTagComponent } from './components/driver-layout/driver-header-tag/driver-header-tag.component';
import { DriverOrderAcceptedComponent } from './components/driver-order-accepted/driver-order-accepted.component';
import { DriverOrderChangeStatusComponent } from './components/driver-order-change-status/driver-order-change-status.component';
import { VndPipe } from '../share/temp-convertor.pipe';
import { DongPipe } from '../share/temp-convertor1.pipe';
import { DriverOrderHistoryComponent } from './components/driver-order-history/driver-order-history.component';
import { DriverOrderReportComponent } from './components/driver-order-report/driver-order-report.component';
import { DriverOrderCompletedComponent } from './components/driver-order-completed/driver-order-completed.component';



@NgModule({
  declarations: [
    DriverComponent,
    DriverOrderComponent,
    DriverSidenavComponent,
    DriverHeaderComponent,
    DriverHeaderTagComponent,
    DriverOrderAcceptedComponent,
    DriverOrderChangeStatusComponent,
    DongPipe,
    DriverOrderHistoryComponent,
    DriverOrderReportComponent,
    DriverOrderCompletedComponent

  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class DriverModule { }
