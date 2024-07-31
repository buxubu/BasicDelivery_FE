import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { DriverModule } from './driver/driver.module';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginAuthComponent } from './login/login-auth/login-auth.component';
import { LoginDriverComponent } from './login/login-driver/login-driver.component';
import { VndPipe } from './share/temp-convertor.pipe';
import { RegisterAuthComponent } from './login/register-auth/register-auth.component';
import { RegisterDriverComponent } from './login/register-driver/register-driver.component';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginAuthComponent,
    LoginDriverComponent,
    RegisterAuthComponent,
    RegisterDriverComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserModule,
    MaterialModule,
    ReactiveFormsModule,
    DriverModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    AuthService,
    OrderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
