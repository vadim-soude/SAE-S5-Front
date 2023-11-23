import {Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import {ActiveDirective} from "../../directives/active.directive";
import {RouterLink} from "@angular/router";
import {ActualitesService} from "../../../data/services/actualite/actualites.service";
import {IActualitesModel} from "../../../data/models/actualites.model";

@Component({
    selector: 'app-actualite',
    standalone: true,
    imports: [CommonModule, ActiveDirective, RouterLink],
    templateUrl: './actualites.component.html',
    styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {
    contenus: IActualitesModel[][] = [];

    constructor(private actualitesService: ActualitesService) { }

    ngOnInit () {
        this.actualitesService.getActualite("title").subscribe(data => {
            this.contenus[0] = data.filter(contenu => contenu.id == 'actu-0');
        });

        this.actualitesService.getActualite("actus").subscribe(data => {
            this.contenus[1] = data.filter(contenu => contenu.id >= 'actu-1');
        });
    }
}
