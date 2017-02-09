import { Component, OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent implements OnInit {

  currentLanguage:string;

  constructor(private translate: TranslateService, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('flag-fr',  sanitizer.bypassSecurityTrustResourceUrl('assets/images/flags/fr.svg'));
    iconRegistry.addSvgIcon('flag-gb',  sanitizer.bypassSecurityTrustResourceUrl('assets/images/flags/gb.svg'));
  }

  ngOnInit() {
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
