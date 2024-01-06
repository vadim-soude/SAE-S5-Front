import {Component, OnInit} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import {IHomeModel} from "../data/models/home.model";
import {HomeService} from "../data/services/home/home.service";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit{
    contenus: IHomeModel[][] = [];

    constructor(private homeService: HomeService) { }

    ngOnInit (){
        this.homeService.getHome("presentation").subscribe(data => {
            this.contenus[0] = data.filter(contenu => contenu.id == 'contenu-1');
        });
        this.homeService.getHome("valeurs").subscribe(data => {
            this.contenus[1] = data.filter(contenu => contenu.id == 'contenu-2');
        });
        this.homeService.getHome("partenaires").subscribe((data) => {
            this.contenus[2] = data.filter(contenu => contenu.id == 'contenu-3');
        });
        this.homeService.getHome("partenaires").subscribe((data) => {
            this.contenus[3] = data.filter(contenu => contenu.id >= 'contenu-4');
        });
    }
}
