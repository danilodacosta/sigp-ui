import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComunidadeListComponent } from './Comunidade-list/Comunidade-list.component';
import { ComunidadeFormComponent } from './Comunidade-form/Comunidade-form.component';

const routes: Routes = [
  {path: '' , component: ComunidadeListComponent},
  {path: 'new' , component: ComunidadeFormComponent},
  {path: ':id/edit' , component: ComunidadeFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunidadesRoutingModule { }
