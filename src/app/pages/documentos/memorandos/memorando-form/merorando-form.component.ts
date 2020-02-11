import { TipoSituacaoEnum } from './../../../../shared/models/enums/tipo-situacao.enum';
import { CategoriaService } from './../../../cadastros/categorias/shared/categoria.service';
import { Categoria } from './../../../cadastros/categorias/shared/categoria.model';
import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Memorando } from '../shared/memorando.model';
import { MemorandoService } from '../shared/memorando.service';

@Component({
  selector: 'app-memorando-form',
  templateUrl: './memorando-form.component.html',
  styleUrls: ['./memorando-form.component.scss']
})
export class MemorandoFormComponent extends BaseResourceFormComponent<Memorando> implements OnInit  {

  categorias: Array<Categoria>;
  situacao = TipoSituacaoEnum;

  constructor(protected memorandoService: MemorandoService,
              private categoriaService: CategoriaService,
              protected injector: Injector) {
    super(injector, new Memorando(), memorandoService, Memorando.fromJson);
    console.log(this.situacao);
  }

  ngOnInit() {
    this.loadCategorias();
    super.ngOnInit();
  }

  protected buildResourceForm(): void {
     this.resourceForm = this.formBuilder.group({
      id : [null],
      destinatario: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
      numero: [null, [Validators.required]],
      situacao : [null, [Validators.required]],
      solicitante: [null, [Validators.required, Validators.maxLength(40)]],
      categoria: [null, [Validators.required]],
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Memorando';
  }

  protected editionPageTitle(): string {
    const memorandoDescricao: string  = this.resource.numero.toString() || '' ;
    return 'Editando Memorando : ' + memorandoDescricao;
  }

  private loadCategorias() {
    this.categoriaService.getAll().subscribe(
      categorias => this.categorias = categorias
    );
  }

}


