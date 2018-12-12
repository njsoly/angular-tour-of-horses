import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorsesComponent } from './horses/horses.component';
import { FormsModule } from '@angular/forms';
import { HorseDetailComponent } from './horse-detail/horse-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    HorsesComponent,
    HorseDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
