import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';

const routes: Routes = [
  {path: '' , component: EmpresaListComponent},
  {path: 'new' , component: EmpresaFormComponent},
  {path: ':id/edit' , component: EmpresaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
