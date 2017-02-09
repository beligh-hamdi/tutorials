import {Component, OnInit, Input} from '@angular/core';
import {Ebook} from "../../../../shared/models/ebook";

@Component({
  selector: 'app-ebook-list',
  templateUrl: './ebook-list.component.html',
  styleUrls: ['./ebook-list.component.css']
})
export class EbookListComponent implements OnInit {
  @Input() ebooks: Array<Ebook>;

  ebook: Ebook;

  constructor() { }

  ngOnInit() {
  }

  getDetails(ebook) {
    this.ebook = Object.assign({}, ebook);
  }

}
