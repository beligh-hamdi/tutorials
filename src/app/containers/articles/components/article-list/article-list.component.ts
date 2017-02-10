import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Article} from "../../../../shared/models/article";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Array<Article>;
  @Output() articleSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelectArticle(article) {
    this.articleSelected.emit(article);
  }

}
