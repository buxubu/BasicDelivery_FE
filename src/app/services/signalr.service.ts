import { Injectable } from '@angular/core';
import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder,
} from '@microsoft/signalr';

@Injectable({
  providedIn: 'root',
})
export class SignalrService {
  constructor() {}

  hubConnection?: HubConnection;

  startConnection = () => {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:7130/toastr', {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('Hub connection started!');
      })
      .catch((err) => console.log('error while starting connection: ' + err));
  };

  askServer() {
    this.hubConnection
      ?.invoke('askServer', 'hey')
      .catch((err) => console.error(err));
  }

  askServerListener() {
    this.hubConnection?.on('askServerReponse', (someText) => {
      console.log(someText);
    });
  }
}
