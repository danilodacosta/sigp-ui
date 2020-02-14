import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';

import { VisitantesRoutingModule } from './visitantes-routing.module';
import { VisitanteFormComponent } from './visitante-form/visitante-form.component';
import { VisitanteListComponent } from './visitante-list/visitante-list.component';

import {IMaskModule} from 'angular-imask';
import {ButtonModule} from 'primeng/button';

import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({
  declarations: [VisitanteFormComponent, VisitanteListComponent],
  imports: [
    SharedModule,
    VisitantesRoutingModule,
    IMaskModule,
    ButtonModule,
    ProgressBarModule
  ]
})
export class VisitantesModule { }
