import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';

import {IMaskModule} from 'angular-imask';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [EmpresaFormComponent, EmpresaListComponent],
  imports: [
    SharedModule,
    EmpresasRoutingModule,
    IMaskModule,
    ButtonModule
  ]
})
export class EmpresasModule { }
