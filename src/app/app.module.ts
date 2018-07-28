import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './conents/login/login.component';
import { NavbarComponent } from './conents/navbar/navbar.component';
import { AboutusComponent } from './conents/aboutus/aboutus.component';
import { HomeComponent } from './conents/home/home.component';
import { PagenotfoundComponent } from './conents/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AboutusComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
