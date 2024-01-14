import {Component, inject, OnInit} from "@angular/core";
import { CommonModule } from "@angular/common";
import {IAccountModel} from "../../../data/models/account.model";
import {AccountService} from "../../../data/services/account/account.service";
import {AuthService} from "../../../data/auth/auth.service";
import {CacheService} from "../../../data/services/cache/cache.service";
import {Router, RouterLink} from "@angular/router";

@Component({
    selector: "app-account",
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: "./account.component.html",
    styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit{
    account: IAccountModel[] = [];

    router = inject(Router);
    constructor(private accountService: AccountService, private auth: AuthService, private cacheService : CacheService) { }

    ngOnInit () {

        this.sleep(1000).then(() => {
        this.accountService.getAccount("profil").subscribe(data => {
            this.account = data;
        });

        });
    }

    disconnect(){
        this.auth.logout();
        this.router.navigateByUrl('/page/login');
        this.cacheService.set("account-firstName","");
        this.cacheService.set("account-lastName","");
        this.cacheService.set("account-mailUpjv","");
        this.cacheService.set("account-discordUsername","");
        this.cacheService.set("account-birthDate","");
        this.cacheService.set("account-ppImageUrl","");
        this.cacheService.set("account-description","");
        this.cacheService.set("account-statut","");
    }

    sleep(ms:any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
