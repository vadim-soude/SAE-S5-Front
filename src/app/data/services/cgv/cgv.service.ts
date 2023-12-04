import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {ICgvModel} from "../../models/cgv.model";

@Injectable({
    providedIn: "root"
})
export class CgvService {
    private readonly apiUrl = '/api/cgv';

    private cgv: ICgvModel[] = [
        {
            id: "titre-0",
            titre: "Condition Générale de Vente",
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

    getCgvByID(id: string): ICgvModel | null{

        for (let contenu of this.cgv) {
            if(contenu.id == id){
                return(contenu);
            }
        }
        return(null);

        //return this.http.get<ICgvModel>(`${this.apiUrl}/${id}`);
    }

    getCgv(category: string): Observable<ICgvModel[]> {


        return of(this.cgv);
        //return this.http.get<ICgvModel>(`${this.apiUrl}/${category}/all`);
    }
}
