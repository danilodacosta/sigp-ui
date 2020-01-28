import { SolicitacaoArmazemFormComponent } from './solicitacao-armazem-form/solicitacao-armazem-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitacaoArmazemListComponent } from './solicitacao-armazem-list/solicitacao-armazem-list.component';

const routes: Routes = [
  {path: '' , component: SolicitacaoArmazemListComponent},
  {path: 'new' , component: SolicitacaoArmazemFormComponent},
  {path: ':id/edit' , component: SolicitacaoArmazemFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitacaoArmazemRoutingModule { }
