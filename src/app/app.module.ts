import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorsesComponent } from './horses/horses.component';
import { FormsModule } from '@angular/forms';
import { HorseDetailComponent } from './horse-detail/horse-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    HorsesComponent,
    HorseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
