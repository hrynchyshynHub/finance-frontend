import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoteManagmentComponentComponent} from './note-managment-component/note-managment-component.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FinanceManagmentComponentComponent} from './finance-managment-component/finance-managment-component.component';

const routes: Routes = [
    { path: 'notes', component: NoteManagmentComponentComponent },
    { path: 'finance', component: FinanceManagmentComponentComponent },
    { path: '**', component: PageNotFoundComponent },
];


// @ts-ignore
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
