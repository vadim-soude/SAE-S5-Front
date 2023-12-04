import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {ICguModel} from "../../models/cgu.model";

@Injectable({
    providedIn: "root"
})
export class CguService {
    private readonly apiUrl = '/api/cgu';

    private cgu: ICguModel[] = [
        {
            id: "titre-0",
            titre: "Condition Générale d'Utilisation",
            contenu:""
        },
        {
            id: "paragraphe-1",
            titre: "Titre 1 :",
            contenu: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.`
        },
        {
            id: "paragraphe-2",
            titre: "Titre 2 :",
            contenu: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.`
        }
    ]

    constructor(private http: HttpClient) { }

    getCguByID(id: string): ICguModel | null{

        for (let contenu of this.cgu) {
            if(contenu.id == id){
                return(contenu);
            }
        }
        return(null);

        //return this.http.get<ICguModel>(`${this.apiUrl}/${id}`);
    }

    getCgu(category: string): Observable<ICguModel[]> {


        return of(this.cgu);
        //return this.http.get<ICguModel>(`${this.apiUrl}/${category}/all`);
    }
}
