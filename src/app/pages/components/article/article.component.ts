import {Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import {ActiveDirective} from "../../directives/active.directive";
import {RouterLink} from "@angular/router";
import {IArticleModel} from "../../../data/models/article.model";
import {ArticleService} from "../../../data/services/article/article.service";

@Component({
    selector: 'app-article',
    standalone: true,
    imports: [CommonModule, ActiveDirective, RouterLink],
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    article: IArticleModel[][] = [];

    constructor(private articleService: ArticleService) {
    }

    ngOnInit() {
        this.articleService.getArticle("article").subscribe(data =>{
            this.article[0] = data.filter(article => article.id == "article-0")
        });
    }

}
