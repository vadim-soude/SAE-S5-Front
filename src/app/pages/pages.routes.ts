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
                path: "projects",
                loadComponent: () => import("./components/projects/projects.component").then(module => module.ProjectsComponent)
            },
            {
                path: "shop",
                loadComponent: () => import("./components/shop/shop.component").then(module => module.ShopComponent)
            },
            {
                path: "login",
                loadComponent: () => import("./components/login/login.component").then(module => module.LoginComponent)
            },
            {
                path: "account",
                loadComponent: () => import("./components/account/account.component").then(module => module.AccountComponent)
            },
            {
                path: "signup",
                loadComponent: () => import("./components/signup/signup.component").then(module => module.SignupComponent)
            },
            {
                path: "cart",
                loadComponent: () => import("./components/cart/cart.component").then(module => module.CartComponent)
            },
            {
                path: "actualites",
                loadComponent: () => import("./components/actualites/actualites.component").then(module => module.ActualitesComponent)
            },
            {
                path: "membresBureau",
                loadComponent: () => import("./components/membresBureau/membresBureau.component").then(module => module.MembresBureauComponent)
            },
            {
                path: "adherents",
                loadComponent: () => import("./components/adherents/adherents.component").then(module => module.AdherentsComponent)
            }
        ]
    }
] as Routes;
