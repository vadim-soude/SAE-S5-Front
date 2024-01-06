import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {IProjectModel} from "../../models/project.model";

@Injectable({
    providedIn: "root"
})
export class ProjectService {
    private readonly apiUrl = '/api/project';

    private project: IProjectModel[] = [
        {
            id: "event-0",
            nomEvent: "",
            date: "",
            imageUrl: "",
            auteur: "",
            lieu: "",
            contenu: "Les projets organisés par le BDE Info Contact",
            lien: "",
            contenuLien: ""
        },
        {
            id: "event-1",
            nomEvent: "Code Game",
            date: "23/11/2023",
            imageUrl: "assets/project/code-game_Logo.png",
            auteur: "Tony Dary",
            lieu: "IUT Amiens",
            contenu: "Faire la SAE 5 pour le BUT 3",
            lien: "./code-game.html",
            contenuLien: "Plus d'information ici"
        },
        {
            id: "event-2",
            nomEvent: "Code Game",
            date: "23/11/2023",
            imageUrl: "assets/project/code-game_Logo.png",
            auteur: "Tony Dary",
            lieu: "IUT Amiens",
            contenu: "Faire la SAE 5 pour le BUT 3",
            lien: "./code-game.html",
            contenuLien: "Plus d'information ici"
        },
        {
            id: "event-3",
            nomEvent: "Code Game",
            date: "23/11/2023",
            imageUrl: "assets/project/code-game_Logo.png",
            auteur: "Tony Dary",
            lieu: "IUT Amiens",
            contenu: "Faire la SAE 5 pour le BUT 3",
            lien: "./code-game.html",
            contenuLien: "Plus d'information ici"
        },
        {
            id: "event-4",
            nomEvent: "Code Game",
            date: "23/11/2023",
            imageUrl: "assets/project/code-game_Logo.png",
            auteur: "Tony Dary",
            lieu: "IUT Amiens",
            contenu: "Faire la SAE 5 pour le BUT 3",
            lien: "./code-game.html",
            contenuLien: "Plus d'information ici"
        }
    ]

    constructor(private http: HttpClient) { }

    getProjectByID(id: string): IProjectModel | null{

        for (let contenu of this.project) {
            if(contenu.id == id){
                return(contenu);
            }
        }
        return(null);

        //return this.http.get<IProjectModel>(`${this.apiUrl}/${id}`);
    }

    getProject(category: string): Observable<IProjectModel[]> {


        return of(this.project);
        //return this.http.get<IProjectModel>(`${this.apiUrl}/${category}/all`);
    }
}
