import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { HttpClientModule} from '@angular/common/http';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { RemoverContatoComponent } from './remover-contato/remover-contato.component'


@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    CadastroContatoComponent,
    HeaderComponent,
    FooterComponent,
    EditarContatoComponent,
    RemoverContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
