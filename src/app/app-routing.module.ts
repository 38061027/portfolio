import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'projetos', component: ProjetosComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'tec', component: TecnologiasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
