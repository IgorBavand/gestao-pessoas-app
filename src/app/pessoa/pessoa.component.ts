import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PessoaService } from './services/pessoa.service';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { PessoaDto } from './dto/pessoa.dto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class PessoaComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<PessoaDto> =
    new MatTableDataSource<PessoaDto>();
  columnsToDisplay = ['nome', 'email', 'cpf', 'idade'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PessoaDto | null | undefined;
  subscription: Subscription | undefined;

  constructor(private service: PessoaService) {}

  ngOnInit(): void {
    this.buscarPessoas();
  }

  async buscarPessoas(): Promise<any> {
    this.service.buscarPessoas().subscribe((data) => {
      this.dataSource = new MatTableDataSource<PessoaDto>(data);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
