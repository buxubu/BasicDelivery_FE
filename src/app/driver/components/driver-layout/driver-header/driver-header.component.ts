import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-driver-header',
  templateUrl: './driver-header.component.html',
  styleUrl: './driver-header.component.scss'
})
export class DriverHeaderComponent {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }
}
