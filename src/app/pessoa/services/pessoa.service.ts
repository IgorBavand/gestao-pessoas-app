import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { PessoaDto } from '../dto/pessoa.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  urlBase = 'http://localhost:8050';

  constructor(private http: HttpClient) {}

  buscarPessoas() {
    return this.http.get<PessoaDto[]>(`${this.urlBase}/api/pessoas`);
  }

  salvarPessoa(dados: PessoaDto): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(
      `${this.urlBase}/api/pessoas`,
      dados
    );
  }
}
