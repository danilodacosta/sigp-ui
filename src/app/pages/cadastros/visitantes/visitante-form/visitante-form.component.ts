import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Visitante } from '../shared/visitante.model';
import { VisitanteService } from '../shared/visitante.service';


@Component({
  selector: 'app-visitante-form',
  templateUrl: './visitante-form.component.html',
  styleUrls: ['./visitante-form.component.scss']
})
export class VisitanteFormComponent extends BaseResourceFormComponent<Visitante> {


  isConsultandoCep = false;

  constructor(protected visitanteService: VisitanteService, protected injector: Injector) {
    super(injector, new Visitante(), visitanteService, Visitante.fromJson);
  }

  protected buildResourceForm(): void {
     this.resourceForm = this.formBuilder.group({
      id : [null],
      nome: [null, [Validators.required,  Validators.minLength(18), Validators.maxLength(18)]],
      cpf: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      rg: [null, [Validators.required, Validators.maxLength(6)]],
      celular: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      email: [null, [Validators.required, Validators.email]],
      tipo: [null, [Validators.required]],
      endereco: this.formBuilder.group(

        {
            logradouro : [null, [Validators.required, Validators.maxLength(50)]],
            bairro: [null, [Validators.required, Validators.maxLength(20)]],
            cep:    [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
            cidade: [null, [Validators.required, Validators.maxLength(20)]],
            numero: [null, [Validators.required, Validators.maxLength(50)]],
            complemento: [null, [Validators.required, Validators.maxLength(100)]],
            estado: [null, [Validators.required]],
        }
    ),
    });

  }


  public changeCep(value: any) {

    if (value.length < 9) {
       return;
    }
    value = value.replace('-', '');
    // this.isConsultandoCep = true;
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Visitante';
  }

  protected editionPageTitle(): string {
    const visitanteDescricao: string  = this.resource.nome || '' ;
    return 'Editando Visitante : ' + visitanteDescricao;
  }

}


