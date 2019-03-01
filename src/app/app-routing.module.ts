import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoteManagmentComponentComponent} from './note-managment-component/note-managment-component.component';
import {FinanceManagmentComponentComponent} from './finance-managment-component/finance-managment-component.component';
import {AuthGuard} from './_guards/auth.guard';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'notes', component: NoteManagmentComponentComponent, canActivate: [AuthGuard]},
  // {path: 'finance', component: FinanceManagmentComponentComponent, canActivate: [AuthGuard]},
  {path: 'finance', component: FinanceManagmentComponentComponent},
  {path: 'login', component: LoginComponent},
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
