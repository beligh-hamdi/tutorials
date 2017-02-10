import {Component, OnInit, OnDestroy} from '@angular/core';
import {ArticlesService} from "../../shared/services/articles.service";
import {Article} from "../../shared/models/article";
import { Router, ActivatedRoute } from '@angular/router';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  articles: Array<Article>;
  article: Article;
  articleId: number;
  page: number;
  errorMessage: string;

  subscription: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articlesService:ArticlesService
  ) {}

  ngOnInit() {

     this.subscription = this._route
      .queryParams
      .subscribe(params => {
        this.page = +params['page'] || 0;
      });

      this.articleId = +this._route.snapshot.params['id'];
      if(this.articleId) {
        this.getArticle(this.articleId);
      } else {
        this.getArticles();
      }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleArticleSelected(article) {
    this.articleId = +article.id;
    this._router.navigate([`/articles/${this.articleId}`]);
    this.getArticle(this.articleId);
  }

  getArticles() {
    this._articlesService
      .getAll()
      .subscribe((res: Array<Article>) => {
        this.articles = res;
      }, error => this.errorMessage = <any>error);
  }

  getArticle(id) {
    this._articlesService
      .get(id)
      .subscribe((res: Article) => {
        this.article = res;
      }, error => this.errorMessage = <any>error);
  }

}
