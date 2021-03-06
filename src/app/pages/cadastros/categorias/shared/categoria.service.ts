import { Injectable, Injector } from '@angular/core';
import { Categoria } from './categoria.model';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseResourceService<Categoria> {

  constructor(protected injector: Injector) {
    super('/categorias', injector, Categoria.fromJson);
  }
}
