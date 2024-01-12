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
            nomActu: "Semaine 3 V3",
            date: "12/01/2024",
            imageUrl: "assets/actualite/calendar.png",
            auteur: "IUT Amiens",
            contenu: "Emploi du temps de la semaine du 15/01 au 20/01 version 3",
            lien: "./edt-xx.html",
            contenuLien: "Télécharger ici"
        },
        {
            id: "actu-2",
            nomActu: "Semaine 2 V3",
            date: "08/01/2024",
            imageUrl: "assets/actualite/calendar.png",
            auteur: "IUT Amiens",
            contenu: "Emploi du temps de la semaine du 08/01 au 13/01 version 3",
            lien: "./edt-xx.html",
            contenuLien: "Télécharger ici"
        },
        {
            id: "actu-3",
            nomActu: "Semaine 51 V5",
            date: "28/12/2023",
            imageUrl: "assets/actualite/calendar.png",
            auteur: "IUT Amiens",
            contenu: "Emploi du temps de la semaine du 18/12 au 23/12 version 5",
            lien: "./edt-xx.html",
            contenuLien: "Télécharger ici"
        },
        {
            id: "actu-4",
            nomActu: "Semaine 50 V4",
            date: "10/12/2023",
            imageUrl: "assets/actualite/calendar.png",
            auteur: "IUT Amiens",
            contenu: "Emploi du temps de la semaine du 11/12 au 16/12  version 4",
            lien: "./edt-xx.html",
            contenuLien: "Télécharger ici"
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
