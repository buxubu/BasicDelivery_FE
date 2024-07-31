import { Component } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.scss'
})
export class DriverComponent {
  SideBarOpen = true;

  sideBarToggler(){
    this.SideBarOpen = !this.SideBarOpen;
  }
}
