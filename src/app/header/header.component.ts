import {Component, OnInit} from "@angular/core";
import { CommonModule } from "@angular/common";
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {ActiveDirective} from "../pages/directives/active.directive";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [CommonModule, RouterLink, ActiveDirective
    ],
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
    currentPage!: string;

    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentPage = this.getPageTitle();
            }
        });
    }

    private getPageTitle() {
        const url = this.router.url;
        const segments = url.split("/");
        const page = segments[segments.length - 1];

        return page;
    }
}
