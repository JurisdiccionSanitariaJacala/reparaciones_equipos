import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipoComputoComponent } from './equipo-computo/equipo-computo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AltaComputoComponent } from './equipo-computo/alta-computo/alta-computo.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
