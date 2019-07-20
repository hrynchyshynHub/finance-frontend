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
import {FinanceInterceptor} from './_shared/finance.interceptor';
import {LoginService} from './services/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';
import {NoteManagmentComponentComponent} from './note-managment-component/note-managment-component.component';
import {FinanceManagmentComponentComponent} from './finance-managment-component/finance-managment-component.component';
import {NewsManagmentComponent} from './news-managment/news-managment.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {TransactionComponent} from './transaction/transaction.component';
import {BudgetsComponent} from './budgets/budgets.component';
import {BudgetItemComponent} from './budget-item/budget-item.component';
import {CurrencyComponent} from './currency/currency.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    NoteManagmentComponentComponent,
    FinanceManagmentComponentComponent,
    NewsManagmentComponent,
    StatisticsComponent,
    BudgetsComponent, BudgetItemComponent,
    CurrencyComponent,
    TransactionComponent,
    PageNotFoundComponent,
    NavigationBarComponent,
    NotificationComponent,
    LoginComponent,
    AppComponent,
    PageNotFoundComponent,
    NavigationBarComponent,
    NoteManagmentComponentComponent,
    NotificationComponent,
    FinanceManagmentComponentComponent,
    CurrencyComponent,
    LoginComponent,
    BudgetsComponent,
    TransactionComponent,
    BudgetItemComponent,
    NewsManagmentComponent,
    StatisticsComponent
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
    ChartsModule,
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
    {provide: HTTP_INTERCEPTORS, useClass: FinanceInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
