import {Component, ElementRef, inject, ViewChild} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AccountService} from "../../../data/services/api/account/account.service";
import {HttpErrorResponse} from "@angular/common/http";
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
        this.account.login(this.mailUPJV?.nativeElement.value,this.password?.nativeElement.value)
            .subscribe((data) => {this.success(data)},(error: HttpErrorResponse)=>{this.notifyError()},()=>{this.notifySuccess()});
    }

    success(data:any):void{
        this.auth.login();
        this.router.navigateByUrl('/page/account')
        let obj: AccountJson = data;
        this.storeDataInCache(obj);
    }

    storeDataInCache(obj:AccountJson){
        this.cacheService.set("account-firstName",obj.firstName);
        this.cacheService.set("account-lastName",obj.lastName);
        this.cacheService.set("account-mailUpjv",obj.mailUpjv);
        this.cacheService.set("account-discordUsername",obj.discordUsername);
        this.cacheService.set("account-birthDate",obj.birthDate);
        this.cacheService.set("account-ppImageUrl",obj.ppImageUrl);
        this.cacheService.set("account-description",obj.description);
        this.cacheService.set("account-statut",obj.statut);
    }

    notifyError(){
        console.log("%cCannont logged in", 'color: red')
    }

    notifySuccess(){
        console.log("Logged-in !")
    }

}
