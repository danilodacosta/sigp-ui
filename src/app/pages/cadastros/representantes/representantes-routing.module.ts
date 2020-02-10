import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepresentanteListComponent } from './Representante-list/Representante-list.component';
import { RepresentanteFormComponent } from './Representante-form/Representante-form.component';

const routes: Routes = [
  {path: '' , component: RepresentanteListComponent},
  {path: 'new' , component: RepresentanteFormComponent},
  {path: ':id/edit' , component: RepresentanteFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentantesRoutingModule { }
