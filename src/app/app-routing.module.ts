import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorsesComponent } from './horses/horses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HorseDetailComponent } from './horse-detail/horse-detail.component';

/**
 * This is the "AppRoutingModule" that you've heard so much about.
 */

/* this array is referred to as: 
 * "the AppRoutingModule.routes array".
 */
const routes: Routes = [
  /** this will match the URL 'horses' and link you 
   * over to "HorsesComponent".
   */
  { path: 'horses', component: HorsesComponent },

  /** dashboard route */
  { path: 'dashboard', component: DashboardComponent },

  /** default route, for when the browser asks for the app's 
   * route itself.
   */
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  /** This is a PARAMETERIZED ROUTE. 
   * 
   * The colon in the path indicates that ":id" is a placeholder, 
   * to be evaluated t a specific horse's id.
   */
  { path: 'detail/:id', component: HorseDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
