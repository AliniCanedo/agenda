import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { HttpClientModule} from '@angular/common/http';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { RemoverContatoComponent } from './remover-contato/remover-contato.component'

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AuthService } from './usuario/login/auth.service';
import { LoginComponent } from './usuario/login/login.component';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { CadastroUsuarioService } from './usuario/cadastro-usuario/cadastro-usuario.service';
import { CalendarioComponent } from './calendario/calendario.component';
@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    CadastroContatoComponent,
    FooterComponent,
    EditarContatoComponent,
    RemoverContatoComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    CalendarioComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    
    
  ],
  providers: [AuthService, CadastroUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
