import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { EbooksComponent } from './containers/ebooks/ebooks.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ArticlesComponent } from './containers/articles/articles.component';

const routes: Routes = [
 // { path: '', children: [] },
  { path: 'home', component: HomeComponent },
  { path: 'about',        component: AboutComponent },
  { path: 'ebooks',        component: EbooksComponent },
  { path: 'articles',        component: ArticlesComponent },
  { path: 'articles/:id',        component: ArticlesComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
