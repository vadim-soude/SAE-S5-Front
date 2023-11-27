import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
    private readonly apiUrl = `${environment.apiEndpointUrl}/api/test`;

    constructor(private http: HttpClient) {
    }

    getX(): Observable<JSON> {
        return this.http.get<JSON>(`${this.apiUrl}/15`);
    }
}
