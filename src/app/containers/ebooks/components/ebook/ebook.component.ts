import {Component, OnInit, Input} from '@angular/core';
import {Ebook} from "../../../../shared/models/ebook";

@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.component.html',
  styleUrls: ['./ebook.component.css']
})
export class EbookComponent implements OnInit {
  @Input() ebook: Ebook;

  constructor() { }

  ngOnInit() {
  }

}
