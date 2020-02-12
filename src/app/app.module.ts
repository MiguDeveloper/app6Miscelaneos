import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import {APP_ROUTING} from './app.routes';
import { UtilidadesComponent } from './components/utilidades/utilidades.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    NavbarComponent,
    HomeComponent,
    UtilidadesComponent,
    NgstyleComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgswitchComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioDetalleComponent,
    UsuarioEditarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
