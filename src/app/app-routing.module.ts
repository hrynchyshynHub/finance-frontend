import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './_guards/auth.guard';
import {LoginComponent} from './login/login.component';
import {JourneySubscriptionComponent} from './journey-subscription/journey-subscription.component';
import {CreateJourneyComponent} from './create-journey/create-journey.component';


const routes: Routes = [
  {path: 'journey', component: JourneySubscriptionComponent, canActivate: [AuthGuard]},
  // {path: 'journey', component: JourneySubscriptionComponent},
  {path: 'addJourney', component: CreateJourneyComponent, canActivate: [AuthGuard]},
  // {path: 'addJourney', component: CreateJourneyComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: JourneySubscriptionComponent, pathMatch: 'full'},
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
