import { Component, OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string;
  links:Array<any>;
  currentLanguage:string;
  languages:Array<any>;

  constructor(private translate: TranslateService) {}

  ngOnInit() {

    this.title = 'Tutorials App';

    this.links = [
      {title: 'HOME', path: '/home'},
      {title: 'ABOUT', path: '/about'},
      {title: 'EBOOKS', path: '/ebooks'}
    ];

    this.languages = [
      {name: 'fr', icon: 'fr'},
      {name: 'en', icon: 'gb'}
    ];

    this.currentLanguage = 'en';

    //this.translate.setDefaultLang(this.currentLanguage);

    this.translate.use(this.currentLanguage);

  }

  switchLanguage(lng) {
    this.translate.use(lng);
    this.currentLanguage = this.translate.currentLang;
  }

  isCurrentLanguage(lng) {
   return lng===this.translate.currentLang;
  }

}
