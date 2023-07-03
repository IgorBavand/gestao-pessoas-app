import { Component } from '@angular/core';
import { PessoaDto } from '../../dto/pessoa.dto';
import { PessoaService } from '../../services/pessoa.service';
import { Router } from '@angular/router';

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

  constructor(private service: PessoaService, private router: Router) {}

  redirecionarParaRotaPessoa(): void {
    this.router.navigate(['/pessoa']);
  }

  salvarPessoa(dados: PessoaDto): void {
    this.service.salvarPessoa(dados).subscribe(
      (response) => {
        console.log(dados.nome + ' Registrado com sucesso!');
        this.redirecionarParaRotaPessoa();
      },
      (error) => {
        console.error('Erro na requisição:', error);
        // lidar com o erro da requisição aqui
      }
    );
  }
}
