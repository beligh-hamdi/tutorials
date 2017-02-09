import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string;
  links:Array<any>;


  ngOnInit() {
    this.title = 'Tutorials App';

    this.links = [
      {title: 'HOME', path: '/home'},
      {title: 'ABOUT', path: '/about'},
      {title: 'EBOOKS', path: '/ebooks'}
    ];

  }


}
