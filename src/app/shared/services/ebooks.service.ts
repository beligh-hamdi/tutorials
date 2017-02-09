import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class EbooksService {

  apiPath: string = 'assets/data/ebooks.json';


  constructor(private http:Http) { }


  getAll(): Observable<any>{
    return this.http.get(`${this.apiPath}`)
        .map((res: Response) => res.json())
        .catch(this.handleError);
  }

  add(ebook) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(ebook);
    return this.http.post('/api/food/', body, headers).map((res: Response) => res.json());
  }

  update(ebook, ebook_id) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(ebook);
    return this.http.put(`${this.apiPath}/ebook_id` , body, headers).map((res: Response) => res.json());
  }

  remove(ebook_id) {
    return this.http.delete(`${this.apiPath}/ebook_id` + ebook_id);
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
