import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Representante } from '../shared/representante.model';
import { RepresentanteService } from '../shared/representante.service';

@Component({
  selector: 'app-representante-list',
  templateUrl: './representante-list.component.html',
  styleUrls: ['./representante-list.component.scss']
})
export class RepresentanteListComponent extends BaseResourceListComponent<Representante> {

  constructor(protected representanteService: RepresentanteService) {
    super(representanteService);
  }

}
