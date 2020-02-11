import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Empresa } from '../shared/empresa.model';
import { EmpresaService } from '../shared/empresa.service';


@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.scss']
})
export class EmpresaFormComponent extends BaseResourceFormComponent<Empresa> {

  constructor(protected empresaService: EmpresaService, protected injector: Injector) {
    super(injector, new Empresa(), empresaService, Empresa.fromJson);
  }

  protected buildResourceForm(): void {
     this.resourceForm = this.formBuilder.group({
      id : [null],
      cnpj: [null, [Validators.required,  Validators.minLength(18), Validators.maxLength(18)]],
      razao: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      representante: [null, [Validators.required, Validators.maxLength(6)]],
      endereco : [null, [Validators.required, Validators.maxLength(50)]],
      email : [null, [Validators.required, Validators.email]],
      telefone: [null, [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Nova Empresa';
  }

  protected editionPageTitle(): string {
    const empresaDescricao: string  = this.resource.razao || '' ;
    return 'Editando Empresa : ' + empresaDescricao;
  }

}


