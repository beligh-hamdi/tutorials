import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string;
  links:Array<any>;


  constructor(private _location: Location){}


  ngOnInit() {
    this.title = 'Tutorials App';

    this.links = [
      {title: 'HOME', path: '/home'},
      {title: 'ABOUT', path: '/about'},
      {title: 'EBOOKS', path: '/ebooks'}
    ];
  }

  backClicked() {
    this._location.back();
  }

  forwardClicked() {
    this._location.forward();
  }


}
