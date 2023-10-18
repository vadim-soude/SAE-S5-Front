import { Routes } from "@angular/router";


export const routes: Routes = [
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
