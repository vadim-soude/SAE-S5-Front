import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private readonly apiBase = `${environment.apiEndpointUrl}`;

    constructor(private http: HttpClient) {
    }

    get(api:string):Observable<Object>{
        return this.http.get<Object>(`${this.apiBase+api}`);
    }

    post(api:string,data:JSON):Observable<Object>{
        return this.http.post(`${this.apiBase+api}`,data);
    }

}
