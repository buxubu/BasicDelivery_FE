import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HistoryViewModel } from '../models/HistoryViewModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private _http: HttpClient) {}
  readonly baseApi: string = environment.baseUrl;

  getHistories(): Observable<HistoryViewModel[]> {
    return this._http.get<HistoryViewModel[]>(
      this.baseApi + '/History/get-all-history'
    );
  }

  getHistoriesDriver(): Observable<HistoryViewModel[]> {
    return this._http.get<HistoryViewModel[]>(
      this.baseApi + '/History/get-all-history-driver'
    );
  }
}
