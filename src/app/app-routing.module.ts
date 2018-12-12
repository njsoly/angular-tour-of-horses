import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorsesComponent } from './horses/horses.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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

  /*  */
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
