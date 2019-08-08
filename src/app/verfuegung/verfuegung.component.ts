import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Outlets } from '../outlets';

@Component({
    selector: 'schir-verfuegung',
    templateUrl: './verfuegung.component.html',
    styleUrls: ['./verfuegung.component.scss']
})
export class VerfuegungComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    goToAufgabe() {
        this.router.navigate([
            {
                outlets: {
                    [Outlets.Aufgaben]: 'aufgabeId',
                    [Outlets.Adressaten]: null,
                    [Outlets.Kontakte]: null
                }
            }
        ]);
    }
}
