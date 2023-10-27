import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import {ActiveDirective} from "../../directives/active.directive";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, ActiveDirective, RouterLink],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

}
