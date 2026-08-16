import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API_URL = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) { }

  // 1. Listar todos os produtos
  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API_URL);
  }

  // 2. Consultar um produto pelo ID
  buscarPorId(id: number | string): Observable<Produto> {
    return this.http.get<Produto>(`${this.API_URL}/${id}`);
  }

  // 3. Cadastrar um produto
  cadastrar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.API_URL, produto);
  }

  // 4. Atualizar um produto
  atualizar(id: number | string, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.API_URL}/${id}`, produto);
  }

  // 5. Excluir um produto
  excluir(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}