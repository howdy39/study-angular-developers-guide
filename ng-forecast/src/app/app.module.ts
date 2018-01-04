import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AreaEditComponent } from './area-edit/area-edit.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { OpenWeatherMapService } from './services/open-weather-map.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AreaEditComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [
    OpenWeatherMapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
