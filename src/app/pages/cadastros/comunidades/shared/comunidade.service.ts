import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Comunidade } from '../../comunidades/shared/comunidade.model';

@Injectable({
  providedIn: 'root'
})
export class ComunidadeService extends BaseResourceService<Comunidade> {

  constructor(protected injector: Injector) {
    super('/comunidades', injector, Comunidade.fromJson);
  }
}
