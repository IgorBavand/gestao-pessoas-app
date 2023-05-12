import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PessoaDto } from '../dto/pessoa.dto';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  urlBase = 'http://localhost:8050';

  constructor(private http: HttpClient) {}

  buscarPessoas() {
    return this.http.get<PessoaDto[]>(`${this.urlBase}/api/pessoas`);
  }
}
