import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {IEventModel} from "../../models/event.model";

@Injectable({
    providedIn: "root"
})
export class EventService {
    private readonly apiUrl = '/api/event';

    private event: IEventModel[] = [
        {
            id: "event-0",
            nom: "nom event",
            imageUrl: "assets/event/event-0.png",
            corps: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna laoreet
            massa suscipit ultrices. Quisque viverra vulputate nisi, sed congue orci maximus ut. Aenean cursus
            metus a neque molestie, et sodales arcu laoreet. Pellentesque non iaculis felis. Sed auctor libero
            ut finibus vestibulum. Quisque massa nisi, tempus dictum neque ac, posuere vehicula ex. Vestibulum
            facilisis egestas interdum.

            Fusce ultricies neque id luctus mattis. Aliquam vitae purus nec sapien pulvinar congue vel id sem.
            Donec in tortor eget nunc dignissim maximus. Maecenas pulvinar facilisis leo, at elementum est
            consectetur ut. Donec ornare consequat lectus et volutpat. Fusce elementum, odio eget sodales tempus,
            mauris nisi fermentum dui, non aliquet nisl ante sit amet lorem. Integer ac justo viverra, mollis
            nulla at, commodo nisi. Fusce consequat, lorem ac facilisis bibendum, diam odio ornare diam, eget
            vulputate nibh ex sit amet turpis. Vestibulum et turpis arcu. Sed quis volutpat leo. Nullam tempor
            ultricies volutpat. Nam auctor lorem et odio consequat maximus.`,
            dateDeb: "Lun. 27 Nov. 2023",
            dateFin: "Ven. 01 Déc. 2023",
            lieu: "IUT Amiens",
            condition: "Pour participer à l'évènement, il faudra présenter une carte étudiante.",
            auteur: "Tony Dary",
            dateModif: "Lun. 27 Nov. 2023"
        }
    ]

    constructor(private http: HttpClient) { }

    getEventByID(id: string): IEventModel | null{

        for (let contenu of this.event) {
            if(contenu.id == id){
                return(contenu);
            }
        }
        return(null);

        //return this.http.get<IEventModel>(`${this.apiUrl}/${id}`);
    }

    getEvent(category: string): Observable<IEventModel[]> {


        return of(this.event);
        //return this.http.get<IEventModel>(`${this.apiUrl}/${category}/all`);
    }
}
