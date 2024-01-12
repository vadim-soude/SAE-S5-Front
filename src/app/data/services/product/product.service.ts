import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IProductModel} from "../../models/product.model";

@Injectable({
  providedIn: "root"
})
export class ProductService {
    private readonly apiUrl = "/api/product";

    private products: IProductModel[] = [
        {
            idProduit: "9a3b1907-549a-4e2e-8365-291ffb45f48b",
            nom: "Kinder Bueno",
            imageUrl: "assets/product/kinder_bueno.png",
            prixNonAdherent: .9,
            prixAdherent: .8,
            stock: 10,
            description: "",
            categorie: "SNACK",
            PrixFournisseur: 1.0,

        },
        {
            idProduit: "8f5f0005-cf9e-46c9-863e-930ffc917269",
            nom: "Kinder Bueno White",
            imageUrl: "assets/product/kinder_bueno_white.png",
            prixNonAdherent: .9,
            prixAdherent: .8,
            stock: 10,
            description: "",
            categorie: "SNACK",
            PrixFournisseur: 1.0,
        },
        {
            idProduit: "73b7e7c2-e3bb-475d-ae92-b9c62b89157a",
            nom: "Snickers",
            imageUrl: "assets/product/snickers.png",
            prixNonAdherent: .7,
            prixAdherent: .6,
            stock: 4,
            description: "",
            categorie: "SNACK",
            PrixFournisseur: 1.0,
        },
        {
            idProduit: "e7af4478-a694-4d8e-8265-eecebffffcf1",
            nom: "Mars",
            imageUrl: "assets/product/mars.png",
            prixNonAdherent: .7,
            prixAdherent: .6,
            stock: 3,
            description: "",
            categorie: "SNACK",
            PrixFournisseur: 1.0,
        },
        {
            idProduit: "811379a6-6298-4ec0-aad6-adba03261c88",
            nom: "KitKat",
            imageUrl: "assets/product/kitkat.png",
            prixNonAdherent: .5,
            prixAdherent: .4,
            stock: 15,
            description: "",
            categorie: "SNACK",
            PrixFournisseur: 1.0,
        },
        {
            idProduit: "811379a6-6298-4ec0-aad6-adba03261c87",
            nom: "Twix",
            imageUrl: "assets/product/twix.png",
            prixNonAdherent: .5,
            prixAdherent: .4,
            stock: 15,
            description: "",
            categorie: "SNACK",
            PrixFournisseur: 1.0,
        },
        {
            idProduit: "81e65972-a120-4384-9b05-f7486bb96bfa",
            nom: "M&M's 330g",
            imageUrl: "assets/product/m&ms330.png",
            prixNonAdherent: 3.2,
            prixAdherent: 3.,
            stock: 18,
            description: "",
            categorie: "SNACK",
            PrixFournisseur: 1.0,
        }
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

        //let data = this.http.get<IProductModel[]>(`${this.apiUrl}/${category}/all`)
        //data.subscribe(d => console.log(d))
        //return data;

        return of(this.products);
    }
}
