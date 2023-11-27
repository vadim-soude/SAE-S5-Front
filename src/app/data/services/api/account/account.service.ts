import { Injectable } from '@angular/core';
import {environment} from "../../../../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AccountService {
    private readonly apiUrl = `${environment.apiEndpointUrl}/api/membre`;

    constructor(private http: HttpClient) {
    }

    test(): Observable<Object> {
        let data:JSON = JSON.parse(
            '{ ' +
            '"FirstName": "Jean",' +
            '"LastName": "Michel",' +
            '"MailUpjv": "jeanmichel@mail.com",' +
            '"DiscordUsername": "jeanmich",' +
            '"BirthDate": "2023-11-23",' +
            '"PpImageUrl": "website.fr",' +
            '"Description": "blabla",' +
            '"Password": "mdpdefou",' +
            '"Statut": "oué" }');

        return this.http.post(`${this.apiUrl}/signup`, data);
    }
}
