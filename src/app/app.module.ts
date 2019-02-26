import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InputsModule} from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {NoteManagmentComponentComponent} from './note-managment-component/note-managment-component.component';
import {NotificationComponent} from './notification/notification.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FinanceManagmentComponentComponent} from './finance-managment-component/finance-managment-component.component';
import {CurrencyComponent} from './currency/currency.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_guards/auth.guard';
import {FinanceInterceptor} from './_shared/finance.interceptor';
import {LoginService} from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationBarComponent,
    NoteManagmentComponentComponent,
    NotificationComponent,
    FinanceManagmentComponentComponent,
    CurrencyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InputsModule,
    AppRoutingModule
  ],
  providers: [LoginService, AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: FinanceInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
