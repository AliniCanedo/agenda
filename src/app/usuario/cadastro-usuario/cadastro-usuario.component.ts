import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../login/usuario';
import { Validacoes } from '../login/validacoes';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  formularioDeUsuario: FormGroup;

  usuario: Usuario

  constructor(private fb: FormBuilder,
    private cadastroUsuarioService: CadastroUsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.criarFormularioDeUsuario();
  }


  enviarDados() {
    this.cadastroUsuarioService.cadastrarUsuario(this.usuario).subscribe(() => {

      
      const dadosFormulario = this.formularioDeUsuario.value;
      const usuario = new Usuario(
        dadosFormulario.nome,
        dadosFormulario.senha
      );
      alert(`O usuário ${usuario.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(usuario)}`);
      this.formularioDeUsuario.reset();
     
    })
    this.router.navigate(['login'])
   
  }

  criarFormularioDeUsuario() {
    this.formularioDeUsuario = this.fb.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ])
      ],
      senha: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      ],
      confirmarSenha: ['', Validators.compose([Validators.required])]
    },
      {
        validator: Validacoes.SenhasCombinam
      }
    );
  }
  get nome() {
    return this.formularioDeUsuario.get('nome');
  }
  get senha() {
    return this.formularioDeUsuario.get('senha');
  }

  get confirmarSenha() {
    return this.formularioDeUsuario.get('confirmarSenha');
  }
}
