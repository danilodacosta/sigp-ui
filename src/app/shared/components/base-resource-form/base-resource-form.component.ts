import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import { OnInit, AfterContentChecked, Injector } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import toastr from 'toastr';

export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked {

  currentAction: string;
  resourceForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm = false;

  protected loadingResources = false;

  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData: any) => T
   ) {
     this.route = this.injector.get(ActivatedRoute);
     this.router = this.injector.get(Router);
     this.formBuilder = this.injector.get(FormBuilder);
    }

  ngOnInit() {
    this.setCurrentAction();
    this.buildResourceForm();
    this.loadResource();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  submitForm() {
    this.submittingForm = true;
    if (this.currentAction === 'new') {
       this.createResource(); // criando resource
    } else {
      this.updateResource(); // editando resource
    }
  }

  // PROTECTED METHODS

  protected setCurrentAction() {
    if (this.route.snapshot.url[0].path === 'new') {
         this.currentAction = 'new';
    } else {
       this.currentAction = 'edit';
    }
  }

  protected loadResource() {
    if (this.currentAction === 'edit') {
        this.loadingResources = true;
        this.route.paramMap.pipe(
          switchMap(params => this.resourceService.getById(+params.get('id')))
      )
      .subscribe(
        (resource) => {
         this.loadingResources = false;
         this.resource = resource;
         this.executaPreSetItem();
         this.resourceForm.patchValue(resource); // binds loaded resource data to resource forms. setando valores retonados
         this.executaPosSetItem();
        },
        (error) => {
          this.loadingResources = false;
          toastr.error('Ocorreu um erro no servidor, tente novamente mais tarde');
        }
      );
    }
  }

  protected executaPreSetItem() {}
  protected executaPosSetItem() {}

  protected setPageTitle() {
  if (this.currentAction === 'new') {
      this.pageTitle =  this.creationPageTitle();
  } else {
      this.pageTitle = this.editionPageTitle();
  }
}

protected selectComparator(t1: T, t2: T): boolean {
  return t1 && t2 ? t1.id === t2.id : t1 === t2;
}

protected selectEnumComparator(t1: string, t2: string): boolean {
  return t1 && t2 ? t1 === t2 : false;
}

protected creationPageTitle(): string {
   return 'Novo';
}

protected editionPageTitle(): string {
  return 'Editando';
}

protected createResource() {
  const resource: T =  this.jsonDataToResourceFn(this.resourceForm.value);
  this.loadingResources = true;
  this.resourceService.create(resource)
  .subscribe(
    // tslint:disable-next-line: no-shadowed-variable
    (resource) => {
      this.loadingResources = false;
      this.actionsForSuccess(resource);
    },
    (error) => {
      this.loadingResources = false;
      this.actionsForError(error);
    }
  );
}

protected updateResource() {
  const resource: T =  this.jsonDataToResourceFn(this.resourceForm.value);
  this.loadingResources = true;
  this.resourceService.update(resource)
  .subscribe(
    (resource) => {
      this.loadingResources = false;
      this.actionsForSuccess(resource);
    },
    (error) => {
      this.actionsForError(error);
      this.loadingResources = false;
    }
  );
}

protected actionsForSuccess(resource: T) {
  toastr.success('Solicitação processada com sucesso!');

  const baseComponentPath: string = this.route.snapshot.parent.url[0].path;

  // skipLocationChange: true - não armazenar no historico de navegação do browser.
  this.router.navigateByUrl(baseComponentPath, {skipLocationChange: true}).then(
    () => this.router.navigate([baseComponentPath, resource.id, 'edit'])
  ); // redirect component page.
}

protected actionsForError(error) {
  toastr.error('Ocorreu um erro ao processar a sua solicitação');

  this.submittingForm = false;

  if (error.status === 422) {
    this.serverErrorMessages = JSON.parse(error._body).errors;
  } else {
    this.serverErrorMessages = ['Falha na comunicação com o servidor. Por favor tente mais tarde.'];
  }
}

protected abstract buildResourceForm(): void;

}


