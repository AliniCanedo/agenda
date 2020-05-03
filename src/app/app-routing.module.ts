import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ContatoComponent } from './contato/contato.component';
import { AppComponent } from './app.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { RemoverContatoComponent } from './remover-contato/remover-contato.component';


const routes: Routes = [

  {path: 'AppComponent', component: AppComponent},
  {path: 'contatos', component: ContatoComponent},
  {path: 'cadastro', component: CadastroContatoComponent},
  {path: 'contatos/editar/:id', component: EditarContatoComponent},
  {path: 'contatos/remover/:id', component: RemoverContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
