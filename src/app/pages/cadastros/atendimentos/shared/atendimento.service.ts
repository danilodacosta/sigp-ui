import { Injectable, Injector } from '@angular/core';
import { Atendimento } from './atendimento.model';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService extends BaseResourceService<Atendimento> {

  constructor(protected injector: Injector) {
    super('/atendimentos', injector, Atendimento.fromJson);
  }
}
