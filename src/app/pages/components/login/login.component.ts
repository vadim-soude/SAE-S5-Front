import {Component, ElementRef, ViewChild} from "@angular/core";
import { CommonModule } from "@angular/common";
import {AccountService} from "../../../data/services/api/account/account.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../../../data/auth/auth.service";
import {RouterLink} from "@angular/router";

@Component({
    selector: "app-login",
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent{

    @ViewChild('mailUPJV', { static: true }) mailUPJV: ElementRef | undefined;
    @ViewChild('password', { static: true }) password: ElementRef | undefined;

    constructor(private account: AccountService, private auth: AuthService) { }

    submit():void{
        if(this.mailUPJV?.nativeElement.value == ""  || this.password?.nativeElement.value == ""){
            return;
        }
        this.account.login(this.mailUPJV?.nativeElement.value,this.password?.nativeElement.value)
            .subscribe((data) => {this.success(data)},(error: HttpErrorResponse)=>{console.log("%cCannont logged in", 'color: red')},()=>{console.log("Logged-in !")});
    }

    success(data:Object):void{
        this.auth.login();
        console.log(data);
    }

}
