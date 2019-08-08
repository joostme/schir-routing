import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Outlets } from '../outlets';

@Component({
    selector: 'schir-aufgaben',
    templateUrl: './aufgaben.component.html',
    styleUrls: ['./aufgaben.component.scss']
})
export class AufgabenComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    goToAdressaten() {
        this.router.navigate([
            {
                outlets: {
                    [Outlets.Adressaten]: 'adressatenId',
                    [Outlets.Kontakte]: null
                }
            }
        ]);
    }

}
