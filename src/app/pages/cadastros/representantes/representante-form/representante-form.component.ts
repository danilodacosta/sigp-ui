import { Mascaras } from '../../../../shared/directives/mascaras';
import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Representante } from '../shared/representante.model';
import { RepresentanteService } from '../shared/representante.service';


@Component({
  selector: 'app-representante-form',
  templateUrl: './representante-form.component.html',
  styleUrls: ['./representante-form.component.scss']
})
export class RepresentanteFormComponent extends BaseResourceFormComponent<Representante> {

  constructor(protected representanteService: RepresentanteService, protected injector: Injector) {
    super(injector, new Representante(), representanteService, Representante.fromJson);
  }

  protected buildResourceForm(): void {
     this.resourceForm = this.formBuilder.group({
      id : [null],
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(11)]]
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Representante';
  }

  protected editionPageTitle(): string {
    const representanteDescricao: string  = this.resource.nome || '' ;
    return 'Editando Representante : ' + representanteDescricao;
  }

}


