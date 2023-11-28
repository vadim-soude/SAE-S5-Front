import {Component, ElementRef, ViewChild} from "@angular/core";
import { CommonModule } from "@angular/common";
import {AccountService} from "../../../data/services/api/account/account.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-signup',
    standalone: true,
    imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    @ViewChild('lastName', { static: true }) lastName: ElementRef | undefined;
    @ViewChild('firstName', { static: true }) firstName: ElementRef | undefined;
    @ViewChild('mailUPJV', { static: true }) mailUPJV: ElementRef | undefined;
    @ViewChild('birthDate', { static: true }) birthDate: ElementRef | undefined;
    @ViewChild('password', { static: true }) password: ElementRef | undefined;
    @ViewChild('passwordConf', { static: true }) passwordConf: ElementRef | undefined;
    @ViewChild('err', { static: true }) err: ElementRef | undefined;

    constructor(private account: AccountService) { }

    submit():void{
        if(this.lastName?.nativeElement.value == "" || this.firstName?.nativeElement.value == "" || this.mailUPJV?.nativeElement.value == ""  || this.birthDate?.nativeElement.value == "" || this.password?.nativeElement.value == "" || this.passwordConf?.nativeElement.value == "" ){
            return
        }
        if(this.password?.nativeElement.value != this.passwordConf?.nativeElement.value){
            console.log("error")
            return;
        }
        this.account.createAccount(this.firstName?.nativeElement.value,this.lastName?.nativeElement.value,this.birthDate?.nativeElement.value,this.mailUPJV?.nativeElement.value,this.password?.nativeElement.value)
            .subscribe(data => {console.log(data)},(error: HttpErrorResponse)=>{console.log("%cCannot create account", 'color: red')},()=>{console.log("Account created !")});

    }

}