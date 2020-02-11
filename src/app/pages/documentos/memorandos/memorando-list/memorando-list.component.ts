import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Memorando } from '../shared/memorando.model';
import { MemorandoService } from '../shared/memorando.service';

@Component({
  selector: 'app-memorando-list',
  templateUrl: './memorando-list.component.html',
  styleUrls: ['./memorando-list.component.scss']
})
export class MemorandoListComponent extends BaseResourceListComponent<Memorando> {

  constructor(protected memorandoService: MemorandoService) {
    super(memorandoService);
  }

}
