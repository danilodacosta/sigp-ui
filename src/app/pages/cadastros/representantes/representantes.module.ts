import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';

import { RepresentantesRoutingModule } from './Representantes-routing.module';
import { RepresentanteFormComponent } from './Representante-form/Representante-form.component';
import { RepresentanteListComponent } from './Representante-list/Representante-list.component';

import {IMaskModule} from 'angular-imask';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [RepresentanteFormComponent, RepresentanteListComponent],
  imports: [
    SharedModule,
    RepresentantesRoutingModule,
    IMaskModule,
    ButtonModule
  ]
})
export class RepresentantesModule { }
