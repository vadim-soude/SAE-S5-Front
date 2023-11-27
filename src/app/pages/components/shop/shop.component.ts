import { Component, OnInit } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ProductService } from "../../../data/services/product/product.service";
import { IProductModel } from "../../../data/models/product.model";
import {CacheService} from "../../../data/services/cache/cache.service";

@Component({
    selector: "app-shop",
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: "./shop.component.html",
    styleUrls: ["./shop.component.css"]
})

export class ShopComponent implements OnInit {
    numberProductsDisplayed = 4;
    products: IProductModel[][] = [];
    productsDisplayed: IProductModel[][] = [];
    productsIndex = [0, 0, 0, 0, 0];

    constructor(private productService: ProductService, private cacheService : CacheService) { }

    ngOnInit() {

        this.productService.getProducts("snack").subscribe(data => {
            this.products[0] = data;
            this.productsDisplayed[0] = data.slice(0, 4);
        });
        this.productService.getProducts("drink").subscribe(data => {
            this.products[1] = data;
            this.productsDisplayed[1] = data.slice(0, 4);
        });
        this.productService.getProducts("derived").subscribe(data => {
            this.products[2] = data;
            this.productsDisplayed[2] = data.slice(0, 4);
        });
        this.productService.getProducts("monster").subscribe(data => {
            this.products[3] = data;
            this.productsDisplayed[3] = data.slice(0, 4);
        });
        this.productService.getProducts("event").subscribe(data => {
            this.products[4] = data;
            this.productsDisplayed[4] = data.slice(0, 4);
        });
    }


    addProduct(productID: string): void{

        let data = this.cacheService.get("cart");

        if(!(data == "vide")){
            this.cacheService.set("cart",data+"|"+productID);

        }else{
            this.cacheService.set("cart",productID);
        }
        // console.log(this.cacheService.get("cart"));
    }

    previousProduct(productsCategory: number): void {
        if (this.productsIndex[productsCategory] === 0) return;
        this.productsIndex[productsCategory] -= 1;

        this.getProducts(productsCategory)
    }

    nextProduct(productsCategory: number): void {
        if (this.productsIndex[productsCategory] === this.products[productsCategory].length - this.numberProductsDisplayed) return;
        this.productsIndex[productsCategory] += 1;

        this.getProducts(productsCategory);
    }


    private getProducts(productsCategory: number) {
        const products = this.products[productsCategory];
        const index = this.productsIndex[productsCategory];

        this.productsDisplayed[productsCategory] = products.slice(index, index + this.numberProductsDisplayed);
    }
}
