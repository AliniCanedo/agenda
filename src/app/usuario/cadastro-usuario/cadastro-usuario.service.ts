import { Injectable } from '@angular/core';
import { Usuario } from '../login/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  url = "http://localhost:3000/usuario"

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario)
    
  }

 
}
