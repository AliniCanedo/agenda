import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from './contato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {

   url = "http://localhost:3000/contatos" 
  
  constructor(private http: HttpClient) { }

  showMessage(msg: string): void {
    console.log(msg)
  }


  adicionar(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.url, contato);
  }

  listaContatos(nome: string = ""): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.url, {params: {q: nome}});
  }

  listarById(id: string): Observable<Contato>{
    const url = `${this.url}/${id}`
    return this.http.get<Contato>(url)
  }

  editarContatos(contato: Contato): Observable<Contato>{
    const url = `${this.url}/${contato.id}`
    return this.http.put<Contato>(url, contato)
  }

  removerContatos(id: number): Observable<Contato>{
    const url = `${this.url}/${id}`;
    return this.http.delete<Contato>(url);
  }

  pesquisar(id: string): Observable<Contato[]>{
    const url = `${this.url}/${id}`
    return this.http.get<Contato[]>(url)
  }
}
