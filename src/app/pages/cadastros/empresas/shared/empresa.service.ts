import { Injectable, Injector } from '@angular/core';
import { Empresa } from './empresa.model';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService extends BaseResourceService<Empresa> {

  constructor(protected injector: Injector) {
    super('/empresas', injector, Empresa.fromJson);
  }
}
