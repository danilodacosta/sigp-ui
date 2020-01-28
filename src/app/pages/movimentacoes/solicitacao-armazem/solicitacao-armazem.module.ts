import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';

import { SolicitacaoArmazemRoutingModule } from './solicitacao-armazem-routing.module';
import { SolicitacaoArmazemFormComponent } from './solicitacao-armazem-form/solicitacao-armazem-form.component';
import { SolicitacaoArmazemListComponent } from './solicitacao-armazem-list/solicitacao-armazem-list.component';

import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [SolicitacaoArmazemFormComponent, SolicitacaoArmazemListComponent],
  imports: [
    SharedModule,
    SolicitacaoArmazemRoutingModule,
    CalendarModule,
    ButtonModule
  ]
})
export class SolicitacaoArmazemModule { }
