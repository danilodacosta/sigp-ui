import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProposituraListComponent } from './propositura-list/propositura-list.component';
import { ProposituraFormComponent } from './propositura-form/propositura-form.component';

const routes: Routes = [
  {path: '' , component: ProposituraListComponent},
  {path: 'new' , component: ProposituraFormComponent},
  {path: ':id/edit' , component: ProposituraFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropositurasRoutingModule { }
