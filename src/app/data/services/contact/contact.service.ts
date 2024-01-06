import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {IContactModel} from "../../models/contact.model";

@Injectable({
    providedIn: "root"
})
export class ContactService {
    private readonly apiUrl = '/api/contact';

    private contact: IContactModel[] = [
        {
            id: 'contact-0',
            titre: 'Formulaire de contact',
            nom: 'Nom',
            prenom: 'Prénom',
            email: 'E-mail',
            contenu: 'Votre message',
            bouton: 'Envoyer'
        }
    ]

    constructor(private http: HttpClient) { }

    getContactByID(id: string): IContactModel | null{

        for (let contenu of this.contact) {
            if(contenu.id == id){
                return(contenu);
            }
        }
        return(null);

        //return this.http.get<IContactModel>(`${this.apiUrl}/${id}`);
    }

    getContact(category: string): Observable<IContactModel[]> {


        return of(this.contact);
        //return this.http.get<IContactModel>(`${this.apiUrl}/${category}/all`);
    }
}
