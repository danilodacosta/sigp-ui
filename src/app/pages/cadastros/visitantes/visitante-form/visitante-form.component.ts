import { TipoPessoaEnum } from './../../../../shared/models/enums/tipo-pessoa.enum';
import { SexoEnum } from './../../../../shared/models/enums/sexo.enum';
import { EstadoEnum } from './../../../../shared/models/enums/estado.enum';
import { CorreiosService } from './../../../../shared/services/correios.service';
import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Visitante } from '../shared/visitante.model';
import { VisitanteService } from '../shared/visitante.service';

import toastr from 'toastr';

@Component({
  selector: 'app-visitante-form',
  templateUrl: './visitante-form.component.html',
  styleUrls: ['./visitante-form.component.scss']
})
export class VisitanteFormComponent extends BaseResourceFormComponent<Visitante> {


  isConsultandoCep = false;
  estados = EstadoEnum;
  sexoEnum = SexoEnum;
  tipoPessoa = TipoPessoaEnum;

  constructor(protected visitanteService: VisitanteService, protected injector: Injector, private correiosService: CorreiosService) {
    super(injector, new Visitante(), visitanteService, Visitante.fromJson);
  }

  protected buildResourceForm(): void {
     this.resourceForm = this.formBuilder.group({
      id : [null],
      nome: [null, [Validators.required, Validators.maxLength(50)]],
      cpf: [null, [Validators.required,  Validators.minLength(14), Validators.maxLength(14)]],
      rg: [null, [Validators.required,   Validators.minLength(7), Validators.maxLength(7)]],
      celular: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      email: [null, [Validators.required, Validators.email]],
      tipo: [null, [Validators.required]],
      sexo: [null, [Validators.required]],
      endereco: this.formBuilder.group(

        {
            logradouro : [null, [Validators.required, Validators.maxLength(50)]],
            bairro: [null, [Validators.required, Validators.maxLength(20)]],
            cep:    [null, [Validators.minLength(9), Validators.maxLength(9)]],
            cidade: [null, [Validators.required, Validators.maxLength(20)]],
            numero: [null, [Validators.maxLength(50)]],
            complemento: [null, [Validators.maxLength(100)]],
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

    this.isConsultandoCep = true;

    this.correiosService.buscarCep(value).subscribe(enderecoWeb => {

      this.isConsultandoCep = false;

      this.resourceForm.get('endereco.bairro').setValue(enderecoWeb.bairro);
      this.resourceForm.get('endereco.cidade').setValue(enderecoWeb.localidade);
      this.resourceForm.get('endereco.complemento').setValue(enderecoWeb.complemento);
      this.resourceForm.get('endereco.logradouro').setValue(enderecoWeb.logradouro);
      this.resourceForm.get('endereco.estado').setValue(enderecoWeb.uf);

  },
  error => {
    this.isConsultandoCep = false;
    if (error.error.message === 'mensagemErroCepNaoEncontrado') {
        toastr.warning('CEP não encontrado !');
    }
  });

  }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Visitante';
  }

  protected editionPageTitle(): string {
    const visitanteDescricao: string  = this.resource.nome || '' ;
    return 'Editando Visitante : ' + visitanteDescricao;
  }

}


