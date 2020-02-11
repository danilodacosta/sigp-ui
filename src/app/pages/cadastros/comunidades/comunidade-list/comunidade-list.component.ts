import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Comunidade } from '../shared/comunidade.model';
import { ComunidadeService } from '../shared/comunidade.service';

@Component({
  selector: 'app-comunidade-list',
  templateUrl: './comunidade-list.component.html',
  styleUrls: ['./comunidade-list.component.scss']
})
export class ComunidadeListComponent extends BaseResourceListComponent<Comunidade> {

  constructor(protected comunidadeService: ComunidadeService) {
    super(comunidadeService);
  }

}
