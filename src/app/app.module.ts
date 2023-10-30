import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './_services/api.service';
import { DrinkService } from './_services/drink.service';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DrinksComponent } from './drinks/drinks.component';
import { DetailDrinkComponent } from './detail-drink/detail-drink.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    DrinksComponent,
    DetailDrinkComponent,
  ],
  providers: [
    ApiService,
    DrinkService
  ],
  bootstrap: [
    AppComponent,
    DrinksComponent
  ]
})
export class AppModule { }
