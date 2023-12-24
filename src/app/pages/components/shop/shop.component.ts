import { Component, OnInit } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ProductService } from "../../../data/services/product/product.service";
import { IProductModel } from "../../../data/models/product.model";
import {CacheService} from "../../../data/services/cache/cache.service";
import {IProductTypeModel} from "../../../data/models/productType.model";

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
    productCat: IProductTypeModel[] = [
        {
            index: 0,
            text: "boisson"
        },
    ];
    productsIndex = [0, 0, 0, 0, 0];

    constructor(private productService: ProductService, private cacheService : CacheService) { }

    ngOnInit() {
        for (let productCatElement of this.productCat) {
            this.productService.getProducts(productCatElement.text).subscribe(data => {
                this.products[productCatElement.index] = data;
                this.productsDisplayed[productCatElement.index] = data.slice(0, 4);
            });
        }
    }

    addProduct(productID: string): void{
        let data = this.cacheService.get("cart");
        if(!(data == "vide")){
            this.cacheService.set("cart",data+"|"+productID);

        }else{
            this.cacheService.set("cart",productID);
        }
    }

    previousProduct(productsCategory: number): void {
        if (this.productsIndex[productsCategory] === 0) return;
        this.productsIndex[productsCategory] -= 1;
        this.getProducts(productsCategory)
    }

    nextProduct(productsCategory: number): void {
        if(this.products[productsCategory].length < this.productsIndex[productsCategory] + 2) return;
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
