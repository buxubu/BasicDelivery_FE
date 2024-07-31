import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { DriverService } from '../../../../services/driver.service';

@Component({
  selector: 'app-driver-sidenav',
  templateUrl: './driver-sidenav.component.html',
  styleUrl: './driver-sidenav.component.scss'
})
export class DriverSidenavComponent {
  router = inject(Router);
  _driverServices = inject(DriverService);

  LogOut(){
    localStorage.clear();
    this.router.navigate(['/login-driver'])
  };
}
