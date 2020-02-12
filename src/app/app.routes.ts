import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UtilidadesComponent} from './components/utilidades/utilidades.component';
import {NgstyleComponent} from './components/ngstyle/ngstyle.component';
import {ClasesComponent} from './components/clases/clases.component';
import {NgswitchComponent} from './components/ngswitch/ngswitch.component';
import {UsuarioComponent} from './components/usuario/usuario.component';
import {UsuarioNuevoComponent} from './components/usuario/usuario-nuevo.component';
import {UsuarioEditarComponent} from './components/usuario/usuario-editar.component';
import {UsuarioDetalleComponent} from './components/usuario/usuario-detalle.component';


const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'utilidades', component: UtilidadesComponent},
  {path: 'ngstyle', component: NgstyleComponent},
  {path: 'ngclass', component: ClasesComponent},
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: [
      {path: 'nuevo', component: UsuarioNuevoComponent},
      {path: 'editar', component: UsuarioEditarComponent},
      {path: 'detalle', component: UsuarioDetalleComponent},
      {path: '**', pathMatch: 'full', redirectTo: 'nuevo'}
    ]
  },
  {path: 'ngswitch', component: NgswitchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
