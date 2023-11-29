import {Component, OnInit} from "@angular/core";
import { CommonModule } from "@angular/common";
import {ActiveDirective} from "../../directives/active.directive";
import {RouterLink} from "@angular/router";
import {ICgvModel} from "../../../data/models/cgv.model";
import {CgvService} from "../../../data/services/cgv/cgv.service";

@Component({
    selector: "app-cgv",
    standalone: true,
    imports: [CommonModule, ActiveDirective, RouterLink],
    templateUrl: "./cgv.component.html",
    styleUrls: ["./cgv.component.css"]
})
export class CgvComponent implements OnInit{
    cgv: ICgvModel[][] = [];

    constructor(private cguService: CgvService) { }

    ngOnInit () {
        this.cguService.getCgv("title").subscribe(data => {
            this.cgv[0] = data.filter(cgv => cgv.id == 'titre-0');
        });

        this.cguService.getCgv("paragraphe").subscribe(data => {
            this.cgv[1] = data.filter(cgv => cgv.id == 'paragraphe-1');
        });

        this.cguService.getCgv("paragraphe").subscribe(data => {
            this.cgv[2] = data.filter(cgv => cgv.id == 'paragraphe-2');
        });
    }
}
