import {Component, OnInit} from "@angular/core";
import { CommonModule } from "@angular/common";
import {ActiveDirective} from "../../directives/active.directive";
import {RouterLink} from "@angular/router";
import {AccountService} from "../../../data/services/api/account/account.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Completion} from "@angular/compiler-cli/src/ngtsc/typecheck/api";

@Component({
    selector: "app-about",
    standalone: true,
    imports: [CommonModule, ActiveDirective, RouterLink],
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {

    constructor(private accountService : AccountService) { }

    ngOnInit(): void {
        this.accountService.test().subscribe(()=>{},(error: HttpErrorResponse)=>{console.log("%cCannot create login", 'color: red')},()=>{console.log("Account created !")});
    }

}
