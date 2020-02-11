import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';

import { ComunidadesRoutingModule } from './comunidades-routing.module';
import { ComunidadeFormComponent } from './Comunidade-form/Comunidade-form.component';
import { ComunidadeListComponent } from './Comunidade-list/Comunidade-list.component';

import {IMaskModule} from 'angular-imask';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [ComunidadeFormComponent, ComunidadeListComponent],
  imports: [
    SharedModule,
    ComunidadesRoutingModule,
    IMaskModule,
    ButtonModule
  ]
})
export class ComunidadesModule { }
