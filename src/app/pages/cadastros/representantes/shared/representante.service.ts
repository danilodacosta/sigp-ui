import { Injectable, Injector } from '@angular/core';
import { Representante } from './representante.model';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService extends BaseResourceService<Representante> {

  constructor(protected injector: Injector) {
    super('/representantes', injector, Representante.fromJson);
  }
}
