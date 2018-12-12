import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorsesComponent } from './horses/horses.component';

/**
 * This is the "AppRoutingModule" that you've heard so much about.
 */

const routes: Routes = [
  /** this will match the URL 'horses' and link you 
   * over to "HorsesComponent".
   */
  { path: 'horses', component: HorsesComponent } 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
