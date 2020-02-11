import { Injectable, Injector } from '@angular/core';
import { Comunidade } from './comunidade.model';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Observable } from 'rxjs';
import { Representante } from '../../representantes/shared/representante.model';
import { RepresentanteService } from '../../representantes/shared/representante.service';
import { flatMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComunidadeService extends BaseResourceService<Comunidade> {

  constructor(protected injector: Injector, private representanteService: RepresentanteService) {
    super('/comunidades', injector, Comunidade.fromJson);
  }

  create(comunidade: Comunidade): Observable<Comunidade> {
    return this.setCategoryAndSendToServer(comunidade , super.create.bind(this));
  }

  update(comunidade: Comunidade): Observable<Comunidade> {
    return this.setCategoryAndSendToServer(comunidade , super.update.bind(this));
  }

  private setCategoryAndSendToServer(comunidade: Comunidade, sendFn: any): Observable<Comunidade> {
    return this.representanteService.getById(comunidade.representanteId).pipe(
      flatMap(representante => {
        comunidade.representante = representante;
        return sendFn(comunidade);
      }),
      catchError(this.handlerError)
    );
  }
}
