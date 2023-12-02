import {Component, OnInit} from "@angular/core";
import { CommonModule } from "@angular/common";
import {IAccountModel} from "../../../data/models/account.model";
import {AccountService} from "../../../data/services/account/account.service";

@Component({
    selector: "app-account",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./account.component.html",
    styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit{
    account: IAccountModel[][] = [];

    constructor(private accountService: AccountService) { }

    ngOnInit () {
        this.accountService.getAccount("profil").subscribe(data => {
            this.account[0] = data.filter(account => account.id >= 'profil-1');
        });
    }
}
