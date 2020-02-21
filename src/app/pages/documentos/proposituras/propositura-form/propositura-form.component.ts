import { TipoSituacaoEnum } from '../../../../shared/models/enums/tipo-situacao.enum';
import { CategoriaService } from '../../../cadastros/categorias/shared/categoria.service';
import { Categoria } from '../../../cadastros/categorias/shared/categoria.model';
import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Propositura } from '../shared/propositura.model';
import { ProposituraService } from '../shared/propositura.service';

@Component({
  selector: 'app-propositura-form',
  templateUrl: './propositura-form.component.html',
  styleUrls: ['./propositura-form.component.scss']
})
export class ProposituraFormComponent extends BaseResourceFormComponent<Propositura> implements OnInit  {

  categorias: Array<Categoria>;
  situacao = TipoSituacaoEnum;

  constructor(protected proposituraService: ProposituraService,
              private categoriaService: CategoriaService,
              protected injector: Injector) {
    super(injector, new Propositura(), proposituraService, Propositura.fromJson);
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
    return 'Cadastro de Novo Propositura';
  }

  protected editionPageTitle(): string {
    const proposituraDescricao: string  = this.resource.numero + '' || '' ;
    return 'Editando Propositura : ' + proposituraDescricao;
  }

  private loadCategorias() {
    this.categoriaService.getAll().subscribe(
      categorias => this.categorias = categorias
    );
  }

}


