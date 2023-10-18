import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, HeaderComponent],
    templateUrl: "./app.component.html"
})
export class AppComponent {
    title = "angular-template";
    protected readonly window = window;
    protected readonly console = console;
    protected readonly setTimeout = setTimeout;
}
