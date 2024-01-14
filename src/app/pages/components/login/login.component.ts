import {Component, ElementRef, inject, ViewChild} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AccountService} from "../../../data/services/api/account/account.service";
import {AuthService} from "../../../data/auth/auth.service";
import {Router, RouterLink} from "@angular/router";
import {CacheService} from "../../../data/services/cache/cache.service";

type AccountJson = {
    firstName: string;
    lastName: string;
    mailUpjv: string;
    discordUsername: string;
    birthDate: string;
    ppImageUrl: string;
    description: string;
    statut: string;
}

@Component({
    selector: "app-login",
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent{

    router = inject(Router);

    @ViewChild('mailUPJV', { static: true }) mailUPJV: ElementRef | undefined;
    @ViewChild('password', { static: true }) password: ElementRef | undefined;

    constructor(private account: AccountService, private auth: AuthService, private cacheService : CacheService) { }

    submit():void{
        if(this.mailUPJV?.nativeElement.value == ""  || this.password?.nativeElement.value == ""){
            return;
        }
        this.success(this.password?.nativeElement.value);
        // this.account.login(this.mailUPJV?.nativeElement.value,this.password?.nativeElement.value)
        //     .subscribe((data) => {this.success(data)},(error: HttpErrorResponse)=>{this.notifyError()},()=>{this.notifySuccess()});
    }

    success(data:any):void{
        this.auth.login();
        //let obj: AccountJson = data;
        console.log(data);
        if(data == "test1"){
            this.cacheService.set("account-firstName","Vadim");
            this.cacheService.set("account-lastName","Soudé");
            this.cacheService.set("account-mailUpjv","vadim.soude@etud.u-picardie.fr");
            this.cacheService.set("account-discordUsername","");
            this.cacheService.set("account-birthDate","19/04/2003");
            this.cacheService.set("account-ppImageUrl","assets/default-pp.png");
            this.cacheService.set("account-description","");
            this.cacheService.set("account-statut","Non-adherent");
            this.auth.removeSub();
        }else{
            this.cacheService.set("account-firstName","Vadim");
            this.cacheService.set("account-lastName","Soudé");
            this.cacheService.set("account-mailUpjv","vadim.soude@etud.u-picardie.fr");
            this.cacheService.set("account-discordUsername","reytz");
            this.cacheService.set("account-birthDate","19/04/2003");
            this.cacheService.set("account-ppImageUrl","assets/default-pp.png");
            this.cacheService.set("account-description","Le travail c'est la santé ...");
            this.cacheService.set("account-statut","Adherent");
            this.auth.setSub();
        }
        this.router.navigateByUrl('/page/account');
    }

}
