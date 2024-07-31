import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  SideBarOpen = true;

  sideBarToggler(){
    this.SideBarOpen = !this.SideBarOpen;
  }
}
