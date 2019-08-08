import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdressatenComponent } from './adressaten/adressaten.component';
import { AufgabenComponent } from './aufgaben/aufgaben.component';
import { KontakteComponent } from './kontakte/kontakte.component';
import { Outlets } from './outlets';
import { VerfahrenComponent } from './verfahren/verfahren.component';
import { VerfuegungComponent } from './verfuegung/verfuegung.component';
import { VorgangComponent } from './vorgang/vorgang.component';

const routes: Routes = [
    {
        path: ':verfahrenId',
        component: VerfahrenComponent,
        outlet: Outlets.Verfahren
    },
    {
        path: ':vorgangId',
        component: VorgangComponent,
        outlet: Outlets.Vorgaenge
    },
    {
        path: ':verfuegungId',
        component: VerfuegungComponent,
        outlet: Outlets.Verfuegungen
    },
    {
        path: ':aufgabenId',
        component: AufgabenComponent,
        outlet: Outlets.Aufgaben
    },
    {
        path: ':adressatenId',
        component: AdressatenComponent,
        outlet: Outlets.Adressaten
    },
    {
        path: ':kontakteId',
        component: KontakteComponent,
        outlet: Outlets.Kontakte
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
