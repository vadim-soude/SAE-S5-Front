import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { IProductModel } from "../../models/product.model";

@Injectable({
  providedIn: "root"
})
export class ProductService {
    private readonly apiUrl = "/api/product";

    private products: IProductModel[] = [
        {
            guid: "9a3b1907-549a-4e2e-8365-291ffb45f48b",
            name: "Kinder Bueno",
            imageUrl: "assets/product/kinder_bueno.png",
            price: .9,
            pricePref: .8,
            stock: 10
        },
        {
            guid: "8f5f0005-cf9e-46c9-863e-930ffc917269",
            name: "Kinder Bueno White",
            imageUrl: "assets/product/kinder_bueno_white.png",
            price: .9,
            pricePref: .8,
            stock: 10
        },
        {
            guid: "73b7e7c2-e3bb-475d-ae92-b9c62b89157a",
            name: "Snickers",
            imageUrl: "assets/product/snickers.png",
            price: .7,
            pricePref: .6,
            stock: 4
        },
        {
            guid: "e7af4478-a694-4d8e-8265-eecebffffcf1",
            name: "Mars",
            imageUrl: "assets/product/mars.png",
            price: .7,
            pricePref: .6,
            stock: 3
        },
        {
            guid: "811379a6-6298-4ec0-aad6-adba03261c88",
            name: "KitKat",
            imageUrl: "assets/product/kitkat.png",
            price: .5,
            pricePref: .4,
            stock: 15
        },
        {
            guid: "811379a6-6298-4ec0-aad6-adba03261c88",
            name: "Twix",
            imageUrl: "assets/product/twix.png",
            price: .5,
            pricePref: .4,
            stock: 15
        },
        {
            guid: "81e65972-a120-4384-9b05-f7486bb96bfa",
            name: "M&M's 330g",
            imageUrl: "assets/product/m&ms330.png",
            price: 3.2,
            pricePref: 3.,
            stock: 18
        }
    ];

    constructor(private http: HttpClient) { }

    getProductByGUID(guid: string): IProductModel | null{

        for (let product of this.products) {
            if(product.guid == guid){
                return(product);
            }
        }
        return(null);

        //return this.http.get<IProductModel>(`${this.apiUrl}/${guid}`);
    }

    getProducts(category: string): Observable<IProductModel[]> {


        return of(this.products);
        //return this.http.get<IProductModel>(`${this.apiUrl}/${category}/all`);
    }
}
