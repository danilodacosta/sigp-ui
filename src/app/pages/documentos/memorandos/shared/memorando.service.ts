import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Observable } from 'rxjs';
import { Memorando } from '../../memorandos/shared/memorando.model';

import { flatMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemorandoService extends BaseResourceService<Memorando> {

  constructor(protected injector: Injector) {
    super('/memorandos', injector, Memorando.fromJson);
  }
}
