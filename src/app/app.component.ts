import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Outlets } from './outlets';

@Component({
    selector: 'schir-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    outlets = Outlets;

    constructor(
        private router: Router
    ) { }

    goToVerfahren() {
        this.router.navigate([
            {
                outlets: {
                    [Outlets.Verfahren]: 'verfahrenId',
                    [Outlets.Vorgaenge]: null,
                    [Outlets.Verfuegungen]: null,
                    [Outlets.Aufgaben]: null,
                    [Outlets.Adressaten]: null,
                    [Outlets.Kontakte]: null
                }
            }
        ]);
    }
}
