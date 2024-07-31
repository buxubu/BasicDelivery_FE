import { Component, OnInit, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { OrderService } from '../../../services/order.service';
import { StatusOrder } from '../../../models/StatusOrder';
import { FormBuilder, Validators } from '@angular/forms';
import { ChangeOrderViewModel } from '../../../models/ChangeOrderViewModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-order-change-status',
  templateUrl: './driver-order-change-status.component.html',
  styleUrl: './driver-order-change-status.component.scss',
})
export class DriverOrderChangeStatusComponent implements OnInit {
  _ref = inject(MatDialogRef<DriverOrderChangeStatusComponent>);
  _data = inject(MAT_DIALOG_DATA);
  _orderServices = inject(OrderService);
  _formBuilder = inject(FormBuilder);
  _router = inject(Router)

  changeStatusForm = this._formBuilder.group({
    orderId: [0, Validators.required],
    status: [0, Validators.required],
    location: ['', Validators.required],
    reason: ['', Validators.required],
  });

  inputData: any;

  editData:any

  statusModel: StatusOrder[] = [];

  ngOnInit(): void {
    this.inputData = this._data;
    this._orderServices.getStatus().subscribe((re) => {
      this.statusModel = re;
    });

    if(this.inputData.idOrder > 0){
      this.setStatusOrder(this.inputData.idOrder)
    }


  }

  setStatusOrder(idOrder: number){
    this._orderServices.getOrder(idOrder).subscribe(item=>{
      this.editData = item

      this.changeStatusForm.patchValue({
        orderId: idOrder,
        status: this.editData.status,
        location: this.editData.location
      })
    })
  }

  UpdateChangeStatusOrder(){
    const model = this.getChangeOrderViewModel();
    console.log(model)
    if(this.changeStatusForm.valid){
      this._orderServices.updateStatus(model).subscribe(re=>{
        window.location.reload()
      })
    }else{
      alert("please input all")
    }

  }

  closePopup() {
    this._ref.close();
  }

  getChangeOrderViewModel(): ChangeOrderViewModel{
    const formValue = this.changeStatusForm.value;
    return <ChangeOrderViewModel>{
      orderId: formValue.orderId,
      location: formValue.location,
      reason: formValue.reason,
      status: formValue.status
    }
  }
}
