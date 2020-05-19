import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from './contato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  // contatos: Contato[];


  contatos$: Observable<Contato[]>;
  queryField: FormControl;
  filter$: Observable<string>;
  filteredStates$: Observable<Contato[]>;
  total: number

  constructor(public route: ActivatedRoute,
    public router: Router,
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {

  }

  pesquisar() {

    this.contatos$ = this.http.get<Contato[]>('http://localhost:3000/contatos');
    this.queryField = new FormControl('');
    this.filter$ = this.queryField.valueChanges.pipe(startWith(''));
    this.filteredStates$ = combineLatest(this.contatos$, this.filter$).pipe(
      map(([contatos, filterString]) => contatos
      .filter(contato => contato.nome
        .toLowerCase().indexOf(filterString
          .toLowerCase()) !== -1))
    );
  }
}
