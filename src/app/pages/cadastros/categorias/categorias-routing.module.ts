import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaListComponent } from './Categoria-list/Categoria-list.component';
import { CategoriaFormComponent } from './Categoria-form/Categoria-form.component';

const routes: Routes = [
  {path: '' , component: CategoriaListComponent},
  {path: 'new' , component: CategoriaFormComponent},
  {path: ':id/edit' , component: CategoriaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
