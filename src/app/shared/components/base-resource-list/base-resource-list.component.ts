import { OnInit } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { BaseResourceModel } from '../../models/base-resource.model';
import toastr from 'toastr';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  public resources: T[];
  public isLoadingResources = false;

  constructor(protected baseResourceService: BaseResourceService<T>) { }

  ngOnInit() {
    this.isLoadingResources = true;
    this.baseResourceService.getAll().subscribe(
      (resources => {
        this.isLoadingResources = false;
        this.resources = resources;
      }),
      (error: any) => {
        alert('Error ao carregar listagem');
        this.isLoadingResources = false;
    });
    }

    deleteResource(resource: T) {
      this.isLoadingResources = true;
      const mustDelete = confirm('Deseja realmente excluir esse item ?');

      if (mustDelete) {
      this.baseResourceService.delete(resource.id).subscribe(
        () => {
          toastr.success('Solicitação processada com sucesso!');
          this.isLoadingResources = false;
          this.resources = this.resources.filter(element => element !== resource);
        },
        () => {
          toastr.error('Ocorreu um erro ao processar a sua solicitação');
          this.isLoadingResources = false;
        }
      );
    }
  }
}
