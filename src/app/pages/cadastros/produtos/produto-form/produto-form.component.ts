import { Mascaras } from './../../../../shared/directives/mascaras';
import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Produto } from './../shared/produto.model';
import { ProdutoService } from '../shared/produto.service';


@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent extends BaseResourceFormComponent<Produto> {

  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ','
  };


  constructor(protected produtoService: ProdutoService, protected injector: Injector) {
    super(injector, new Produto(), produtoService, Produto.fromJson);
  }

  protected buildResourceForm(): void {
     this.resourceForm = this.formBuilder.group({
      id : [null],
      descricao: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      unidade: [null,  [Validators.required , Validators.pattern(Mascaras.numberPattern)]],
      contaContabil: [null ,  [ Validators.pattern(Mascaras.numberPattern), Validators.required , Validators.maxLength(15)]],
      almoxarifado: [null ,  [ Validators.pattern(Mascaras.numberPattern), Validators.required , Validators.maxLength(2)]],
      ultimoPrecoCompra: [null , [Validators.required]]
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Produto';
  }

  protected editionPageTitle(): string {
    const produtoDescricao: string  = this.resource.descricao || '' ;
    return 'Editando Produto : ' + produtoDescricao;
  }

}


