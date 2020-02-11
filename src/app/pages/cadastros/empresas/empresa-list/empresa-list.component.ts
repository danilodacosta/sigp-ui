import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Empresa } from '../shared/empresa.model';
import { EmpresaService } from '../shared/empresa.service';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.scss']
})
export class EmpresaListComponent extends BaseResourceListComponent<Empresa> {

  constructor(protected empresaService: EmpresaService) {
    super(empresaService);
  }

}
