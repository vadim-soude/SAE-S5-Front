import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {IAccountModel} from "../../models/account.model";
import {CacheService} from "../cache/cache.service";

@Injectable({
    providedIn: "root"
})
export class AccountService {
    private readonly apiUrl = '/api/about';

    private account: IAccountModel[] = [
        {
            id: "profil-1",
            titre: "Profil de",
            nomUser: this.cacheService.get("account-firstName") + " " + this.cacheService.get("account-lastName"),
            imageUrl: this.cacheService.get("account-ppImageUrl"),
            btnImage: "Importer une image",
            labelPrenom: "Prénom : ",
            prenom: this.cacheService.get("account-firstName"),
            labelNom: "Nom : ",
            nom: this.cacheService.get("account-lastName"),
            labelEmail: "Email : ",
            email: this.cacheService.get("account-mailUpjv"),
            labelStatut: "Statut : ",
            statut: this.cacheService.get("account-statut"),
            labelBirthday: "Date d'anniversaire : ",
            birthday: this.cacheService.get("account-birthDate"),
            labelDiscord: "Pseudo Discord : ",
            nameDiscord: this.cacheService.get("account-discordUsername"),
            btnDiscord: "Reset Discord",
            labelCommentaire: "Commentaire : ",
            commentaire: this.cacheService.get("account-description"),
            btnCommentaire: "Modifier"
        }
    ]

    constructor(private http: HttpClient, private cacheService : CacheService) { }

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
