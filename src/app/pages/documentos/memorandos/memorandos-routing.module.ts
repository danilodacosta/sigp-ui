import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemorandoListComponent } from './memorando-list/memorando-list.component';
import { MemorandoFormComponent } from './memorando-form/memorando-form.component';

const routes: Routes = [
  {path: '' , component: MemorandoListComponent},
  {path: 'new' , component: MemorandoFormComponent},
  {path: ':id/edit' , component: MemorandoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemorandosRoutingModule { }
