import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from './contato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  conta: Contato[];
  contatos: Contato[];
 

  pesquisaForm: FormGroup
  pesquisaControl: string

  readonly url = "http://localhost:3000/contatos";

  results$: Observable<any>
  contato: string;

  constructor(public route: ActivatedRoute,
    public router: Router,
    private contatoService: ContatoService,
    ) { }

  ngOnInit(): void {
      this.contatoService.listaContatos()
      .subscribe((dados: Contato[]) => this.contatos = dados);
                              
  }
}
