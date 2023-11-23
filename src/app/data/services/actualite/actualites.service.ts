import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {IActualitesModel} from "../../models/actualites.model";

@Injectable({
    providedIn: "root"
})
export class ActualitesService {
    private readonly apiUrl = '/api/actualites';

    private project: IActualitesModel[] = [
        {
            id: "actu-0",
            nomActu: "",
            date: "",
            imageUrl: "",
            auteur: "",
            contenu: "Les actualités du BDE Info Contact",
            lien: "",
            contenuLien: ""
        },
        {
            id: "actu-1",
            nomActu: "Semaine 47 V2",
            date: "23/11/2023",
            imageUrl: "assets/actualite/calendar.png",
            auteur: "IUT Amiens",
            contenu: "Emploi du temps de la semaine 47 version 2",
            lien: "./edt-xx.html",
            contenuLien: "Plus d'information ici"
        },
        {
            id: "actu-2",
            nomActu: "Semaine 48 V2",
            date: "23/11/2023",
            imageUrl: "assets/actualite/calendar.png",
            auteur: "IUT Amiens",
            contenu: "Emploi du temps de la semaine 48 version 2",
            lien: "./edt-xx.html",
            contenuLien: "Plus d'information ici"
        },
        {
            id: "actu-3",
            nomActu: "Semaine 49 V2",
            date: "23/11/2023",
            imageUrl: "assets/actualite/calendar.png",
            auteur: "IUT Amiens",
            contenu: "Emploi du temps de la semaine 49 version 2",
            lien: "./edt-xx.html",
            contenuLien: "Plus d'information ici"
        },
        {
            id: "actu-4",
            nomActu: "Semaine 50 V2",
            date: "23/11/2023",
            imageUrl: "assets/actualite/calendar.png",
            auteur: "IUT Amiens",
            contenu: "Emploi du temps de la semaine 50 version 2",
            lien: "./edt-xx.html",
            contenuLien: "Plus d'information ici"
        }
    ]

    constructor(private http: HttpClient) { }

    getActualitesByID(id: string): IActualitesModel | null{

        for (let contenu of this.project) {
            if(contenu.id == id){
                return(contenu);
            }
        }
        return(null);

        //return this.http.get<IActualitesModel>(`${this.apiUrl}/${id}`);
    }

    getActualite(category: string): Observable<IActualitesModel[]> {


        return of(this.project);
        //return this.http.get<IActualitesModel>(`${this.apiUrl}/${category}/all`);
    }
}
