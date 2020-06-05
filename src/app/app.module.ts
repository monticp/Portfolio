import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppHeadbarComponent } from './components/app.topbar/app.headbar/app.headbar.component';
import { AppNavbarComponent } from './components/app.topbar/app.navbar/app.navbar.component';
import { AppComponent } from './app.component';
import { AppFootbarComponent } from './components/app.footbar/app.footbar.component';


@NgModule({
  declarations: [
    AppHeadbarComponent,
    AppNavbarComponent,
    AppFootbarComponent,
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
