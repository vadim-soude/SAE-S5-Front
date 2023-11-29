import {Component, OnInit} from "@angular/core";
import { CommonModule } from "@angular/common";
import {ActiveDirective} from "../../directives/active.directive";
import {RouterLink} from "@angular/router";
import {IAboutModel} from "../../../data/models/about.model";
import {AboutService} from "../../../data/services/about/about.service";

@Component({
    selector: "app-about",
    standalone: true,
    imports: [CommonModule, ActiveDirective, RouterLink],
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit{
    about: IAboutModel[][] = [];

    constructor(private aboutService: AboutService) { }

    ngOnInit () {
        this.aboutService.getAbout("title").subscribe(data => {
            this.about[0] = data.filter(about => about.id == 'titre-0');
        });

        this.aboutService.getAbout("paragraphe").subscribe(data => {
            this.about[1] = data.filter(about => about.id == 'paragraphe-1');
        });

        this.aboutService.getAbout("paragraphe").subscribe(data => {
            this.about[2] = data.filter(about => about.id == 'paragraphe-2');
        });

        this.aboutService.getAbout("paragraphe").subscribe(data => {
            this.about[3] = data.filter(about => about.id == 'paragraphe-3');
        });

        this.aboutService.getAbout("paragraphe").subscribe(data => {
            this.about[4] = data.filter(about => about.id == 'paragraphe-4');
        });
    }
}
