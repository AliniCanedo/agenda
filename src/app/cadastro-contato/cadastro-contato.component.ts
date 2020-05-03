import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato/contato.service';
import { Router } from '@angular/router';
import { Contato } from '../contato/contato';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent implements OnInit {
  contato: Contato = {
    nome: '',
    email: '',
    telefone: null
  };

  constructor(private contatoService: ContatoService, 
              private router: Router) { }

  ngOnInit(): void {}
  cadastrarContato(): void {
    this.contatoService.adicionar(this.contato).subscribe(() => {
    this.contatoService.showMessage('Contato cadastrado com sucesso')
    this.router.navigate(['contatos'])
    })
  }
   cancelar(): void{
     this.router.navigate(['contatos'])
   }
}
