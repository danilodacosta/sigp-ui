import { Validators } from '@angular/forms';
import { SolicitacaoArmazemService } from './../shared/solicitacao-armazem.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Component, Injector } from '@angular/core';
import { SolicitacaoArmazem } from '../shared/solicitacao-armazem.model';

@Component({
  selector: 'app-solicitacao-armazem-form',
  templateUrl: './solicitacao-armazem-form.component.html',
  styleUrls: ['./solicitacao-armazem-form.component.scss']
})
export class SolicitacaoArmazemFormComponent extends BaseResourceFormComponent<SolicitacaoArmazem> {

  display = false;

  constructor(protected solicitacaoArmazemService: SolicitacaoArmazemService, protected injector: Injector) {
    super(injector, new SolicitacaoArmazem(), solicitacaoArmazemService, SolicitacaoArmazem.fromJson);
  }

  ptBR = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
    monthNames: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Hoje',
    clear: 'Limpar'
  };


  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
     id : [null],
     numero: [null, [Validators.required]],
     solicitante: [null,  [Validators.required]],
     dataEmissao: [null ,  [ Validators.required ]]
   });
 }

 protected creationPageTitle(): string {
   return 'Nova Solicitação de Armazém';
 }

 protected editionPageTitle(): string {
   const solicitacao: string  = this.resource.numero || '' ;
   return 'Alterando Solicitação : ' + solicitacao;
 }

 showDialog() {
     this.display = true;
 }


}
