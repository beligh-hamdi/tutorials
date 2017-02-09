import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { EbooksService } from "./shared/services/ebooks.service";

import { AppComponent } from './containers/app.component';
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { EbooksComponent } from './containers/ebooks/ebooks.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EbooksComponent,
    PageNotFoundComponent,
    LanguageSwitcherComponent,
    SideNavComponent
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
