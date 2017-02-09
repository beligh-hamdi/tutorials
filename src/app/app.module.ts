import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EbooksComponent } from './ebooks/ebooks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {EbooksService} from "./shared/services/ebooks.service";


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EbooksComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  providers: [
      EbooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
