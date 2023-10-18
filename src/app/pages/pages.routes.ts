import { Routes } from "@angular/router";

export default [
    {
        path: "page",
        providers: [],
        children: [
            {
                path: "about",
                loadComponent: () => import("./components/about/about.component").then(module => module.AboutComponent)
            },
            {
                path: "shop",
                loadComponent: () => import("./components/shop/shop.component").then(module => module.ShopComponent)
            },
            {
                path: "account",
                loadComponent: () => import("./components/account/account.component").then(module => module.AccountComponent)
            },
            {
                path: "panier",
                loadComponent: () => import("./components/panier/panier.component").then(module => module.PanierComponent)
            }
        ]
    }
] as Routes;
