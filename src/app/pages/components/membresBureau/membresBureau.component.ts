import {Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import {ActiveDirective} from "../../directives/active.directive";
import {RouterLink} from "@angular/router";
import {IMembresBureauModel} from "../../../data/models/membresBureau.model";
import {MembresBureauService} from "../../../data/services/membresBureau/membresBureau.service";

@Component({
    selector: 'app-adherents-bureau',
    standalone: true,
    imports: [CommonModule, ActiveDirective, RouterLink],
    templateUrl: './membresBureau.component.html',
    styleUrls: ['./membresBureau.component.css']
})
export class MembresBureauComponent implements OnInit {
    membres: IMembresBureauModel[][] = [];

    constructor(private membresBureauService: MembresBureauService) {
    }

    ngOnInit() {
        this.membresBureauService.getMembresBureau("presidence").subscribe(data =>{
            this.membres[0] = data.filter(membre => membre.category == "Présidence")
        });

        this.membresBureauService.getMembresBureau("tresorie").subscribe(data =>{
            this.membres[1] = data.filter(membre => membre.category == "Trésorie")
        });

        this.membresBureauService.getMembresBureau("secretaria").subscribe(data =>{
            this.membres[2] = data.filter(membre => membre.category == "Secrétaria")
        });

        this.membresBureauService.getMembresBureau("coordinateur general").subscribe(data =>{
            this.membres[3] = data.filter(membre => membre.category == "Coordinateur Général")
        });

        this.membresBureauService.getMembresBureau("communication").subscribe(data =>{
            this.membres[4] = data.filter(membre => membre.category == "Pôle Communication")
        });

        this.membresBureauService.getMembresBureau("evenementiel").subscribe(data =>{
            this.membres[5] = data.filter(membre => membre.category == "Pôle Évènementiel")
        });
    }

}
