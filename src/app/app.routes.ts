import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistaComponent} from './components/artista/artista.component';
import {NgStyleComponent} from './components/ng-style/ng-style.component';
import {NgSwitchComponent} from './components/ng-switch/ng-switch.component';
import {UsuarioComponent} from './components/usuario/usuario.component';
import {USUARIO_ROUTES} from './components/usuario/usuario.routes';
import {PreciosComponent} from './components/precios/precios.component';
import {ProtegidaComponent} from './components/protegida/protegida.component';
import {AuthGuard} from './services/auth.guard';
import {FormularioTemplateComponent} from './components/formulario-template/formulario-template.component';
import {FormularioDataReactiveComponent} from './components/formulario-data-reactive/formulario-data-reactive.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {HeroesComponent} from './components/heroes/heroes.component';


const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artista', component: ArtistaComponent},
  {path: 'artist/:id', component: ArtistaComponent},
  {path: 'ngstyle', component: NgStyleComponent},
  {path: 'directivas', redirectTo: 'ngstyle'},
  {path: 'ngswitch', component: NgSwitchComponent},
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: USUARIO_ROUTES
  },
  {path: 'precios', component: PreciosComponent},
  {path: 'protegida', component: ProtegidaComponent, canActivate: [AuthGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'form-template', component: FormularioTemplateComponent},
  {path: 'form-reactive', component: FormularioDataReactiveComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
