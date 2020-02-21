import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Observable } from 'rxjs';
import { Propositura } from '../../proposituras/shared/propositura.model';

import { flatMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProposituraService extends BaseResourceService<Propositura> {

  constructor(protected injector: Injector) {
    super('/proposituras', injector, Propositura.fromJson);
  }
}
