import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './comps/pagp/menu/menu.component';
import { FormComponent } from './comps/pagp/form/form.component';
import { RecMedComponent } from './comps/pagp/rec-med/rec-med.component';
import { FooterComponent } from './comps/pagp/footer/footer.component';
import { NavPerfilComponent } from './comps/pagp/nav-perfil/nav-perfil.component';
import { LogRegComponent } from './comps/log-reg/log-reg.component';
import { HomeComponent } from './home/home.component';
import { CalendarioComponent } from './comps/pags-s/calendario/calendario.component';
import { ConsultasComponent } from './comps/pags-s/consultas/consultas.component';
import { EspecialidadesComponent } from './comps/pags-s/especialidades/especialidades.component';
import { HistorialComponent } from './comps/pags-s/historial/historial.component';
import { HorariosComponent } from './comps/pags-s/horarios/horarios.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormComponent,
    RecMedComponent,
    FooterComponent,
    NavPerfilComponent,
    LogRegComponent,
    HomeComponent,
    CalendarioComponent,
    ConsultasComponent,
    EspecialidadesComponent,
    HistorialComponent,
    HorariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
