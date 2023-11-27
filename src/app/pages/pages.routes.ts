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
                path: "account",
                loadComponent: () => import("./components/account/account.component").then(module => module.AccountComponent)
            },
            {
                path: "panier",
                loadComponent: () => import("./components/panier/panier.component").then(module => module.PanierComponent)
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
            },
            {
                path: "event",
                loadComponent: () => import("./components/event/event.component").then(module => module.EventComponent)
            },
            {
                path: "article",
                loadComponent: () => import("./components/article/article.component").then(module => module.ArticleComponent)
            }
        ]
    }
] as Routes;
