import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtendimentoListComponent } from './atendimento-list/atendimento-list.component';
import { AtendimentoFormComponent } from './atendimento-form/atendimento-form.component';

const routes: Routes = [
  {path: '' , component: AtendimentoListComponent},
  {path: 'new' , component: AtendimentoFormComponent},
  {path: ':id/edit' , component: AtendimentoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentosRoutingModule { }
