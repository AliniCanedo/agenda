import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { HttpClientModule} from '@angular/common/http';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { RemoverContatoComponent } from './remover-contato/remover-contato.component'

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component'; 
import { AuthService } from './login/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    CadastroContatoComponent,
    FooterComponent,
    EditarContatoComponent,
    RemoverContatoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
