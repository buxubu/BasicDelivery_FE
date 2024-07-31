import { Component, OnDestroy, OnInit } from '@angular/core';
import { SignalrService } from '../../../services/signalr.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrl: './user-chat.component.scss',
})
export class UserChatComponent implements OnInit, OnDestroy {
  /**
   *
   */
  constructor(private signalrService: SignalrService) {}

  ngOnInit(): void {
    this.signalrService.startConnection();

    setTimeout(() => {
      this.signalrService.askServerListener();
      this.signalrService.askServer();
    }, 2000);
  }

  ngOnDestroy(): void {
    this.signalrService.hubConnection?.off('askServerReponse');
  }
}
