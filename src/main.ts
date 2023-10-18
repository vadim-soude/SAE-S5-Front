import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/root/app.component";
import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { importProvidersFrom } from "@angular/core";
import { routes } from "./app/app.routes";

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(),
        provideRouter(routes),
        importProvidersFrom(BrowserModule),
    ]
}).catch(err => console.error(err));

