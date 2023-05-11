import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  urlBase = 'http://localhost:8050';

  constructor() {}

  buscarPessoas() {
    return axios.get(`${this.urlBase}/api/pessoas`);
  }
}
