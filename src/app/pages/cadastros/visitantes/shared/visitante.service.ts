import { Injectable, Injector } from '@angular/core';
import { Visitante } from './visitante.model';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService extends BaseResourceService<Visitante> {

  constructor(protected injector: Injector) {
    super('/visitantes', injector, Visitante.fromJson);
  }
}
