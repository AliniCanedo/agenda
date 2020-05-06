import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = false

  constructor(private router: Router) { }

  login(usuario: Usuario){
    if(usuario.nome === 'usuario@email.com' &&
    usuario.senha === '123456') {
      this.usuarioAutenticado = true
      this.router.navigate(['contatos'])
    } else {
      this.usuarioAutenticado = false
    }
  }
}
