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
      assunto: [null, [Validators.required, Validators.maxLength(255)]],
      auditoria: [null, [Validators.required, Validators.maxLength(30)]],
      bairro: [null, [Validators.required, Validators.maxLength(20)]],
      protocolo: [null, [Validators.required, Validators.maxLength(30)]],
      resumo : [null, [Validators.required, Validators.maxLength(100)]],
      rua: [null, [Validators.required, Validators.maxLength(50)]],
      situacao: [null, [Validators.required]],
      solicitante: [null, [Validators.required, Validators.maxLength(50)]],
      tipo: [null, [Validators.required]],
      categoria: [null, [Validators.required]]
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


