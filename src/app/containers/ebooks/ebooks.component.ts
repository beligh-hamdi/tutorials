import { Component, OnInit } from '@angular/core';
import {EbooksService} from "../../shared/services/ebooks.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.css']
})
export class EbooksComponent implements OnInit {
  ebooks: Array<any>;
  errorMessage: string;

  constructor(private ebooksService:EbooksService) { }

  ngOnInit() {

    this.getAll();

  }

  getAll() {
    this.ebooksService.getAll()
        .subscribe(res => {
          this.ebooks = res.ebooks;
         }, error => this.errorMessage = <any>error);
  }

  add(name) {
    let ebook = {name: name};
    this.ebooksService.add(ebook).subscribe(
        data => {
          // refresh the list
          this.getAll();
          return true;
        },
        error => {
          console.error("Error saving ebook!");
          return Observable.throw(error);
        }
    );
  }

  update(ebook, id) {
    this.ebooksService.update(ebook, id).subscribe(
        data => {
          // refresh the list
          this.getAll();
          return true;
        },
        error => {
          console.error("Error saving ebook!");
          return Observable.throw(error);
        }
    );
  }

  remove(ebook) {
    if (confirm("Are you sure you want to delete " + ebook.name + "?")) {
      this.ebooksService.remove(ebook).subscribe(
          data => {
            // refresh the list
            this.getAll();
            return true;
          },
          error => {
            console.error("Error deleting ebook!");
            return Observable.throw(error);
          }
      );
    }
  }




}
