import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { IMembresBureauModel } from "../../models/membresBureau.model";

@Injectable({
    providedIn: "root"
})
export class MembresBureauService {
    private readonly apiUrl  = '/api/membresBureau';

    private membresBureau: IMembresBureauModel[] = [
        {
            id: "membre-0",
            nom: "NomPrésident",
            prenom: "PrénomPrésident",
            role: "Président",
            category: "Présidence",
            imageURL: "assets/membresBureau/président.png"
        },
        {
            id: "membre-1",
            nom: "NomVice-Président",
            prenom: "PrénomVice-Président",
            role: "Vice-Président",
            category: "Présidence",
            imageURL: "assets/membresBureau/vice-président.png"
        },
        {
            id: "membre-2",
            nom: "NomTrésorier",
            prenom: "PrénomTrésorier",
            role: "Trésorier",
            category: "Trésorie",
            imageURL: "assets/membresBureau/tresorier.png"
        },
        {
            id: "membre-3",
            nom: "NomVice-Trésorier",
            prenom: "PrénomVice-Trésorier",
            role: "Vice-Trésorier",
            category: "Trésorie",
            imageURL: "assets/membresBureau/vice-tresorier.png"
        },
        {
            id: "membre-4",
            nom: "NomSecrétaire",
            prenom: "PrénomSecrétaire",
            role: "Secrétaire",
            category: "Secrétaria",
            imageURL: "assets/membresBureau/secretaire.png"
        },
        {
            id: "membre-5",
            nom: "NomVice-Secrétaire",
            prenom: "PrénomVice-Secrétaire",
            role: "Vice-Secrétaire",
            category: "Secrétaria",
            imageURL: "assets/membresBureau/vice-secretaire.png"
        },
        {
            id: "membre-6",
            nom: "NomCoordinateurG",
            prenom: "PrénomCoordinateurG",
            role: "Coordinateur Général",
            category: "Coordinateur Général",
            imageURL: "assets/membresBureau/coordinateur-general.png"
        },
        {
            id: "membre-7",
            nom: "NomCommunicateur1",
            prenom: "PrénomCommunicateur1",
            role: "Communicateur 1",
            category: "Pôle Communication",
            imageURL: "assets/membresBureau/communicateur-1.png"
        },
        {
            id: "membre-8",
            nom: "NomCommunicateur2",
            prenom: "PrénomCommunicateur2",
            role: "Communicateur 2",
            category: "Pôle Communication",
            imageURL: "assets/membresBureau/communicateur-2.png"
        },
        {
            id: "membre-9",
            nom: "NomEvenement1",
            prenom: "PrénomEvenement1",
            role: "Evenement 1",
            category: "Pôle Évènementiel",
            imageURL: "assets/membresBureau/evenement-1.png"
        },
        {
            id: "membre-10",
            nom: "NomEvenement2",
            prenom: "PrénomEvenement2",
            role: "Evenement 2",
            category: "Pôle Évènementiel",
            imageURL: "assets/membresBureau/evenement-2.png"
        }
    ]

    constructor(private http: HttpClient) { }

    getMembresBureauByID(id: string): IMembresBureauModel | null{

        for (let contenu of this.membresBureau) {
            if(contenu.id == id){
                return(contenu);
            }
        }
        return(null);

        //return this.http.get<IMembresBureauModel>(`${this.apiUrl}/${id}`);
    }

    getMembresBureau(category: string): Observable<IMembresBureauModel[]> {


        return of(this.membresBureau);
        //return this.http.get<IMembresBureauModel>(`${this.apiUrl}/${category}/all`);
    }
}
