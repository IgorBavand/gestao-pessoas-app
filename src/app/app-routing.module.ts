import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PessoaCadastroComponent } from './pessoa/pages/pessoa-cadastro/pessoa-cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pessoa', component: PessoaComponent },
  { path: 'cadastro-pessoa', component: PessoaCadastroComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
