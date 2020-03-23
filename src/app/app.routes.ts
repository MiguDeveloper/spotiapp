import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistaComponent} from './components/artista/artista.component';
import {NgStyleComponent} from './components/ng-style/ng-style.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artista', component: ArtistaComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'artist/:id', component: ArtistaComponent},
  {path: 'ngstyle', component: NgStyleComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
