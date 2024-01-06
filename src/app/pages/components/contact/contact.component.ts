import {Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import {ActiveDirective} from "../../directives/active.directive";
import {RouterLink} from "@angular/router";
import {IContactModel} from "../../../data/models/contact.model";
import {ContactService} from "../../../data/services/contact/contact.service";

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ActiveDirective, RouterLink],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    contact: IContactModel[][] = [];

    constructor(private contactService: ContactService) {
    }

    ngOnInit() {
        this.contactService.getContact("contact").subscribe(data => {
            this.contact[0] = data.filter(contact => contact.id == "contact-0")
        });
    }

}
