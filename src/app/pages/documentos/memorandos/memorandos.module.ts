import { MemorandoFormComponent } from './memorando-form/memorando-form.component';

import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';

import { MemorandosRoutingModule } from './memorandos-routing.module';
import { MemorandoListComponent } from './memorando-list/memorando-list.component';

@NgModule({
  declarations: [MemorandoFormComponent, MemorandoListComponent],
  imports: [
    SharedModule,
    MemorandosRoutingModule
  ]
})
export class MemorandosModule { }
