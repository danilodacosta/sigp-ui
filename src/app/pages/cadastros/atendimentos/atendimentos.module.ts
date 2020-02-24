import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';

import { AtendimentosRoutingModule } from './atendimentos-routing.module';
import { AtendimentoFormComponent } from './atendimento-form/atendimento-form.component';
import { AtendimentoListComponent } from './atendimento-list/atendimento-list.component';


@NgModule({
  declarations: [AtendimentoFormComponent, AtendimentoListComponent],
  imports: [
    SharedModule,
    AtendimentosRoutingModule
  ]
})
export class AtendimentosModule { }
