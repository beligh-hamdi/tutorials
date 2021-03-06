import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { counterReducer } from './shared/reducers';

import { EbooksService } from "./shared/services/ebooks.service";

import { AppComponent } from './containers/app.component';
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { EbooksComponent } from './containers/ebooks/ebooks.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { EbookComponent } from './containers/ebooks/components/ebook/ebook.component';
import { EbookListComponent } from './containers/ebooks/components/ebook-list/ebook-list.component';
import { EbookDetailsComponent } from './containers/ebooks/components/ebook-details/ebook-details.component';
import { ArticlesComponent } from './containers/articles/articles.component';
import { ArticleDetailsComponent } from './containers/articles/components/article-details/article-details.component';
import { ArticleListComponent } from './containers/articles/components/article-list/article-list.component';
import { ArticlesService } from "./shared/services/articles.service";


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
    SideNavComponent,
    EbookComponent,
    EbookListComponent,
    EbookDetailsComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    ArticleListComponent
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
    }),
    FlexLayoutModule.forRoot(),
    StoreModule.provideStore({ counter: counterReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [
      EbooksService,
      ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
