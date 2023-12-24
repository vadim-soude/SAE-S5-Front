import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProductModel} from "../../models/product.model";

@Injectable({
  providedIn: "root"
})
export class ProductService {
    private readonly apiUrl = "/api/product";

    private products: IProductModel[] = [
        // {
        //     id_produit: "9a3b1907-549a-4e2e-8365-291ffb45f48b",
        //     nom: "Kinder Bueno",
        //     imageUrl: "assets/product/kinder_bueno.png",
        //     prix_non_adherent: .9,
        //     prix_adherent: .8,
        //     stock: 10
        // },
        // {
        //     id_produit: "8f5f0005-cf9e-46c9-863e-930ffc917269",
        //     nom: "Kinder Bueno White",
        //     imageUrl: "assets/product/kinder_bueno_white.png",
        //     prix_non_adherent: .9,
        //     prix_adherent: .8,
        //     stock: 10
        // },
        // {
        //     id_produit: "73b7e7c2-e3bb-475d-ae92-b9c62b89157a",
        //     nom: "Snickers",
        //     imageUrl: "assets/product/snickers.png",
        //     prix_non_adherent: .7,
        //     prix_adherent: .6,
        //     stock: 4
        // },
        // {
        //     id_produit: "e7af4478-a694-4d8e-8265-eecebffffcf1",
        //     nom: "Mars",
        //     imageUrl: "assets/product/mars.png",
        //     prix_non_adherent: .7,
        //     prix_adherent: .6,
        //     stock: 3
        // },
        // {
        //     id_produit: "811379a6-6298-4ec0-aad6-adba03261c88",
        //     nom: "KitKat",
        //     imageUrl: "assets/product/kitkat.png",
        //     prix_non_adherent: .5,
        //     prix_adherent: .4,
        //     stock: 15
        // },
        // {
        //     id_produit: "811379a6-6298-4ec0-aad6-adba03261c87",
        //     nom: "Twix",
        //     imageUrl: "assets/product/twix.png",
        //     prix_non_adherent: .5,
        //     prix_adherent: .4,
        //     stock: 15
        // },
        // {
        //     id_produit: "81e65972-a120-4384-9b05-f7486bb96bfa",
        //     nom: "M&M's 330g",
        //     imageUrl: "assets/product/m&ms330.png",
        //     prix_non_adherent: 3.2,
        //     prix_adherent: 3.,
        //     stock: 18
        // }
    ];

    constructor(private http: HttpClient) { }

    getProductByGUID(guid: string): IProductModel | null{

        for (let product of this.products) {
            if(product.idProduit == guid){
                return(product);
            }
        }
        return null;

        //return this.http.get<IProductModel>(`${this.apiUrl}/${guid}`);
    }

    getProducts(category: string): Observable<IProductModel[]> {
        let data = this.http.get<IProductModel[]>(`${this.apiUrl}/${category}/all`)
        data.subscribe(d => console.log(d))
        return data;
    }
}
