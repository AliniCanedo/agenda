import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ContatoComponent } from './contato/contato.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { RemoverContatoComponent } from './remover-contato/remover-contato.component';
import { LoginComponent } from './usuario/login/login.component';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { CalendarioComponent } from './calendario/calendario.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-usuario', component: CadastroUsuarioComponent},
  {path: 'contatos', component: ContatoComponent},
  {path: 'cadastro', component: CadastroContatoComponent},
  {path: 'contatos/editar/:id', component: EditarContatoComponent},
  {path: 'contatos/remover/:id', component: RemoverContatoComponent},
  {path: 'calendario', component: CalendarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
