import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {IHistoriqueModel} from "../../models/historique.model";

@Injectable({
    providedIn: "root"
})
export class HistoriqueService {
    private readonly apiUrl = '/api/Historique';

    private historique: IHistoriqueModel[] = [
        {
            id: "titre-formulaire",
            titre: "Historique d'achat",
            dateAchat: "",
            heureAchat: "",
            nbProduit: 0.,
            numCommande: "",
            imageUrl: "",
            nomProduit: "",
            quantite: 0.,
            taille: "",
            prixUnite: 0.
        },
        {
            id: "commande-1-1",
            titre: "",
            dateAchat: "30/11/2023",
            heureAchat: "17:40:00",
            nbProduit: 2.,
            numCommande: "SU-001",
            imageUrl: "assets/produit/twix.png",
            nomProduit: "Twix",
            quantite: 1.,
            taille: "",
            prixUnite: 0.4
        },
        {
            id: "commande-1-2",
            titre: "",
            dateAchat: "30/11/2023",
            heureAchat: "17:40:00",
            nbProduit: 2.,
            numCommande: "SU-001",
            imageUrl: "assets/produit/mars.png",
            nomProduit: "Twix",
            quantite: 1.,
            taille: "",
            prixUnite: 0.4
        }
    ]

    constructor(private http: HttpClient) { }

    getHistoriqueByID(id: string): IHistoriqueModel | null{

        for (let contenu of this.historique) {
            if(contenu.id == id){
                return(contenu);
            }
        }
        return(null);

        //return this.http.get<IHistoriqueModel>(`${this.apiUrl}/${id}`);
    }

    getHistorique(category: string): Observable<IHistoriqueModel[]> {


        return of(this.historique);
        //return this.http.get<IHistoriqueModel>(`${this.apiUrl}/${category}/all`);
    }
}
