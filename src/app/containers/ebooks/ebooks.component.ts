import { Component, OnInit } from '@angular/core';
import { EbooksService } from "../../shared/services/ebooks.service";
import { Ebook } from "../../shared/models/ebook";

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.css']
})
export class EbooksComponent implements OnInit {
  ebooks: Array<Ebook>;
  errorMessage: string;

  constructor(private ebooksService:EbooksService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.ebooksService
      .getAll()
      .subscribe((res: Array<Ebook>) => {
          this.ebooks = res;
      }, error => this.errorMessage = <any>error);
  }

}
