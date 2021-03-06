import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Article} from "../models/article";

@Injectable()
export class ArticlesService {

  apiPath: string = 'assets/data/articles';

  constructor(private http:Http) { }

  getAll(): Observable<Array<Article>>{
    return this.http.get(`${this.apiPath}/articles.json`)
      .map((res: Response) => res.json().articles)
      .catch(this.handleError);
  }

  get(id): Observable<Article>{
    return this.http.get(`${this.apiPath}/${id}.json`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
