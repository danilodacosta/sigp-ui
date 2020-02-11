import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';

import { MemorandosRoutingModule } from './memorandos-routing.module';
import { MemorandoFormComponent } from './memorando-form/merorando-form.component';
import { MemorandoListComponent } from './memorando-list/memorando-list.component';

import {IMaskModule} from 'angular-imask';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [MemorandoFormComponent, MemorandoListComponent],
  imports: [
    SharedModule,
    MemorandosRoutingModule,
    IMaskModule,
    ButtonModule
  ]
})
export class MemorandosModule { }
