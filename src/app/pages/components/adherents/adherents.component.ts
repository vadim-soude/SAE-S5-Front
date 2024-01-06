import {Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import {ActiveDirective} from "../../directives/active.directive";
import {RouterLink} from "@angular/router";
import {IAdherentsModel} from "../../../data/models/adherents.model";
import {AdherentsService} from "../../../data/services/adherents/adherents.service";

@Component({
    selector: 'app-adherent',
    standalone: true,
    imports: [CommonModule, ActiveDirective, RouterLink],
    templateUrl: './adherents.component.html',
    styleUrls: ['./adherents.component.css']
})
export class AdherentsComponent implements OnInit {
    adherent: IAdherentsModel[][] = [];

    constructor(private adherentsService: AdherentsService) {
    }

    ngOnInit() {
        this.adherentsService.getAdherents("entete").subscribe(data =>{
            this.adherent[0] = data.filter(adherent => adherent.id == "adherent-0")
        });
        this.adherentsService.getAdherents("adhérent").subscribe(data =>{
            this.adherent[1] = data.filter(adherent => adherent.id >= "adherent-1")
        });
    }

}
