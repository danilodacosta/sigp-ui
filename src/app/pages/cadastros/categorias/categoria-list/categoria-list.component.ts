import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Categoria } from '../shared/categoria.model';
import { CategoriaService } from '../shared/categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent extends BaseResourceListComponent<Categoria> {

  constructor(protected categoriaService: CategoriaService) {
    super(categoriaService);
  }

}
