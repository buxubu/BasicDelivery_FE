import { Component, Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.scss'
})
export class UserHeaderComponent {
@Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }
}
