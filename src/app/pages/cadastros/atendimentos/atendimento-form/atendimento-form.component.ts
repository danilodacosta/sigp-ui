import { VisitanteService } from './../../visitantes/shared/visitante.service';
import { Mascaras } from './../../../../shared/directives/mascaras';
import { ComunidadeService } from './../../comunidades/shared/comunidade.service';
import { CategoriaService } from './../../categorias/shared/categoria.service';
import { Categoria } from './../../categorias/shared/categoria.model';
import { Comunidade } from './../../comunidades/shared/comunidade.model';
import { Visitante } from './../../visitantes/shared/visitante.model';
import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { TipoSituacaoEnum } from '../../../../shared/models/enums/tipo-situacao.enum';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Atendimento } from '../shared/atendimento.model';
import { AtendimentoService } from '../shared/atendimento.service';

@Component({
  selector: 'app-atendimento-form',
  templateUrl: './atendimento-form.component.html',
  styleUrls: ['./atendimento-form.component.scss']
})
export class AtendimentoFormComponent extends BaseResourceFormComponent<Atendimento> implements OnInit {

  visitantes: Array<Visitante>;
  comunidades: Array<Comunidade>;
  categorias: Array<Categoria>;
  situacao = TipoSituacaoEnum;
  ptBR = Mascaras.calendarPtBr;

  constructor(protected atendimentoService: AtendimentoService,
              protected injector: Injector,
              private categoriaService: CategoriaService,
              private comunidadeService: ComunidadeService,
              private visitanteService: VisitanteService) {
    super(injector, new Atendimento(), atendimentoService, Atendimento.fromJson);
  }

  ngOnInit() {
    this.loadvisitantes();
    this.loadComunidades();
    this.loadCategorias();
    super.ngOnInit();
  }

  protected buildResourceForm(): void {
     this.resourceForm = this.formBuilder.group({
      id : [null],
      atendente: [null, [Validators.required, Validators.maxLength(25)]],
      data: [null, [Validators.required]],
      indicacao: [null, [Validators.required, Validators.maxLength(30)]],
      prazo: [null],
      protocolo: [null, [Validators.required , Validators.maxLength(11)]],
      situacao: [null, [Validators.required]],
      solicitacao: [null, [Validators.required , Validators.maxLength(255)]],
      categoria: [null, [Validators.required]],
      comunidade: [null, [Validators.required]],
      visitante: [null, [Validators.required]]
    });

  }

  protected executaPreSetItem() {

    if (this.resource.data) {
       const newDate = new Date(this.resource.data);
       newDate.setDate(newDate.getDate() + 1);
       this.resource.data = newDate;
    }

    if (this.resource.prazo) {
      const newDate = new Date(this.resource.prazo);
      newDate.setDate(newDate.getDate() + 1);
      this.resource.prazo = newDate;
   }

 }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Atendimento';
  }

  protected editionPageTitle(): string {
    const atendimentoDescricao: string  = this.resource.protocolo || '' ;
    return 'Editando Atendimento : ' + atendimentoDescricao;
  }

  private loadCategorias() {
    this.categoriaService.getAll().subscribe(
      response => this.categorias = response
    );
  }

  private loadComunidades() {
    this.comunidadeService.getAll().subscribe(
      response => this.comunidades = response
    );
  }

  private loadvisitantes() {
    this.visitanteService.getAll().subscribe(
      response => this.visitantes = response
    );
  }


}


