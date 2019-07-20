import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputsModule} from 'angular-bootstrap-md';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {NotificationComponent} from './notification/notification.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_guards/auth.guard';
import {AuthInterceptor} from './_shared/auth-intereceptor.service';
import {LoginService} from './services/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationBarComponent,
    NotificationComponent,
    LoginComponent,
  ],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MaterialModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MaterialModule,
  ],
  providers: [LoginService, AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
