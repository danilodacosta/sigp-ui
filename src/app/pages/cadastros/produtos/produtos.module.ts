import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';

import {IMaskModule} from 'angular-imask';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [ProdutoFormComponent, ProdutoListComponent],
  imports: [
    SharedModule,
    ProdutosRoutingModule,
    IMaskModule,
    ButtonModule
  ]
})
export class ProdutosModule { }
