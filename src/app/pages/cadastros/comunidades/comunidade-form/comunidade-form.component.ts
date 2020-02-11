import { Mascaras } from '../../../../shared/directives/mascaras';
import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Comunidade } from '../shared/comunidade.model';
import { ComunidadeService } from '../shared/comunidade.service';
import { RepresentanteService } from '../../representantes/shared/representante.service';
import { Representante } from '../../representantes/shared/representante.model';


@Component({
  selector: 'app-comunidade-form',
  templateUrl: './comunidade-form.component.html',
  styleUrls: ['./comunidade-form.component.scss']
})
export class ComunidadeFormComponent extends BaseResourceFormComponent<Comunidade> implements OnInit  {

  representantes: Array<Representante>;

  constructor(protected comunidadeService: ComunidadeService,
              private representanteService: RepresentanteService,
              protected injector: Injector) {
    super(injector, new Comunidade(), comunidadeService, Comunidade.fromJson);
  }

  ngOnInit() {
    this.loadRepresenatantes();
    super.ngOnInit();
  }

  protected buildResourceForm(): void {
     this.resourceForm = this.formBuilder.group({
      id : [null],
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(45)]],
      bairro : [null, [Validators.required,  Validators.maxLength(30)]],
      distrito: [null, [Validators.required, Validators.maxLength(60)]],
      representante: [null, [Validators.required]],
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Nova Comunidade';
  }

  protected editionPageTitle(): string {
    const comunidadeDescricao: string  = this.resource.nome || '' ;
    return 'Editando Comunidade : ' + comunidadeDescricao;
  }


  private loadRepresenatantes() {
    this.representanteService.getAll().subscribe(
      representantes => this.representantes = representantes
    );
  }

}


