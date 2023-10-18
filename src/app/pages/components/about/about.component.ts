import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {ActiveDirective} from "../../directives/active.directive";
import {RouterLink} from "@angular/router";

@Component({
    selector: "app-about",
    standalone: true,
    imports: [CommonModule, ActiveDirective, RouterLink],
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.css"]
})
export class AboutComponent {

}
