import {Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import {ActiveDirective} from "../../directives/active.directive";
import {RouterLink} from "@angular/router";
import {IHistoriqueModel} from "../../../data/models/historique.model";
import {HistoriqueService} from "../../../data/services/historique/historique.service";

@Component({
    selector: 'app-historique',
    standalone: true,
    imports: [CommonModule, ActiveDirective, RouterLink],
    templateUrl: './historique.component.html',
    styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
    history: IHistoriqueModel[][] = [];

    constructor(private historiqueService: HistoriqueService) {
    }

    ngOnInit() {
        this.historiqueService.getHistorique("commande").subscribe(data =>{
            this.history[0] = data.filter(history => history.id == "titre-formulaire")
        });

        this.historiqueService.getHistorique("commande").subscribe(data =>{
            this.history[1] = data.filter(history => history.id >= "commande-1-1")
        });
    }

}
