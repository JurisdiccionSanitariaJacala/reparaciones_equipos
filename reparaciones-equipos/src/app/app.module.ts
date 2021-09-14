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

const ROUTES: Routes = [
  {path: 'alta-computo', component: AltaComputoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EquipoComputoComponent,
    HeaderComponent,
    FooterComponent,
    AltaComputoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
