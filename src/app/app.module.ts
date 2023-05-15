import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ContatoComponent } from './components/contato/contato.component';
import { SharedServiceService } from './shared-service.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjetosComponent,
    SobreComponent,
    TecnologiasComponent,
    ContatoComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
