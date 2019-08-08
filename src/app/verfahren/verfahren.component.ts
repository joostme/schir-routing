import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Outlets } from '../outlets';

@Component({
    selector: 'schir-verfahren',
    templateUrl: './verfahren.component.html',
    styleUrls: ['./verfahren.component.scss']
})
export class VerfahrenComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    goToVorgang() {
        this.router.navigate([
            {
                outlets: {
                    [Outlets.Vorgaenge]: 'vorgangId',
                    [Outlets.Verfuegungen]: null,
                    [Outlets.Aufgaben]: null,
                    [Outlets.Adressaten]: null,
                    [Outlets.Kontakte]: null
                }
            }
        ]);
    }
}
