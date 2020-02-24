import { TipoSituacaoEnum } from '../../../../shared/models/enums/tipo-situacao.enum';
import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Oficio } from '../shared/oficio.model';
import { OficioService } from '../shared/oficio.service';
import { Mascaras} from '../../../../shared/directives/mascaras';


@Component({
  selector: 'app-oficio-form',
  templateUrl: './oficio-form.component.html',
  styleUrls: ['./oficio-form.component.scss']
})
export class OficioFormComponent extends BaseResourceFormComponent<Oficio> implements OnInit  {

  situacao = TipoSituacaoEnum;

  ptBR = Mascaras.calendarPtBr;

  constructor(protected oficioService: OficioService,
              protected injector: Injector) {
    super(injector, new Oficio(), oficioService, Oficio.fromJson);
  }


  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
     id : [null],
     data: [null, [Validators.required]],
     assunto: [null, [Validators.required, Validators.maxLength(40)]],
     sequencia: [null, [Validators.required, Validators.maxLength(11)]],
     destino: [null, [Validators.required, Validators.maxLength(30)]],
     situacao : [null, [Validators.required]],
     responsavel: [null, [Validators.required, Validators.maxLength(30)]],
     resumo: [null, [Validators.required]]
   });
 }

  protected executaPreSetItem() {
    if (this.resource.data) {
       const newDate = new Date(this.resource.data);
       newDate.setDate(newDate.getDate() + 1);
       this.resource.data = newDate;
    }
 }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Oficio';
  }

  protected editionPageTitle(): string {
    const oficioDescricao: string  = this.resource.assunto + '' || '' ;
    return 'Editando Oficio : ' + oficioDescricao;
  }

}


