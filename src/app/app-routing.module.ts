import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthComponent } from './login/login-auth/login-auth.component';
import { LoginDriverComponent } from './login/login-driver/login-driver.component';
import { RegisterAuthComponent } from './login/register-auth/register-auth.component';
import { RegisterDriverComponent } from './login/register-driver/register-driver.component';

const routes: Routes = [
  { path: '', redirectTo: 'login-user', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'driver',
    loadChildren: () =>
      import('./driver/driver.module').then((m) => m.DriverModule),
  },
  { path: 'login-user', component: LoginAuthComponent },
  { path: 'register-user', component: RegisterAuthComponent },
  { path: 'login-driver', component: LoginDriverComponent },
  { path: 'register-driver', component: RegisterDriverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
