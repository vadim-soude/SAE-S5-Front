import { Component, OnInit } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ProductService } from "../../../data/services/product/product.service";
import { IProductModel } from "../../../data/models/product.model";
import { IProductsModel } from "../../../data/models/products.model";
import {CacheService} from "../../../data/services/cache/cache.service";

@Component({
    selector: "app-shop",
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: "./panier.component.html",
    styleUrls: ["./panier.component.css"]
})

export class PanierComponent implements OnInit {

    products: IProductsModel[] = [];
    productMap = new Map<IProductModel,number>();

    constructor(private productService: ProductService, private cacheService : CacheService) { }

    ngOnInit() {
        var cachePanier = this.cacheService.get("panier");
        for (let cachePanierElement of cachePanier.split("|")) {
            if(cachePanierElement != ''){
                let product = this.productService.getProductByGUID(cachePanierElement);
                if(product != null){
                    if(this.productMap.has(product)){
                        // @ts-ignore
                        this.productMap.set(product,this.productMap.get(product)+1);
                    }else{
                        this.productMap.set(product,1);
                    }
                }
            }
        }
        for (let productMapElement of this.productMap) {
            this.products.push({product: productMapElement[0], quantity: productMapElement[1]});
        }
    }

    modifyQuantity(productID: string, quantityChange: number):void{
        let prod = this.products.find((element) => element.product.guid == productID)
        let index = -1;
        if (prod) {
            index = this.products.indexOf(prod);
        }
        if(index != -1){
            this.products[index].quantity = this.products[index].quantity + quantityChange;
        }
        if(this.products[index].quantity <= 0){
            this.products.splice(index,1)
        }
        this.setContent(this.products);
    }

    setContent(products: IProductsModel[]):void{
        let tempString = "";
        for (const product of products) {
            for (let i = 0; i < product.quantity; i++) {
                if(tempString == ""){
                    tempString = product.product.guid;
                }else{
                    tempString = tempString + "|" + product.product.guid;
                }
            }
        }
        this.cacheService.set("panier",tempString);
    }

    clearProduct():void{
        this.cacheService.set("panier","");
        window.location.reload();
    }

}
