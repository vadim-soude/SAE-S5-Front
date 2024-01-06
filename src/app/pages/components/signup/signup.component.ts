import {Component, ElementRef, inject, ViewChild} from "@angular/core";
import { CommonModule } from "@angular/common";
import {AccountService} from "../../../data/services/api/account/account.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-signup',
    standalone: true,
    imports: [CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    router = inject(Router);

    @ViewChild('lastName', { static: true }) lastName: ElementRef | undefined;
    @ViewChild('firstName', { static: true }) firstName: ElementRef | undefined;
    @ViewChild('mailUPJV', { static: true }) mailUPJV: ElementRef | undefined;
    @ViewChild('birthDate', { static: true }) birthDate: ElementRef | undefined;
    @ViewChild('password', { static: true }) password: ElementRef | undefined;
    @ViewChild('passwordConf', { static: true }) passwordConf: ElementRef | undefined;

    constructor(private account: AccountService) { }

    submit():void{
        if(this.lastName?.nativeElement.value == "" || this.firstName?.nativeElement.value == "" || this.mailUPJV?.nativeElement.value == ""  || this.birthDate?.nativeElement.value == "" || this.password?.nativeElement.value == "" || this.passwordConf?.nativeElement.value == "" ){
            return
        }
        if(this.password?.nativeElement.value != this.passwordConf?.nativeElement.value){
            console.log("error")
            return;
        }
        this.account.createAccount(this.firstName?.nativeElement.value,this.lastName?.nativeElement.value,this.mailUPJV?.nativeElement.value,this.birthDate?.nativeElement.value,this.password?.nativeElement.value)
            .subscribe(() => {},(error: HttpErrorResponse)=>{console.log("%cCannot create account", 'color: red')},()=>{});

    }

    onAccountCreated():void{
        console.log("Account created !")
        this.router.navigateByUrl('/page/login')
    }

}
