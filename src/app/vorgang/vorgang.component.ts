import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Outlets } from '../outlets';

@Component({
    selector: 'schir-vorgang',
    templateUrl: './vorgang.component.html',
    styleUrls: ['./vorgang.component.scss']
})
export class VorgangComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    goToVerfuegung() {
        this.router.navigate([
            {
                outlets: {
                    [Outlets.Verfuegungen]: 'verfuegungId',
                    [Outlets.Aufgaben]: null,
                    [Outlets.Adressaten]: null,
                    [Outlets.Kontakte]: null
                }
            }
        ]);
    }

}
