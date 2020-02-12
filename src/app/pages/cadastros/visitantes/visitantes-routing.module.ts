import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitanteListComponent } from './visitante-list/visitante-list.component';
import { VisitanteFormComponent } from './visitante-form/visitante-form.component';

const routes: Routes = [
  {path: '' , component: VisitanteListComponent},
  {path: 'new' , component: VisitanteFormComponent},
  {path: ':id/edit' , component: VisitanteFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitantesRoutingModule { }
