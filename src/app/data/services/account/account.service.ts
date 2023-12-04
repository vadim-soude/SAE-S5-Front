import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {IAccountModel} from "../../models/account.model";

@Injectable({
    providedIn: "root"
})
export class AccountService {
    private readonly apiUrl = '/api/about';

    private account: IAccountModel[] = [
        {
            id: "profil-1",
            titre: "Profil de",
            nomUser: "Tony Dary",
            imageUrl: "assets/adherent/tony_dary.png",
            btnImage: "Importer une image",
            labelPrenom: "Prénom : ",
            prenom: "Tony",
            labelNom: "Nom : ",
            nom: "Dary",
            labelEmail: "Email : ",
            email: "tony.dary@etud.u-picardie.fr",
            labelStatut: "Statut : ",
            statut: "Adhérent",
            labelBirthday: "Date d'anniversaire : ",
            birthday: "10/05/2003",
            labelDiscord: "Pseudo Discord : ",
            nameDiscord: "jenyo_hazuka",
            btnDiscord: "Reset Discord",
            labelMdp: "Mot de passe : ",
            mdp: "**********",
            btnMdp: "Reset MDP",
            labelCommentaire: "Commentaire : ",
            commentaire: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
            btnCommentaire: "Modifier"
        }
    ]

    constructor(private http: HttpClient) { }

    getAccountByID(id: string): IAccountModel | null{

        for (let contenu of this.account) {
            if(contenu.id == id){
                return(contenu);
            }
        }
        return(null);

        //return this.http.get<IAccountModel>(`${this.apiUrl}/${id}`);
    }

    getAccount(category: string): Observable<IAccountModel[]> {


        return of(this.account);
        //return this.http.get<IAccountModel>(`${this.apiUrl}/${category}/all`);
    }
}
