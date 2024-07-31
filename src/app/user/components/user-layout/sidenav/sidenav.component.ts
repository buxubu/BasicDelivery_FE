import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  router = inject(Router);
  _authSerVices = inject(AuthService);

  LogOut(){
    localStorage.clear();
    this.router.navigate(['/login-user'])
  };
}
