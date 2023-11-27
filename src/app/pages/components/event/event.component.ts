import {Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import {ActiveDirective} from "../../directives/active.directive";
import {RouterLink} from "@angular/router";
import {IEventModel} from "../../../data/models/event.model";
import {EventService} from "../../../data/services/event/event.service";

@Component({
    selector: 'app-event',
    standalone: true,
    imports: [CommonModule, ActiveDirective, RouterLink],
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
    event: IEventModel[][] = [];

    constructor(private eventService: EventService) {
    }

    ngOnInit() {
        this.eventService.getEvent("article").subscribe(data =>{
            this.event[0] = data.filter(event => event.id == "event-0")
        });
    }

}
