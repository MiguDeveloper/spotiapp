import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistaComponent} from './components/artista/artista.component';
import {NgStyleComponent} from './components/ng-style/ng-style.component';
import {NgSwitchComponent} from './components/ng-switch/ng-switch.component';
import {UsuarioComponent} from './components/usuario/usuario.component';
import {USUARIO_ROUTES} from './components/usuario/usuario.routes';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artista', component: ArtistaComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'artist/:id', component: ArtistaComponent},
  {path: 'ngstyle', component: NgStyleComponent},
  {path: 'directivas', redirectTo: 'ngstyle'},
  {path: 'ngswitch', component: NgSwitchComponent},
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: USUARIO_ROUTES
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
