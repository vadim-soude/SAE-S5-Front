import { Component, OnInit, inject } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ProductService } from "../../../data/services/product/product.service";
import { IProductModel } from "../../../data/models/product.model";
import { IProductsModel } from "../../../data/models/products.model";
import {CacheService} from "../../../data/services/cache/cache.service";
import { AuthService } from "../../../data/auth/auth.service";

@Component({
    selector: "app-shop",
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.css"]
})

export class CartComponent implements OnInit {

    products: IProductsModel[] = [];
    isPref: boolean = false;
    isConditionOk: boolean = false;
    productMap = new Map<IProductModel,number>();
    totalPrice: number = 0;
    totalPricePref: number = 0;
    totalPriceDisplay: number = 0;
    auth = inject(AuthService);

    constructor(private productService: ProductService, private cacheService : CacheService) { }

    ngOnInit() {
        let cachePanier = this.cacheService.get("cart");

        if(cachePanier == null){
            cachePanier = "";
        }

        if(this.auth.isSubscribe()){
            this.isPref = true;
            this.getTotalPrice();
        }

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
        this.getTotalPrice();

    }

    modifyQuantity(productID: string, quantityChange: number):void{
        let index = this.getProductIndex(productID)
        if(index != null){
            this.products[index].quantity = this.products[index].quantity + quantityChange;
            if(this.products[index].quantity <= 0){
                this.products.splice(index,1)
            }
        }
        this.setContent(this.products);
    }

    setContent(products: IProductsModel[]):void{
        let tempString = "";
        for (const product of products) {
            for (let i = 0; i < product.quantity; i++) {
                if(tempString == ""){
                    tempString = product.product.idProduit;
                }else{
                    tempString = tempString + "|" + product.product.idProduit;
                }
            }
        }
        this.cacheService.set("cart",tempString);
        this.getTotalPrice();
    }

    getTotalPrice(){
        console.log(this.isPref)
        this.totalPrice = 0;
        this.totalPricePref = 0;
        for (const products of this.products) {
            this.totalPrice = this.totalPrice + (products.quantity * products.product.prixAdherent);
            this.totalPricePref = this.totalPricePref + (products.quantity * products.product.prixAdherent);
        }
        if(this.isPref){
            this.totalPriceDisplay = this.totalPricePref
        }else{
            this.totalPriceDisplay = this.totalPrice
        }
    }

    debugSwitch():void{
        if(this.isPref){
            this.isPref = false;
        }else{
            this.isPref = true;
        }
        this.getTotalPrice()
    }

    debugSwitch2():void{
        if(this.isConditionOk){
            this.isConditionOk = false;
        }else{
            this.isConditionOk = true;
        }
        this.getTotalPrice()
    }

    clearProduct():void{
        this.cacheService.set("cart","");
        window.location.reload();
    }

    getProductIndex(productGUID: string) : number | null{
        let prod = this.products.find((element) => element.product.idProduit == productGUID)
        let index = -1;
        if (prod) {
            index = this.products.indexOf(prod);
        }
        if(index != -1){
            return index;
        }else{
            return null;
        }
    }

    getProductPrice(product: IProductModel, isPref: boolean): number {
        let index = this.getProductIndex(product.idProduit)
        let quantity = 0;
        if(index != null){
            quantity = this.products[index].quantity
        }
        if(isPref){
            return product.prixAdherent * quantity;
        }else{
            return product.prixAdherent * quantity;
        }
    }



}
