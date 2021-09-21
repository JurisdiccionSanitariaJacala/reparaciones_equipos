import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipoComputoComponent } from './equipo-computo/equipo-computo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AltaComputoComponent } from './equipo-computo/alta-computo/alta-computo.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AltaMedicoComponent } from './equipo-medico/alta-medico/alta-medico.component';
import { BajaMedicoComponent } from './equipo-medico/baja-medico/baja-medico.component';
import { BajaComputoComponent } from './equipo-computo/baja-computo/baja-computo.component';
import { EquipoMedicoComponent } from './equipo-medico/equipo-medico.component';
import { AltaReparacionComputoComponent } from './equipo-computo/alta-reparacion/alta-reparacion-computo.component';
import { AltaReparacionMedicoComponent } from './equipo-medico/alta-reparacion/alta-reparacion.component';
import { EquipoMedicoService } from './equipo-medico/equipo-medico.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';


const ROUTES: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'equipo-computo/alta-computo', component: AltaComputoComponent},
  {path: 'equipo-computo/baja-computo' ,component: BajaComputoComponent},
  {path: 'equipo-computo/alta-reparacion', component: AltaReparacionComputoComponent },
  {path: 'equipo-medico/alta-reparacion', component: AltaReparacionMedicoComponent},
  {path: 'equipo-medico/alta-medico', component: AltaMedicoComponent},
  {path: 'equipo-medico/baja-medico', component: BajaMedicoComponent},
  {path: 'equipo-medico', component: EquipoMedicoComponent},
  {path: 'equipo-computo', component: EquipoComputoComponent},
  {path: 'dashboard', component: DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EquipoComputoComponent,
    HeaderComponent,
    FooterComponent,
    AltaComputoComponent,
    AltaMedicoComponent,
    BajaMedicoComponent,
    BajaComputoComponent,
    EquipoMedicoComponent,
    AltaReparacionComputoComponent,
    AltaReparacionMedicoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [EquipoMedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
