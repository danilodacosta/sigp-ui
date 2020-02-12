import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Visitante } from '../shared/visitante.model';
import { VisitanteService } from '../shared/visitante.service';

@Component({
  selector: 'app-visitante-list',
  templateUrl: './visitante-list.component.html',
  styleUrls: ['./visitante-list.component.scss']
})
export class VisitanteListComponent extends BaseResourceListComponent<Visitante> {

  constructor(protected visitanteService: VisitanteService) {
    super(visitanteService);
  }

}
