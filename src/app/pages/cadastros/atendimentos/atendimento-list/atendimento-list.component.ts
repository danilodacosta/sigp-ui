import { TipoSituacaoEnum } from '../../../../shared/models/enums/tipo-situacao.enum';
import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Atendimento } from '../shared/atendimento.model';
import { AtendimentoService } from '../shared/atendimento.service';

@Component({
  selector: 'app-atendimento-list',
  templateUrl: './atendimento-list.component.html',
  styleUrls: ['./atendimento-list.component.scss']
})
export class AtendimentoListComponent extends BaseResourceListComponent<Atendimento> {

  situacaoEnum = TipoSituacaoEnum;

  constructor(protected atendimentoService: AtendimentoService) {
    super(atendimentoService);
  }

}
