import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from './contato';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ContatoService {

   url = `${environment.url}` 
  
  constructor(private http: HttpClient) { }

  showMessage(msg: string): void {
    console.log(msg)
  }

  adicionar(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.url, contato);
  }

  listaContatos(): Observable<Contato[]> {
    const url = `${this.url}`
    return this.http.get<Contato[]>(url);
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
}
