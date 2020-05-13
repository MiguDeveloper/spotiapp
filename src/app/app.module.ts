import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistaComponent} from './components/artista/artista.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {APP_ROUTING} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {NoimagesPipe} from './pipes/noimages.pipe';
import {TarjetasComponent} from './components/shared/tarjetas/tarjetas.component';
import {LoadingComponent} from './components/shared/loading/loading.component';
import {NgStyleComponent} from './components/ng-style/ng-style.component';
import {ResaltadoDirective} from './directives/resaltado.directive';
import {NgSwitchComponent} from './components/ng-switch/ng-switch.component';
import {ExamplerutasComponent} from './components/examplerutas/examplerutas.component';
import {UsuarioComponent} from './components/usuario/usuario.component';
import {UsuarioNuevoComponent} from './components/usuario/usuario-nuevo.component';
import {UsuarioEditarComponent} from './components/usuario/usuario-editar.component';
import {UsuarioDetalleComponent} from './components/usuario/usuario-detalle.component';
import {ProtegidaComponent} from './components/protegida/protegida.component';
import {PreciosComponent} from './components/precios/precios.component';
import {FormularioTemplateComponent} from './components/formulario-template/formulario-template.component';
import {FormularioDataReactiveComponent} from './components/formulario-data-reactive/formulario-data-reactive.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagesPipe,
    TarjetasComponent,
    LoadingComponent,
    NgStyleComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    ExamplerutasComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    ProtegidaComponent,
    PreciosComponent,
    FormularioTemplateComponent,
    FormularioDataReactiveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
