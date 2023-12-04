import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../../environment/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AccountService {
    private readonly apiUrl = `${environment.apiEndpointUrl}/api/membre`;

    constructor(private http: HttpClient) {
    }

    createAccount(firstName:string,lastName:string,mailUPJV:string,birthDate:string,password:string): Observable<Object> {
        let data:JSON = JSON.parse(
            '{ ' +
            '"FirstName": "' + firstName.toString() + '",'+
            '"LastName": "'+ lastName.toString() +'",' +
            '"MailUpjv": "'+ mailUPJV.toString() +'",' +
            '"DiscordUsername": "",' +
            '"BirthDate": "'+ birthDate.toString() +'",' +
            '"PpImageUrl": "",' +
            '"Description": "",' +
            '"Password": "'+ password.toString() +'",' +
            '"Statut": "" }');
        return this.http.post(`${this.apiUrl}/signup`,data);
    }

    login(mailUPJV:string,password:string): Observable<Object> {
        let data:JSON = JSON.parse(
            '{ ' +
            '"MailUpjv": "'+mailUPJV+'",' +
            '"Password": "'+password+'"}');

        return this.http.post(`${this.apiUrl}/login`,data);
    }
}
