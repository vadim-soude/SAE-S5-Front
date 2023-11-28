import { Routes } from "@angular/router";
import {CartComponent} from "./pages/components/cart/cart.component";
import {AuthGuard} from "./data/auth/AuthGuard";


export const routes: Routes = [
    {
        path: 'page/cart',
        component: CartComponent,
        canActivate: [AuthGuard], // Utilisation du guard
    },
	{
		path: "",
		pathMatch: "full",
		loadComponent: () => import("./home/home.component").then(module => module.HomeComponent)
	},
    {
        path: "",
        loadChildren: () => import("./pages/pages.routes")
    }
]
