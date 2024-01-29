import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './modules/home/home.component';
import {CookieService} from 'ngx-cookie-service';
// Ng Componentes
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Ng Componentes
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    CalendarModule
  ],
  providers: [
    CookieService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
