import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { OrderModel } from '../models/OrderModel';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { OrderModelView } from '../models/OrderModelView';
import { DriverModel } from '../models/DriverModel';
import { StatusOrder } from '../models/StatusOrder';
import { ChangeOrderViewModel } from '../models/ChangeOrderViewModel';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private _http: HttpClient) {}

  public _behaviorSubject = new BehaviorSubject<Number>(0);

  readonly baseApi: string = environment.baseUrl;

  // public sendNumberOrderDriver(num: number) {
  //   this._behaviorSubject.next(num);
  // }

  // public sendNumberOrderDriverAccepted(num: number) {
  //   this._behaviorSubject.next(num);
  // }

  getOrderUser(): Observable<OrderModel[]> {
    return this._http.get<OrderModel[]>(
      this.baseApi + '/Order/get-all-order-user'
    );
  }

  getOrderCreated(): Observable<OrderModel[]> {
    return this._http.get<OrderModel[]>(
      this.baseApi + '/Order/get-all-order-created'
    );
  }

  getOrderDeliver(): Observable<OrderModel[]> {
    return this._http.get<OrderModel[]>(
      this.baseApi + '/Order/get-all-order-deliver'
    );
  }

  getOrderCompleted(): Observable<OrderModel[]> {
    return this._http.get<OrderModel[]>(
      this.baseApi + '/Order/get-all-order-completed'
    );
  }

  getOrderCancel(): Observable<OrderModel[]> {
    return this._http.get<OrderModel[]>(
      this.baseApi + '/Order/get-all-order-cancel'
    );
  }

  getOrderLost(): Observable<OrderModel[]> {
    return this._http.get<OrderModel[]>(
      this.baseApi + '/Order/get-all-order-lost'
    );
  }

  getOrderFail(): Observable<OrderModel[]> {
    return this._http.get<OrderModel[]>(
      this.baseApi + '/Order/get-all-order-fail'
    );
  }

  // driver
  getOrderDriver(): Observable<OrderModel[]> {
    return this._http.get<OrderModel[]>(
      this.baseApi + '/Order/get-list-order-driver'
    );
  }

  getAllOrderDriver(): Observable<OrderModel[]> {
    return this._http.get<OrderModel[]>(
      this.baseApi + '/Order/get-all-order-driver'
    );
  }
  getOrderDriverCompleted(): Observable<OrderModel[]> {
    return this._http.get<OrderModel[]>(
      this.baseApi + '/Order/get-list-order-driver-completed'
    );
  }

  getOrderDriverAccepted(): Observable<OrderModel[]> {
    return this._http.get<OrderModel[]>(
      this.baseApi + '/Order/get-order-driver-accepted'
    );
  }

  search(text: string): Observable<OrderModel> {
    return this._http.post<OrderModel>(
      this.baseApi + '/order/search-order',
      text
    );
  }

  insert(model: OrderModel): Observable<OrderModel> {
    return this._http.post<OrderModel>(
      this.baseApi + '/order/insert-order',
      model
    );
  }

  getOrder(idOrder: number): Observable<OrderModelView> {
    return this._http.get<OrderModelView>(
      `${this.baseApi}/order/${idOrder}/get-order`
    );
  }

  update(model: OrderModel, id: number): Observable<OrderModel> {
    return this._http.post<OrderModel>(
      `${this.baseApi}/order/${id}/order-edit`,
      model
    );
  }

  cancel(idOrder: number) {
    return this._http.put(`${this.baseApi}/order/${idOrder}/cancel-order`, {});
  }

  driverAccept(idOrder: number) {
    return this._http.put<OrderModelView>(
      `${this.baseApi}/order/${idOrder}/accept-order`,
      {}
    );
  }

  getStatus() {
    return this._http.get<StatusOrder[]>(`${this.baseApi}/order/get-status`);
  }

  updateStatus(model: ChangeOrderViewModel): Observable<OrderModelView> {
    return this._http.put<OrderModelView>(
      this.baseApi + '/order/change-order',
      model
    );
  }
}
