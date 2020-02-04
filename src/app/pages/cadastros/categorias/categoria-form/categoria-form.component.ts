import { Mascaras } from '../../../../shared/directives/mascaras';
import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Categoria } from '../shared/categoria.model';
import { CategoriaService } from '../shared/categoria.service';


@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent extends BaseResourceFormComponent<Categoria> {

  constructor(protected categoriaService: CategoriaService, protected injector: Injector) {
    super(injector, new Categoria(), categoriaService, Categoria.fromJson);
  }

  protected buildResourceForm(): void {
     this.resourceForm = this.formBuilder.group({
      id : [null],
      descricao: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(11)]]
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Nova Categoria';
  }

  protected editionPageTitle(): string {
    const categoriaDescricao: string  = this.resource.descricao || '' ;
    return 'Editando Categoria : ' + categoriaDescricao;
  }

}


