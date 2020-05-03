import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from './contato.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contatos: Contato[];

  constructor(private contatoService: ContatoService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.contatoService.listaContatos()
      .subscribe((dados: Contato[]) => this.contatos = dados);

  }

  removerContatos(): void {
  }
}
