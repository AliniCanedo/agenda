import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato/contato.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contato } from '../contato/contato';

@Component({
  selector: 'app-remover-contato',
  templateUrl: './remover-contato.component.html',
  styleUrls: ['./remover-contato.component.css']
})
export class RemoverContatoComponent implements OnInit {
  contato: Contato

  constructor(private contatoService: ContatoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.contatoService.listarById(id)
      .subscribe(contato => {
        this.contato = contato
      });
  }
  removerContato(): void {
    this.contatoService.removerContatos(this.contato.id)
      .subscribe(() => {
        this.contatoService.showMessage('excluido com sucesso');
        this.router.navigate(['/contatos'])
      })
  }
  cancelar(): void {
    this.router.navigate(['/contatos'])
  }
}
