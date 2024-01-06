import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { IAdherentsModel } from "../../models/adherents.model";

@Injectable({
    providedIn: "root"
})
export class AdherentsService {
    private readonly apiUrl = '/api/adherents';

    private adherent: IAdherentsModel[] = [
        {
            id: "adherent-0",
            nom: "Les adhérents du BDE Info Contact",
            prenom: "",
            role: "",
            imgUrl: ""
        },
        {
            id: "adherent-1",
            nom: "nom-1",
            prenom: "prenom-1",
            role: "adhérent",
            imgUrl: "assets/adherents/adherent-1.png"
        },
        {
            id: "adherent-2",
            nom: "nom-2",
            prenom: "prenom-2",
            role: "adhérent",
            imgUrl: "assets/adherents/adherent-2.png"
        },
        {
            id: "adherent-3",
            nom: "nom-3",
            prenom: "prenom-3",
            role: "adhérent",
            imgUrl: "assets/adherents/adherent-3.png"
        },
        {
            id: "adherent-4",
            nom: "nom-4",
            prenom: "prenom-4",
            role: "adhérent",
            imgUrl: "assets/adherents/adherent-4.png"
        },
        {
            id: "adherent-5",
            nom: "nom-5",
            prenom: "prenom-5",
            role: "adhérent",
            imgUrl: "assets/adherents/adherent-5.png"
        },
        {
            id: "adherent-6",
            nom: "nom-6",
            prenom: "prenom-6",
            role: "adhérent",
            imgUrl: "assets/adherents/adherent-6.png"
        },
        {
            id: "adherent-7",
            nom: "nom-7",
            prenom: "prenom-7",
            role: "adhérent",
            imgUrl: "assets/adherents/adherent-7.png"
        },
        {
            id: "adherent-8",
            nom: "nom-8",
            prenom: "prenom-8",
            role: "adhérent",
            imgUrl: "assets/adherents/adherent-8.png"
        },
        {
            id: "adherent-9",
            nom: "nom-9",
            prenom: "prenom-9",
            role: "adhérent",
            imgUrl: "assets/adherents/adherent-9.png"
        },
        {
            id: "adherent-10",
            nom: "nom-10",
            prenom: "prenom-10",
            role: "adhérent",
            imgUrl: "assets/adherents/adherent-10.png"
        },
        {
            id: "adherent-11",
            nom: "nom-11",
            prenom: "prenom-11",
            role: "adhérent",
            imgUrl: "assets/adherents/adherent-11.png"
        }
    ]

    constructor(private http: HttpClient) { }

    getAdherentByID(id: string): IAdherentsModel | null{

        for (let contenu of this.adherent) {
            if(contenu.id == id){
                return(contenu);
            }
        }
        return(null);

        //return this.http.get<IAdherentModel>(`${this.apiUrl}/${id}`);
    }

    getAdherents(category: string): Observable<IAdherentsModel[]> {


        return of(this.adherent);
        //return this.http.get<IAdherentModel>(`${this.apiUrl}/${category}/all`);
    }
}
