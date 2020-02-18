import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Observable } from 'rxjs';
import { Oficio } from '../../oficios/shared/oficio.model';

import { flatMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OficioService extends BaseResourceService<Oficio> {

  constructor(protected injector: Injector) {
    super('/oficios', injector, Oficio.fromJson);
  }
}
