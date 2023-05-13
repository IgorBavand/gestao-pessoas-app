import { Component } from '@angular/core';
import { PessoaDto } from '../../dto/pessoa.dto';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.scss'],
})
export class PessoaCadastroComponent {
  pessoaForm: PessoaDto = {
    nome: '',
    email: '',
    cpf: '',
    idade: 0,
  };

  constructor(private service: PessoaService) {}

  salvarPessoa(dados: PessoaDto): void {
    this.service.salvarPessoa(dados).subscribe(
      (response) => {
        console.log('Resposta:', response);
        // lidar com a resposta da requisição aqui
      },
      (error) => {
        console.error('Erro na requisição:', error);
        // lidar com o erro da requisição aqui
      }
    );
  }
}
