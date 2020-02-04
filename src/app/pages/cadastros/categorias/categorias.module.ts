import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';

import { CategoriasRoutingModule } from './Categorias-routing.module';
import { CategoriaFormComponent } from './Categoria-form/Categoria-form.component';
import { CategoriaListComponent } from './Categoria-list/Categoria-list.component';

import {IMaskModule} from 'angular-imask';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [CategoriaFormComponent, CategoriaListComponent],
  imports: [
    SharedModule,
    CategoriasRoutingModule,
    IMaskModule,
    ButtonModule
  ]
})
export class CategoriasModule { }
