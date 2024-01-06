import {Component, OnInit} from "@angular/core";
import { CommonModule } from "@angular/common";
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {ActiveDirective} from "../pages/directives/active.directive";

@Component({
    selector: "app-footer",
    standalone: true,
    imports: [CommonModule, RouterLink, ActiveDirective
    ],
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
    currentPage!: string;

    constructor(private router: Router) { }

    ngOnInit() {
    }
}
