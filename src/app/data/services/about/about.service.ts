import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {IAboutModel} from "../../models/about.model";

@Injectable({
    providedIn: "root"
})
export class AboutService {
    private readonly apiUrl = '/api/about';

    private about: IAboutModel[] = [
        {
            id: "titre-0",
            titre: "Qui sommes-nous ?",
            contenus:""
        },
        {
            id: "paragraphe-1",
            titre: "Titre 1 :",
            contenus: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.`
        },
        {
            id: "paragraphe-2",
            titre: "Titre 2 :",
            contenus: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.`
        },
        {
            id: "paragraphe-3",
            titre: "Titre 3 :",
            contenus: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.`
        },
        {
            id: "paragraphe-4",
            titre: "Titre 4 :",
            contenus: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.`
        }
    ]

    constructor(private http: HttpClient) { }

    getAboutByID(id: string): IAboutModel | null{

        for (let contenu of this.about) {
            if(contenu.id == id){
                return(contenu);
            }
        }
        return(null);

        //return this.http.get<IAboutModel>(`${this.apiUrl}/${id}`);
    }

    getAbout(category: string): Observable<IAboutModel[]> {


        return of(this.about);
        //return this.http.get<IAboutModel>(`${this.apiUrl}/${category}/all`);
    }
}
