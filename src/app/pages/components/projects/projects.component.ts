import {Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import {ActiveDirective} from "../../directives/active.directive";
import {RouterLink} from "@angular/router";
import {IProjectModel} from "../../../data/models/project.model";
import {ProjectService} from "../../../data/services/project/project.service";

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, ActiveDirective, RouterLink],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    contenus: IProjectModel[][] = [];

    constructor(private projectService: ProjectService) { }

    ngOnInit () {
        this.projectService.getProject("title").subscribe(data => {
            this.contenus[0] = data.filter(contenu => contenu.id == 'event-0');
        });

        this.projectService.getProject("events").subscribe(data => {
            this.contenus[1] = data.filter(contenu => contenu.id >= 'event-1');
        });
    }
}
