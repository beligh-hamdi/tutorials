import {Component, OnInit, Input} from '@angular/core';
import {Ebook} from "../../../../shared/models/ebook";

@Component({
  selector: 'app-ebook-details',
  templateUrl: './ebook-details.component.html',
  styleUrls: ['./ebook-details.component.css']
})
export class EbookDetailsComponent implements OnInit {
  @Input() ebook: Ebook;
  constructor() { }

  ngOnInit() {
  }

}
