import { SolicitacaoArmazemService } from './../shared/solicitacao-armazem.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Component } from '@angular/core';
import { SolicitacaoArmazem } from '../shared/solicitacao-armazem.model';

@Component({
  selector: 'app-solicitacao-armazem-list',
  templateUrl: './solicitacao-armazem-list.component.html',
  styleUrls: ['./solicitacao-armazem-list.component.scss']
})
export class SolicitacaoArmazemListComponent extends BaseResourceListComponent<SolicitacaoArmazem> {

  constructor(protected solicitacaoArmazemService: SolicitacaoArmazemService) {
    super(solicitacaoArmazemService);
  }


}
