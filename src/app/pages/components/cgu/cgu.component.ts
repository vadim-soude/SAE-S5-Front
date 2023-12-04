import {Component, OnInit} from "@angular/core";
import { CommonModule } from "@angular/common";
import {ActiveDirective} from "../../directives/active.directive";
import {RouterLink} from "@angular/router";
import {ICguModel} from "../../../data/models/cgu.model";
import {CguService} from "../../../data/services/cgu/cgu.service";

@Component({
    selector: "app-cgu",
    standalone: true,
    imports: [CommonModule, ActiveDirective, RouterLink],
    templateUrl: "./cgu.component.html",
    styleUrls: ["./cgu.component.css"]
})
export class CguComponent implements OnInit{
    cgu: ICguModel[][] = [];

    constructor(private cguService: CguService) { }

    ngOnInit () {
        this.cguService.getCgu("title").subscribe(data => {
            this.cgu[0] = data.filter(cgu => cgu.id == 'titre-0');
        });

        this.cguService.getCgu("paragraphe").subscribe(data => {
            this.cgu[1] = data.filter(cgu => cgu.id == 'paragraphe-1');
        });

        this.cguService.getCgu("paragraphe").subscribe(data => {
            this.cgu[2] = data.filter(cgu => cgu.id == 'paragraphe-2');
        });
    }
}
