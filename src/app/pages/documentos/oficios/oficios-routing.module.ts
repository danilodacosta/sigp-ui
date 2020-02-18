import { OficioFormComponent } from './oficio-form/oficio-form.component';
import { OficioListComponent } from './oficio-list/oficio-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '' , component: OficioListComponent},
  {path: 'new' , component: OficioFormComponent},
  {path: ':id/edit' , component: OficioFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OficiosRoutingModule { }
