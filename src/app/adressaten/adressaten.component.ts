import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Outlets } from '../outlets';

@Component({
    selector: 'schir-adressaten',
    templateUrl: './adressaten.component.html',
    styleUrls: ['./adressaten.component.scss']
})
export class AdressatenComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    goToKontakte() {
        this.router.navigate([
            {
                outlets: {
                    [Outlets.Kontakte]: 'kontakteId'
                }
            }
        ]);
    }

}
