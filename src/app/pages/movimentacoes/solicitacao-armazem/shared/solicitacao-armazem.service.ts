import { SolicitacaoArmazem } from './solicitacao-armazem.model';
import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoArmazemService extends BaseResourceService<SolicitacaoArmazem> {

  constructor(protected injector: Injector) {
    super('/solicitacao-armazem', injector, SolicitacaoArmazem.fromJson);
  }
}
