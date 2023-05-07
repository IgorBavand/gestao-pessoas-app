import { Component, Input } from '@angular/core';
import { PessoaService } from './services/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss'],
})
export class PessoaComponent {
  preco = 10000;

  constructor(private service: PessoaService) {}

  ngOnInit(): void {
    this.service.renomeiaVariavel().then((response) => {
      console.log(response.data);
    });
  }
}
