import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';

import { OficiosRoutingModule } from './oficios-routing.module';
import { OficioFormComponent } from './oficio-form/oficio-form.component';
import { OficioListComponent } from './oficio-list/oficio-list.component';

@NgModule({
  declarations: [OficioFormComponent, OficioListComponent],
  imports: [
    SharedModule,
    OficiosRoutingModule
  ]
})
export class OficiosModule { }
