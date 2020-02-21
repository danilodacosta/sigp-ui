import { ProposituraFormComponent } from './propositura-form/propositura-form.component';

import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';

import { PropositurasRoutingModule } from './proposituras-routing.module';
import { ProposituraListComponent } from './propositura-list/propositura-list.component';

@NgModule({
  declarations: [ProposituraFormComponent, ProposituraListComponent],
  imports: [
    SharedModule,
    PropositurasRoutingModule
  ]
})
export class PropositurasModule { }
