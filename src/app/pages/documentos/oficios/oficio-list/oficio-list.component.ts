import { TipoSituacaoEnum } from '../../../../shared/models/enums/tipo-situacao.enum';
import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Oficio } from '../shared/oficio.model';
import { OficioService } from '../shared/oficio.service';

@Component({
  selector: 'app-oficio-list',
  templateUrl: './oficio-list.component.html',
  styleUrls: ['./oficio-list.component.scss']
})
export class OficioListComponent extends BaseResourceListComponent<Oficio> {

  situacaoEnum = TipoSituacaoEnum;

  constructor(protected oficioService: OficioService) {
    super(oficioService);
  }

}
