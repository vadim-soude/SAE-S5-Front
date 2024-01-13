import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { IHomeModel } from "../../models/home.model";

@Injectable({
    providedIn: "root"
})
export class HomeService {
    private readonly apiUrl  = '/api/home';

    private home: IHomeModel[] = [
        {
            id: "contenu-1",
            nom: "Présentation du BDE Info Contact",
            content: "L'association Info Contact, rassemble les étudiants en informatique pour organiser diverses activités, telles que des soirées et événements en tout genre. Ces initiatives renforcent les liens entre les étudiants, favorisent l'échange de connaissances et améliorent la vie étudiante, contribuant ainsi à un impact social positif au sein de la communauté universitaire.",
            nomPartenaire: "",
            imageURL: ""
        },
        {
            id: "contenu-3",
            nom: "Nos partenaires",
            content: "",
            nomPartenaire: "",
            imageURL: ""
        },
        {
            id: "contenu-4",
            nom: "Secret Première",
            content: "",
            nomPartenaire: "Secret Première",
            imageURL: "assets/home/secret_premiere_logo.png"
        },
        {
            id: "contenu-5",
            nom: "Nono",
            content: "",
            nomPartenaire: "Nono",
            imageURL: "assets/home/nono_logo.png"
        },
        {
            id: "contenu-6",
            nom: "Network Bar",
            content: "",
            nomPartenaire: "Network Bar",
            imageURL: "assets/home/network_bar_logo.png"
        }
    ]

    constructor(private http: HttpClient) { }

    getHomeByID(id: string): IHomeModel | null{

        for (let contenu of this.home) {
            if(contenu.id == id){
                return(contenu);
            }
        }
        return(null);

        //return this.http.get<IHomeModel>(`${this.apiUrl}/${id}`);
    }

    getHome(category: string): Observable<IHomeModel[]> {


        return of(this.home);
        //return this.http.get<IHomeModel>(`${this.apiUrl}/${category}/all`);
    }
}
