import { TipoSituacaoEnum } from '../../../../shared/models/enums/tipo-situacao.enum';
import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Propositura } from '../shared/propositura.model';
import { ProposituraService } from '../shared/propositura.service';

@Component({
  selector: 'app-propositura-list',
  templateUrl: './propositura-list.component.html',
  styleUrls: ['./propositura-list.component.scss']
})
export class ProposituraListComponent extends BaseResourceListComponent<Propositura> {

  situacaoEnum = TipoSituacaoEnum;

  constructor(protected proposituraService: ProposituraService) {
    super(proposituraService);
  }

}
