import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato/contato.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contato } from '../contato/contato';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.css']
})
export class EditarContatoComponent implements OnInit {
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

  editarContatos(): void {
    this.contatoService.editarContatos(this.contato)
      .subscribe(() => {
        this.contatoService.showMessage('editado com sucesso');
        this.router.navigate(['/contatos'])
      })
  }

  cancelar(): void {
    this.router.navigate(['/contatos'])
  }
}
