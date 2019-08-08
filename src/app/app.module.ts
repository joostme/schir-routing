import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerfahrenComponent } from './verfahren/verfahren.component';
import { VorgangComponent } from './vorgang/vorgang.component';
import { VerfuegungComponent } from './verfuegung/verfuegung.component';
import { AufgabenComponent } from './aufgaben/aufgaben.component';
import { AdressatenComponent } from './adressaten/adressaten.component';
import { KontakteComponent } from './kontakte/kontakte.component';

@NgModule({
  declarations: [
    AppComponent,
    VerfahrenComponent,
    VorgangComponent,
    VerfuegungComponent,
    AufgabenComponent,
    AdressatenComponent,
    KontakteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
