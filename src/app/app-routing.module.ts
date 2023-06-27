import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './comps/pags-s/calendario/calendario.component';
import { ConsultasComponent } from './comps/pags-s/consultas/consultas.component';
import { EspecialidadesComponent } from './comps/pags-s/especialidades/especialidades.component';
import { HistorialComponent } from './comps/pags-s/historial/historial.component';
import { HorariosComponent } from './comps/pags-s/horarios/horarios.component';
import { HomeComponent } from './home/home.component';
//SE IMPORTAN COMPONENTES DE EL REGISTRO Y EL LOGIN, ADEMAS DE LA PAGINA PRINCIPAL PARA REDIRECCIONAR
//import { LogRegComponent } from './comps/log-reg/log-reg.component';
//import { HomeComponent } from './home/home.component';
//
const routes: Routes = [
  //'main' para llevarte al 'home'
  //{ path: '', component: LogRegComponent },
  //{ path: 'main', component: HomeComponent }
  {path:'', component:HomeComponent},
  {path:'calendario', component:CalendarioComponent},
  {path:'consultas', component:ConsultasComponent},
  {path:'especialidades', component:EspecialidadesComponent},
  {path:'historial', component:HistorialComponent},
  {path:'horarios', component:HorariosComponent},
  {path:'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
