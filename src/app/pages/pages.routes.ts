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
                path: "signup",
                loadComponent: () => import("./components/signup/signup.component").then(module => module.SignupComponent)
            },
            {
                path: "cart",
                loadComponent: () => import("./components/cart/cart.component").then(module => module.CartComponent)
            }
        ]
    }
] as Routes;
