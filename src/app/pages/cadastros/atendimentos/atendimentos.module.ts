import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';

import { AtendimentosRoutingModule } from './atendimentos-routing.module';
import { AtendimentoFormComponent } from './atendimento-form/atendimento-form.component';
import { AtendimentoListComponent } from './atendimento-list/atendimento-list.component';

import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [AtendimentoFormComponent, AtendimentoListComponent],
  imports: [
    SharedModule,
    CalendarModule,
    AtendimentosRoutingModule
  ]
})
export class AtendimentosModule { }
